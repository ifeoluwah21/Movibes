import React from "react";
import { cn } from "../../utils";

export const Form: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <form className={cn(className, "space-y-8")} {...props}>
      {children}
    </form>
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
  React.InputHTMLAttributes<HTMLInputElement>
> = ({ className, ...props }) => {
  return (
    <input
      className={cn(
        className,
        "border-b-1 w-full p-2 text-base text-gray-50 outline-none transition-all duration-100 hover:border-b-amber-200 focus:border-b-amber-200",
      )}
      {...props}
    />
  );
};
