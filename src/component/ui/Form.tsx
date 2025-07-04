import React from "react";
import { cn } from "../../utils";
import { Form as FormikForm, useField } from "formik";

export const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <FormikForm className={cn(className, "space-y-8")} {...props}>
      {children}
    </FormikForm>
  );
};

export const FormGroup: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("space-y-6", className)} {...props}>
      {children}
    </div>
  );
};

export const FormLabel: React.FC<
  React.LabelHTMLAttributes<HTMLLabelElement>
> = ({ children, className, ...props }) => {
  return (
    <label className={cn("sr-only", className)} {...props}>
      {children}
    </label>
  );
};

export const FormInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & { label: string }
> = ({ className, label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      {" "}
      {meta.touched && meta.error ? <FormError>{meta.error}</FormError> : null}
      <FormLabel htmlFor={props.id || props.name}>{label}</FormLabel>
      <input
        className={cn(
          className,
          `border-b-1 w-full p-2 text-base text-gray-50 outline-none transition-all duration-100 hover:border-b-amber-200 focus:border-b-amber-200 ${meta.error && meta.touched ? "border-b-red-500 hover:border-b-red-500 focus:border-b-red-500" : ""}`,
        )}
        {...props}
        {...field}
      />
    </>
  );
};

export const FormError: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <p className="my-0.5 text-sm text-red-500">{children}</p>;
};
