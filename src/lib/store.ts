import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AnalyticsRecord, ProjectItem, FilterQuery, InvestmentRecord } from "./schemas";

export interface AppState {
  // Analytics dataset for Charts & Tables
  investmentData: InvestmentRecord[];
  analyticsData: AnalyticsRecord[];
  selectedMetricId: string | null;
  selectedCategory: string;

  // Project items for Forms & Tables
  projects: ProjectItem[];

  // Query filters
  filters: FilterQuery;

  // Actions
  setSelectedMetricId: (id: string | null) => void;
  setSelectedCategory: (category: string) => void;
  addProject: (project: ProjectItem) => void;
  removeProject: (id: string) => void;
  updateProject: (id: string, partial: Partial<ProjectItem>) => void;
  setFilters: (filters: Partial<FilterQuery>) => void;
  resetData: () => void;
}

export const INITIAL_INVESTMENT_DATA: InvestmentRecord[] = [
  {
    id: "i1",
    date: 1787328069,
    amount: 8000000.0,
  },
  {
    id: "i2",
    date: 1787568758,
    amount: 10000000.0,
  },
  {
    id: "i3",
    date: 1788181746,
    amount: 12000000.0,
  },
  {
    id: "i4",
    date: 1788184247,
    amount: 12600000.0,
  },
  {
    id: "i5",
    date: 1788347325,
    amount: 13000000.0,
  },
];

export const INITIAL_ANALYTICS_DATA: AnalyticsRecord[] = [
  {
    id: "m1",
    month: "Jan",
    category: "Enterprise",
    revenue: 18600,
    expenses: 11200,
    profit: 7400,
    growthRate: 14.2,
    status: "active",
  },
  {
    id: "m2",
    month: "Feb",
    category: "Enterprise",
    revenue: 30500,
    expenses: 14800,
    profit: 15700,
    growthRate: 22.8,
    status: "active",
  },
  {
    id: "m3",
    month: "Mar",
    category: "Enterprise",
    revenue: 23700,
    expenses: 12500,
    profit: 11200,
    growthRate: -8.1,
    status: "active",
  },
  {
    id: "m4",
    month: "Apr",
    category: "Enterprise",
    revenue: 27300,
    expenses: 13900,
    profit: 13400,
    growthRate: 15.3,
    status: "active",
  },
  {
    id: "m5",
    month: "May",
    category: "Enterprise",
    revenue: 30900,
    expenses: 15200,
    profit: 15700,
    growthRate: 13.2,
    status: "active",
  },
  {
    id: "m6",
    month: "Jun",
    category: "Enterprise",
    revenue: 36400,
    expenses: 16800,
    profit: 19600,
    growthRate: 17.8,
    status: "active",
  },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: "p1",
    title: "Migrate Shadcn Charts to TanStack Charts",
    description: "Adopt grammar of graphics visualization and modern D3 primitives",
    category: "frontend",
    budget: 4500,
    priority: "urgent",
    isCompleted: true,
    tags: ["charts", "tanstack", "d3"],
  },
  {
    id: "p2",
    title: "Integrate TanStack Table & Form with Zod",
    description: "Implement headless data table components and typed validation",
    category: "frontend",
    budget: 3200,
    priority: "high",
    isCompleted: true,
    tags: ["table", "form", "zod"],
  },
  {
    id: "p3",
    title: "Lightbulb Theme System Switcher",
    description: "System or opposite-of-system binary toggle with custom icon states",
    category: "design",
    budget: 1800,
    priority: "medium",
    isCompleted: false,
    tags: ["theme", "zustand", "ui"],
  },
];

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      analyticsData: INITIAL_ANALYTICS_DATA,
      investmentData: INITIAL_INVESTMENT_DATA,
      selectedMetricId: null,
      selectedCategory: "all",
      projects: INITIAL_PROJECTS,
      filters: {
        search: "",
        category: "all",
        sortBy: "month",
        sortOrder: "desc",
        limit: 10,
      },

      setSelectedMetricId: (id) => set({ selectedMetricId: id }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),

      addProject: (project) => set((state) => ({ projects: [project, ...state.projects] })),

      removeProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),

      updateProject: (id, partial) =>
        set((state) => ({
          projects: state.projects.map((p) => (p.id === id ? { ...p, ...partial } : p)),
        })),

      setFilters: (newFilters) =>
        set((state) => ({ filters: { ...state.filters, ...newFilters } })),

      resetData: () =>
        set({
          analyticsData: INITIAL_ANALYTICS_DATA,
          projects: INITIAL_PROJECTS,
          selectedMetricId: null,
          selectedCategory: "all",
        }),
    }),
    {
      name: "omarchy_app_store",
      partialize: (state) => ({
        projects: state.projects,
        analyticsData: state.analyticsData,
      }),
    },
  ),
);
