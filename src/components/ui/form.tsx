"use client";

import * as React from "react";
import { useForm, type FieldApi, type FormApi, type AnyFieldApi } from "@tanstack/react-form";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldSeparator,
  FieldContent,
  FieldTitle,
} from "@/components/ui/field";

export {
  useForm,
  type FieldApi,
  type FormApi,
  type AnyFieldApi,
  FieldGroup,
  FieldSet,
  FieldLegend,
  FieldSeparator,
  FieldContent,
  FieldTitle,
};

// Form Field Context for passing field metadata to nested form controls
type FormFieldContextValue = {
  id: string;
  name: string;
  error?: string;
  isTouched?: boolean;
  isDirty?: boolean;
  isValid?: boolean;
};

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

export function useFormField() {
  const fieldContext = React.useContext(FormFieldContext);
  if (!fieldContext) {
    throw new Error("useFormField should be used within a FormItem or FormField context");
  }
  return fieldContext;
}

export interface FormItemProps extends React.ComponentProps<typeof Field> {
  error?: string | string[] | Array<{ message?: string } | undefined>;
  name?: string;
}

/**
 * FormItem - Wraps a single form field with layout and accessibility wiring
 */
export function FormItem({ className, children, error, name, ...props }: FormItemProps) {
  const id = React.useId();

  const errorMessage = React.useMemo(() => {
    if (!error) return undefined;
    if (typeof error === "string") return error;
    if (Array.isArray(error)) {
      const first = error[0];
      if (typeof first === "string") return first;
      return first?.message;
    }
    return undefined;
  }, [error]);

  return (
    <FormFieldContext.Provider value={{ id, name: name ?? id, error: errorMessage }}>
      <Field
        data-slot="form-item"
        data-invalid={!!errorMessage}
        className={cn("space-y-1.5", className)}
        {...props}
      >
        {children}
      </Field>
    </FormFieldContext.Provider>
  );
}

/**
 * FormLabel - Label with automatic for/id linking and error state
 */
export function FormLabel({ className, ...props }: React.ComponentProps<typeof FieldLabel>) {
  const fieldContext = React.useContext(FormFieldContext);
  return (
    <FieldLabel
      data-slot="form-label"
      htmlFor={fieldContext?.id}
      className={cn(fieldContext?.error && "text-destructive", className)}
      {...props}
    />
  );
}

/**
 * FormControl - Injects id, aria-describedby, and aria-invalid to child inputs
 */
export function FormControl({ children, ...props }: React.ComponentProps<"div">) {
  const fieldContext = React.useContext(FormFieldContext);

  return (
    <div
      data-slot="form-control"
      id={fieldContext?.id}
      aria-invalid={!!fieldContext?.error}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * FormDescription - Helper/hint text for the input
 */
export function FormDescription({
  className,
  ...props
}: React.ComponentProps<typeof FieldDescription>) {
  return (
    <FieldDescription
      data-slot="form-description"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

/**
 * FormMessage - Validation error display
 */
export function FormMessage({
  children,
  className,
  error,
  ...props
}: React.ComponentProps<typeof FieldError> & {
  error?: string | string[] | Array<{ message?: string } | undefined>;
}) {
  const fieldContext = React.useContext(FormFieldContext);
  const message =
    children ??
    (typeof error === "string"
      ? error
      : Array.isArray(error)
        ? typeof error[0] === "string"
          ? error[0]
          : error[0]?.message
        : fieldContext?.error);

  if (!message) {
    return null;
  }

  return (
    <FieldError
      data-slot="form-message"
      className={cn("text-xs font-medium text-destructive", className)}
      {...props}
    >
      {typeof message === "string" ? message : children}
    </FieldError>
  );
}

/**
 * Helper to extract the first error string from TanStack FieldApi state
 */
export function getFieldError(field: AnyFieldApi): string | undefined {
  const errors = field.state.meta.errors;
  if (!errors || !errors.length) return undefined;
  const first = errors[0];
  if (typeof first === "string") return first;
  if (typeof first === "object" && first !== null && "message" in first) {
    return (first as { message?: string }).message;
  }
  return String(first);
}
