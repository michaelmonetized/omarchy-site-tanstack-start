"use client";

import type * as React from "react";
import {
  flexRender,
  useTable,
  createColumnHelper,
  createCoreRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  createFilteredRowModel,
  type ReactTable,
} from "@tanstack/react-table";
import {
  useLegacyTable,
  useLegacyTable as useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type LegacyTable,
  type LegacyColumnDef as ColumnDef,
  type LegacyTableOptions,
} from "@tanstack/react-table/legacy";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type SortingState = Array<{ id: string; desc: boolean }>;

// Re-export TanStack Table primitives and types
export {
  flexRender,
  useTable,
  useLegacyTable,
  useReactTable,
  createColumnHelper,
  createCoreRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  createFilteredRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  type ReactTable,
  type LegacyTable,
  type ColumnDef,
  type LegacyTableOptions,
};

/* -------------------------------------------------------------------------- */
/*                            Shadcn Table Primitives                         */
/* -------------------------------------------------------------------------- */

function Table({ className, ...props }: React.ComponentProps<"table">) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto rounded-lg border border-border bg-card"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("bg-muted/40 [&_tr]:border-b", className)}
      {...props}
    />
  );
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("[&_tr:last-child]:border-0", className)}
      {...props}
    />
  );
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0", className)}
      {...props}
    />
  );
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted/80",
        className,
      )}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "h-10 px-3 text-left align-middle font-medium whitespace-nowrap text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-3 align-middle whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className,
      )}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*                      TanStack Table DataTable Component                     */
/* -------------------------------------------------------------------------- */

export interface DataTableProps {
  table: any;
  className?: string;
  emptyMessage?: React.ReactNode;
  showPagination?: boolean;
}

export function DataTable({
  table,
  className,
  emptyMessage = "No results found.",
  showPagination = true,
}: DataTableProps) {
  const headerGroups = table.getHeaderGroups ? table.getHeaderGroups() : [];
  const rowModel = table.getRowModel ? table.getRowModel() : { rows: [] };
  const rows = rowModel.rows || [];
  const columnCount = table.getAllColumns ? table.getAllColumns().length : 1;

  return (
    <div className={cn("w-full space-y-3", className)}>
      <Table>
        <TableHeader>
          {headerGroups.map((headerGroup: any) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => (
                <TableHead key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row: any) => (
              <TableRow key={row.id} data-state={row.getIsSelected?.() ? "selected" : undefined}>
                {row.getVisibleCells().map((cell: any) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columnCount} className="h-24 text-center text-muted-foreground">
                {emptyMessage}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {showPagination && <DataTablePagination table={table} />}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                     DataTable Pagination Controls                          */
/* -------------------------------------------------------------------------- */

export function DataTablePagination({ table, className }: { table: any; className?: string }) {
  const pageIndex = table.getState?.()?.pagination?.pageIndex ?? 0;
  const pageCount = table.getPageCount?.() ?? 1;
  const canPrevious = table.getCanPreviousPage?.() ?? false;
  const canNext = table.getCanNextPage?.() ?? false;
  const selectedRows = table.getFilteredSelectedRowModel?.()?.rows?.length ?? 0;
  const totalRows = table.getFilteredRowModel?.()?.rows?.length ?? 0;

  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-between gap-4 px-2 py-1 text-xs text-muted-foreground",
        className,
      )}
    >
      <div className="flex-1">
        {selectedRows > 0 && (
          <span>
            {selectedRows} of {totalRows} row(s) selected.
          </span>
        )}
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <span>
            Page {pageIndex + 1} of {pageCount || 1}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <Button
            variant="outline"
            size="icon-xs"
            onClick={() => table.setPageIndex?.(0)}
            disabled={!canPrevious}
            aria-label="Go to first page"
          >
            <ChevronsLeft className="size-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon-xs"
            onClick={() => table.previousPage?.()}
            disabled={!canPrevious}
            aria-label="Go to previous page"
          >
            <ChevronLeft className="size-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon-xs"
            onClick={() => table.nextPage?.()}
            disabled={!canNext}
            aria-label="Go to next page"
          >
            <ChevronRight className="size-3.5" />
          </Button>
          <Button
            variant="outline"
            size="icon-xs"
            onClick={() => table.setPageIndex?.(pageCount - 1)}
            disabled={!canNext}
            aria-label="Go to last page"
          >
            <ChevronsRight className="size-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                     DataTable Column Sort Header Helper                     */
/* -------------------------------------------------------------------------- */

export function DataTableColumnHeader({
  column,
  title,
  className,
}: {
  column: {
    getCanSort: () => boolean;
    getIsSorted: () => false | "asc" | "desc";
    toggleSorting: (desc?: boolean) => void;
  };
  title: string;
  className?: string;
}) {
  if (!column.getCanSort?.()) {
    return <div className={cn("text-xs font-semibold", className)}>{title}</div>;
  }

  const isSorted = column.getIsSorted?.();

  return (
    <Button
      variant="ghost"
      size="xs"
      className={cn("-ml-2 h-7 px-2 text-xs font-semibold hover:bg-muted/80", className)}
      onClick={() => column.toggleSorting?.(isSorted === "asc")}
    >
      <span>{title}</span>
      {isSorted === "desc" ? (
        <ArrowDown className="ml-1 size-3 text-primary" />
      ) : isSorted === "asc" ? (
        <ArrowUp className="ml-1 size-3 text-primary" />
      ) : (
        <ArrowUpDown className="ml-1 size-3 opacity-40" />
      )}
    </Button>
  );
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
