import React from "react";
import { cn } from "../../utils";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        className,
        "flex w-full cursor-pointer justify-center rounded-xl py-4 text-xl",
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
