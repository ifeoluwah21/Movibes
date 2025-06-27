import { Link, type LinkComponentProps } from "@tanstack/react-router";
import React from "react";
import { cn } from "../utils";

const NavLink: React.FC<LinkComponentProps> = ({
  to,
  className,
  children,
  ...props
}) => {
  return (
    <Link
      to={to}
      {...props}
      className={cn(
        className,
        "relative px-6 py-4 text-base text-gray-50 transition-all duration-200 after:absolute after:right-0 after:top-0 after:inline-block after:h-full after:w-0 after:bg-sky-50 after:content-[''] hover:bg-sky-50/40 hover:text-sky-50/100 hover:after:w-1",
      )}
    >
      {children}
    </Link>
  );
};

export default NavLink;
