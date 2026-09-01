import { useMemo } from "react";
import { format } from "date-fns";

import {
  defineChart,
  lineY,
  scaleBand,
  scaleLinear,
  tooltip,
  TanStackChart,
  type ChartConfig,
  type ChartTooltipBodyRenderContext,
} from "@/components/ui/chart";

import { useAppStore } from "@/lib/store";

const FUNDS_LABEL = "Funds raised";

const chartConfig: ChartConfig = {
  "funds-raised": {
    label: FUNDS_LABEL,
    color: "var(--color-green)",
  },
  "Funds raised": {
    label: FUNDS_LABEL,
    color: "var(--color-green)",
  },
  line0: {
    label: FUNDS_LABEL,
    color: "var(--color-green)",
  },
};

function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function InvestmentChart() {
  const { investmentData } = useAppStore();

  const chartDefinition = useMemo(() => {
    return defineChart({
      marks: [
        lineY(investmentData, {
          id: "funds-raised",
          z: () => FUNDS_LABEL,
          x: (d) => format(new Date(d.date > 1e11 ? d.date : d.date * 1000), "MM/dd/yy"),
          y: "amount",
          stroke: "var(--color-green)",
          strokeWidth: 3,
        }),
      ],
      scales: {
        x: {
          scale: () => scaleBand<string>().padding(0.25),
        },
        y: {
          scale: scaleLinear,
          nice: true,
          grid: true,
        },
      },
      tooltip,
    });
  }, [investmentData]);

  return (
    <TanStackChart
      config={chartConfig}
      definition={chartDefinition}
      ariaLabel="Omacom Foundation funds raised"
      height={280}
      containerClassName="aspect-auto h-[280px]"
      renderTooltipBody={(ctx: ChartTooltipBodyRenderContext) => {
        const point = ctx.points?.[0];
        if (!point) return null;
        const amount =
          typeof point.yValue === "number" ? money(point.yValue) : String(point.yValue ?? "");
        return (
          <div className="min-w-40 border border-border bg-background p-2.5 text-xs shadow-xl">
            <div className="font-semibold text-foreground">{String(point.xValue ?? "")}</div>
            <div className="mt-1.5 flex items-center justify-between gap-3">
              <span className="text-muted-foreground">{FUNDS_LABEL}</span>
              <span className="font-mono font-medium text-green tabular-nums">{amount}</span>
            </div>
          </div>
        );
      }}
    />
  );
}
