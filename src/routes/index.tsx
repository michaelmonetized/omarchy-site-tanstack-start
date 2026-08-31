import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Plus, BarChart3, Table as TableIcon, Sparkles } from "lucide-react";
import { z } from "zod";

import {
  defineChart,
  barY,
  lineY,
  scaleBand,
  scaleLinear,
  tooltip,
  TanStackChart,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  DataTable,
  DataTableColumnHeader,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type ColumnDef,
  type SortingState,
} from "@/components/ui/table";
import {
  useForm,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  getFieldError,
} from "@/components/ui/form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppStore } from "@/lib/store";
import type { ProjectItem, AnalyticsRecord } from "@/lib/schemas";

export const Route = createFileRoute("/")({ component: DashboardPage });

const chartConfig: ChartConfig = {
  revenue: {
    label: "Revenue",
    color: "#0d9488", // teal
  },
  expenses: {
    label: "Expenses",
    color: "#f97316", // orange
  },
  profit: {
    label: "Profit",
    color: "#3b82f6", // blue
  },
};

function DashboardPage() {
  const {
    analyticsData,
    projects,
    addProject,
    removeProject,
    selectedMetricId,
    setSelectedMetricId,
  } = useAppStore();

  const [sorting, setSorting] = useState<SortingState>([]);

  // Memoized TanStack Chart Definition
  const chartDefinition = useMemo(() => {
    return defineChart({
      marks: [
        barY(analyticsData, {
          x: "month",
          y: "revenue",
          fill: "#0d9488",
          inset: 2,
        }),
        lineY(analyticsData, {
          x: "month",
          y: "expenses",
          stroke: "#f97316",
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
  }, [analyticsData]);

  // TanStack Form with Zod validation
  const form = useForm({
    defaultValues: {
      title: "",
      category: "frontend" as const,
      budget: 1500,
      priority: "medium" as const,
      description: "",
    },
    onSubmit: async ({ value }) => {
      const newProject: ProjectItem = {
        id: `p-${Date.now().toString(36)}`,
        title: value.title,
        category: value.category,
        budget: Number(value.budget),
        priority: value.priority,
        description: value.description,
        isCompleted: false,
        tags: ["tanstack"],
      };
      addProject(newProject);
      form.reset();
    },
  });

  // TanStack Table Column Definitions
  const columns = useMemo<ColumnDef<ProjectItem>[]>(
    () => [
      {
        accessorKey: "title",
        header: ({ column }: { column: any }) => (
          <DataTableColumnHeader column={column} title="Project / Task" />
        ),
        cell: ({ row }: { row: { original: ProjectItem } }) => (
          <div className="flex flex-col">
            <span className="font-medium text-foreground">{row.original.title}</span>
            {row.original.description && (
              <span className="text-xs text-muted-foreground">{row.original.description}</span>
            )}
          </div>
        ),
      },
      {
        accessorKey: "category",
        header: ({ column }: { column: any }) => (
          <DataTableColumnHeader column={column} title="Category" />
        ),
        cell: ({ row }: { row: { original: ProjectItem } }) => (
          <Badge variant="outline" className="capitalize">
            {row.original.category}
          </Badge>
        ),
      },
      {
        accessorKey: "budget",
        header: ({ column }: { column: any }) => (
          <DataTableColumnHeader column={column} title="Budget" />
        ),
        cell: ({ row }: { row: { original: ProjectItem } }) => (
          <span className="font-mono font-medium">${row.original.budget.toLocaleString()}</span>
        ),
      },
      {
        accessorKey: "priority",
        header: ({ column }: { column: any }) => (
          <DataTableColumnHeader column={column} title="Priority" />
        ),
        cell: ({ row }: { row: { original: ProjectItem } }) => {
          const priority = row.original.priority;
          const variant =
            priority === "urgent" || priority === "high"
              ? "destructive"
              : priority === "medium"
                ? "secondary"
                : "outline";
          return (
            <Badge variant={variant} className="capitalize">
              {priority}
            </Badge>
          );
        },
      },
      {
        id: "actions",
        header: "Action",
        cell: ({ row }: { row: { original: ProjectItem } }) => (
          <Button
            variant="ghost"
            size="xs"
            onClick={() => removeProject(row.original.id)}
            className="text-destructive hover:bg-destructive/10"
          >
            Delete
          </Button>
        ),
      },
    ],
    [removeProject],
  );

  const table = useReactTable({
    data: projects,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  return (
    <main className="page-wrap px-4 pb-16 pt-10">
      {/* Hero Header */}
      <section className="island-shell rise-in relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 mb-8">
        <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />

        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="secondary" className="gap-1.5 py-1 px-3">
            <Sparkles className="size-3.5 text-teal-600 dark:text-teal-400" />
            TanStack Suite + Shadcn/UI
          </Badge>
        </div>

        <h1 className="display-title mb-4 max-w-3xl text-3xl leading-[1.1] font-bold tracking-tight text-[var(--sea-ink)] sm:text-5xl">
          TanStack Charts, Table, Form & Theme Switcher
        </h1>
        <p className="mb-6 max-w-2xl text-base text-[var(--sea-ink-soft)] sm:text-lg">
          Integrated with modern grammar of graphics TanStack Charts, headless TanStack Table &
          Form, Zod schema validation, Zustand state, and lightbulb binary theme toggling.
        </p>
      </section>

      {/* Grid: TanStack Chart & Form */}
      <div className="grid gap-8 lg:grid-cols-12 mb-8">
        {/* TanStack Charts Section */}
        <Card className="lg:col-span-7 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="size-5 text-teal-600 dark:text-teal-400" />
                  TanStack Charts Visualization
                </CardTitle>
                <CardDescription>
                  Grammar of graphics with D3 primitives & shadcn CSS tokens
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  <span className="inline-block size-2 rounded-full bg-teal-600 mr-1.5" />
                  Revenue (Bar)
                </Badge>
                <Badge variant="outline" className="text-xs">
                  <span className="inline-block size-2 rounded-full bg-orange-500 mr-1.5" />
                  Expenses (Line)
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="rounded-xl border border-border/60 bg-muted/20 p-4">
              <TanStackChart
                config={chartConfig}
                definition={chartDefinition}
                height={280}
                ariaLabel="Revenue vs Expenses monthly chart"
                onFocusChange={(point) => {
                  if (point?.datum) {
                    const row = point.datum as AnalyticsRecord;
                    setSelectedMetricId(row.id);
                  }
                }}
              />
            </div>
            {selectedMetricId && (
              <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground px-1">
                <span>
                  Selected Month ID: <strong className="text-foreground">{selectedMetricId}</strong>
                </span>
                <Button variant="ghost" size="xs" onClick={() => setSelectedMetricId(null)}>
                  Clear selection
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* TanStack Form with Zod Validation */}
        <Card className="lg:col-span-5 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Plus className="size-5 text-teal-600 dark:text-teal-400" />
              Add Project (TanStack Form + Zod)
            </CardTitle>
            <CardDescription>Type-safe form with live schema validation</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                void form.handleSubmit();
              }}
              className="space-y-4"
            >
              {/* Title Field */}
              <form.Field
                name="title"
                validators={{
                  onChange: ({ value }) => {
                    const res = z
                      .string()
                      .min(2, "Title must be at least 2 characters")
                      .safeParse(value);
                    return res.success ? undefined : res.error.issues[0]?.message;
                  },
                }}
              >
                {(field) => (
                  <FormItem error={getFieldError(field)}>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. Redesign analytics dashboard"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              </form.Field>

              {/* Budget & Priority Fields */}
              <div className="grid grid-cols-2 gap-3">
                <form.Field
                  name="budget"
                  validators={{
                    onChange: ({ value }) => {
                      const res = z
                        .number()
                        .min(100, "Minimum budget is $100")
                        .safeParse(Number(value));
                      return res.success ? undefined : res.error.issues[0]?.message;
                    },
                  }}
                >
                  {(field) => (
                    <FormItem error={getFieldError(field)}>
                      <FormLabel>Budget ($)</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="1500"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(Number(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                </form.Field>

                <form.Field name="priority">
                  {(field) => (
                    <FormItem error={getFieldError(field)}>
                      <FormLabel>Priority</FormLabel>
                      <FormControl>
                        <select
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value as any)}
                          className="h-8 w-full rounded-lg border border-input bg-background px-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                </form.Field>
              </div>

              {/* Description Field */}
              <form.Field name="description">
                {(field) => (
                  <FormItem error={getFieldError(field)}>
                    <FormLabel>Description (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Brief summary of requirements..."
                        value={field.state.value ?? ""}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              </form.Field>

              <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
                {([canSubmit, isSubmitting]) => (
                  <Button
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
                    className="w-full mt-2"
                  >
                    {isSubmitting ? "Adding..." : "Create Project"}
                  </Button>
                )}
              </form.Subscribe>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* TanStack Table Section */}
      <Card className="shadow-sm">
        <CardHeader>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="space-y-1">
              <CardTitle className="flex items-center gap-2 text-lg">
                <TableIcon className="size-5 text-teal-600 dark:text-teal-400" />
                TanStack Table (Headless DataGrid)
              </CardTitle>
              <CardDescription>
                Sortable, paginated, and reactive with Zustand store
              </CardDescription>
            </div>
            <Badge variant="secondary">{projects.length} Total Projects</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <DataTable table={table} />
        </CardContent>
      </Card>
    </main>
  );
}
