"use client";

import * as React from "react";
import {
  defineChart,
  barY,
  barX,
  lineY,
  lineX,
  areaY,
  areaX,
  rect,
  cell,
  dot,
  ruleX,
  ruleY,
  text,
  type ChartPoint,
  type DomChartDefinition as ChartDefinition,
  type ChartValue,
} from "@tanstack/charts";
import { scaleBand } from "@tanstack/charts/scales/band";
import { scaleLinear } from "@tanstack/charts/scales/linear";
import { scalePoint } from "@tanstack/charts/scales/point";
import { scaleOrdinal } from "@tanstack/charts/scales/ordinal";
import { tooltip } from "@tanstack/charts/tooltip";
import {
  Chart,
  type ChartProps,
  type ChartTooltipBodyRenderContext,
} from "@tanstack/react-charts/tooltip";

import { cn } from "@/lib/utils";

// Re-export TanStack Charts primitives and scale factories
export {
  defineChart,
  barY,
  barX,
  lineY,
  lineX,
  areaY,
  areaX,
  rect,
  cell,
  dot,
  ruleX,
  ruleY,
  text,
  scaleBand,
  scaleLinear,
  scalePoint,
  scaleOrdinal,
  tooltip,
  Chart,
  type ChartPoint,
  type ChartDefinition,
  type ChartValue,
  type ChartProps,
  type ChartTooltipBodyRenderContext,
};

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
>;

type ChartContextProps = {
  config: ChartConfig;
  chartId?: string;
};

const ChartContext = React.createContext<ChartContextProps | null>(null);

export function useChart() {
  const context = React.useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }
  return context;
}

/* -------------------------------------------------------------------------- */
/*                               Chart Container                              */
/* -------------------------------------------------------------------------- */

export interface ChartContainerProps extends React.ComponentProps<"div"> {
  config: ChartConfig;
  children?: React.ReactNode;
}

export function ChartContainer({ id, className, children, config, ...props }: ChartContainerProps) {
  const uniqueId = React.useId();
  const chartId = `chart-${id ?? uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config, chartId }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "relative flex aspect-video w-full justify-center text-xs",
          "[&_svg]:overflow-visible",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        {children}
      </div>
    </ChartContext.Provider>
  );
}

/* -------------------------------------------------------------------------- */
/*                                 Chart Style                                */
/* -------------------------------------------------------------------------- */

export const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(([, conf]) => conf.theme ?? conf.color);

  if (!colorConfig.length) {
    return null;
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart="${id}"] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color = itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ?? itemConfig.color;
    return color ? `  --color-${key}: ${color};  --ts-chart-${key}: ${color};` : null;
  })
  .filter(Boolean)
  .join("\n")}
}
`,
          )
          .join("\n"),
      }}
    />
  );
};

/* -------------------------------------------------------------------------- */
/*                     High-Level TanStack Chart Wrapper                      */
/* -------------------------------------------------------------------------- */

export interface TanStackChartProps<
  TDatum = unknown,
  TXValue extends ChartValue = ChartValue,
  TYValue extends ChartValue = ChartValue,
> extends Omit<ChartProps<TDatum, TXValue, TYValue>, "definition"> {
  config: ChartConfig;
  definition: ChartDefinition<TDatum, TXValue, TYValue>;
  className?: string;
  containerClassName?: string;
}

export function TanStackChart<
  TDatum = unknown,
  TXValue extends ChartValue = ChartValue,
  TYValue extends ChartValue = ChartValue,
>({
  config,
  definition,
  ariaLabel,
  height = 300,
  aspectRatio,
  className,
  containerClassName,
  renderTooltipBody,
  ...props
}: TanStackChartProps<TDatum, TXValue, TYValue>) {
  return (
    <ChartContainer config={config} className={containerClassName}>
      <Chart
        definition={definition}
        ariaLabel={ariaLabel}
        height={height}
        aspectRatio={aspectRatio}
        className={cn("w-full", className)}
        renderTooltipBody={
          renderTooltipBody ??
          ((ctx: ChartTooltipBodyRenderContext<TDatum, TXValue, TYValue>) => (
            <ChartTooltipContent context={ctx} />
          ))
        }
        {...props}
      />
    </ChartContainer>
  );
}

/* -------------------------------------------------------------------------- */
/*                             Chart Tooltip Content                          */
/* -------------------------------------------------------------------------- */

export interface ChartTooltipContentProps extends React.ComponentProps<"div"> {
  context?: ChartTooltipBodyRenderContext<any, any, any>;
  active?: boolean;
  payload?: any[];
  label?: React.ReactNode;
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "line" | "dot" | "dashed";
  nameKey?: string;
  labelKey?: string;
  formatter?: (value: any, name: any, item: any, index: number) => React.ReactNode;
}

