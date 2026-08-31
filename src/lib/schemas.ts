import { z } from "zod";

/**
 * Metric/Analytics record schema for charts & data tables
 */
export const analyticsRecordSchema = z.object({
  id: z.string().min(1),
  category: z.string().min(1, "Category is required"),
  month: z.string().min(1, "Month is required"),
  revenue: z.number().nonnegative("Revenue must be positive"),
  expenses: z.number().nonnegative("Expenses must be positive"),
  profit: z.number(),
  growthRate: z.number().min(-100).max(1000),
  status: z.enum(["active", "pending", "archived"]).default("active"),
});

export type AnalyticsRecord = z.infer<typeof analyticsRecordSchema>;

/**
 * Project / Task item schema for forms and state
 */
export const projectItemSchema = z.object({
  id: z.string().default(() => Math.random().toString(36).substring(2, 9)),
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().optional(),
  category: z.enum(["frontend", "backend", "design", "devops", "analytics"]),
  budget: z.number().min(100, "Minimum budget is $100"),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  isCompleted: z.boolean().default(false),
  tags: z.array(z.string()).default([]),
  dueDate: z.string().optional(),
});

export type ProjectItem = z.infer<typeof projectItemSchema>;

/**
 * Filter and query state schema
 */
export const filterQuerySchema = z.object({
  search: z.string().default(""),
  category: z.string().default("all"),
  sortBy: z.enum(["revenue", "profit", "growthRate", "month"]).default("month"),
  sortOrder: z.enum(["asc", "desc"]).default("desc"),
  limit: z.number().int().positive().max(100).default(10),
});

export type FilterQuery = z.infer<typeof filterQuerySchema>;