export function ChartTooltipContent({
  context,
  active,
  payload,
  label,
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  nameKey,
  labelKey: _labelKey,
  formatter,
}: ChartTooltipContentProps) {
  const chartCtx = React.useContext(ChartContext);
  const config = chartCtx?.config ?? {};

  // 1. TanStack Charts Context Mode
  if (context?.points?.length) {
    const points = context.points;

    return (
      <div
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background/95 p-2.5 text-xs shadow-xl backdrop-blur-sm",
          className,
        )}
      >
        {!hideLabel && (
          <div className="font-semibold text-foreground">
            {String(points[0].xValue ?? points[0].groupLabel ?? "")}
          </div>
        )}
        <div className="grid gap-1.5">
          {points.map((point, index) => {
            const key = String(point.group ?? point.markId ?? "value");
            const itemConfig = config[key];
            const displayName = itemConfig?.label ?? point.groupLabel ?? key;
            const color = itemConfig?.color ?? (point as any).color ?? "var(--primary)";

            return (
              <div
                key={point.key ?? index}
                className="flex w-full items-center justify-between gap-3 text-xs"
              >
                <div className="flex items-center gap-1.5">
                  {!hideIndicator && (
                    <div
                      className={cn("shrink-0 rounded-[2px]", {
                        "size-2.5": indicator === "dot",
                        "h-3 w-1": indicator === "line",
                        "size-2 border border-dashed": indicator === "dashed",
                      })}
                      style={{ backgroundColor: color, borderColor: color }}
                    />
                  )}
                  <span className="text-muted-foreground">{displayName}</span>
                </div>
                <span className="font-mono font-medium text-foreground tabular-nums">
                  {typeof point.yValue === "number"
                    ? point.yValue.toLocaleString()
                    : String(point.yValue ?? "")}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 2. Recharts / Generic Payload Mode
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background/95 p-2.5 text-xs shadow-xl backdrop-blur-sm",
        className,
      )}
    >
      {!hideLabel && label && <div className="font-semibold text-foreground">{label}</div>}
      <div className="grid gap-1.5">
        {payload
          .filter((item) => item.type !== "none")
          .map((item, index) => {
            const key = `${nameKey ?? item.name ?? item.dataKey ?? "value"}`;
            const itemConfig = config[key];
            const displayName = itemConfig?.label ?? item.name ?? key;
            const itemColor =
              itemConfig?.color ?? item.payload?.fill ?? item.color ?? "var(--primary)";

            return (
              <div key={index} className="flex w-full items-center justify-between gap-3 text-xs">
                {formatter ? (
                  formatter(item.value, item.name, item, index)
                ) : (
                  <>
                    <div className="flex items-center gap-1.5">
                      {!hideIndicator && (
                        <div
                          className={cn("shrink-0 rounded-[2px]", {
                            "size-2.5": indicator === "dot",
                            "h-3 w-1": indicator === "line",
                            "size-2 border border-dashed": indicator === "dashed",
                          })}
                          style={{
                            backgroundColor: itemColor,
                            borderColor: itemColor,
                          }}
                        />
                      )}
                      <span className="text-muted-foreground">{displayName}</span>
                    </div>
                    {item.value != null && (
                      <span className="font-mono font-medium text-foreground tabular-nums">
                        {typeof item.value === "number"
                          ? item.value.toLocaleString()
                          : String(item.value)}
                      </span>
                    )}
                  </>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Chart Legend                                */
/* -------------------------------------------------------------------------- */

export interface ChartLegendContentProps extends React.ComponentProps<"div"> {
  payload?: Array<{ value?: string; dataKey?: string; color?: string }>;
  hideIcon?: boolean;
}

export function ChartLegendContent({
  className,
  payload,
  hideIcon = false,
}: ChartLegendContentProps) {
  const chartCtx = React.useContext(ChartContext);
  const config = chartCtx?.config ?? {};

  const items =
    payload ??
    Object.entries(config).map(([key, item]) => ({
      dataKey: key,
      value: (typeof item.label === "string" ? item.label : key) as string,
      color: item.color,
    }));

  if (!items?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-4 pt-3 text-xs text-muted-foreground",
        className,
      )}
    >
      {items.map((item, index) => {
        const key = item.dataKey ?? item.value ?? String(index);
        const itemConfig = config[key];
        const label = itemConfig?.label ?? item.value;

        return (
          <div key={index} className="flex items-center gap-1.5">
            {!hideIcon && (
              <div
                className="size-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color ?? itemConfig?.color ?? "var(--primary)",
                }}
              />
            )}
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}

export const ChartTooltip = ({ children }: { children?: React.ReactNode }) => children;
export const ChartLegend = ({ children }: { children?: React.ReactNode }) => children;
