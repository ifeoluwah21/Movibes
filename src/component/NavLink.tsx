import { Link, type LinkComponentProps } from "@tanstack/react-router";
import React, { type JSX } from "react";

const NavLink: React.FC<
  LinkComponentProps & { navIcon: JSX.Element; navTitle: string }
> = ({ to, navTitle, navIcon }) => {
  return (
    <Link to={to}>
      {({ isActive }) => {
        console.log(isActive);
        return (
          <li
            className={`relative flex items-center gap-x-2 px-6 py-4 text-base text-gray-50 transition-all duration-200 after:absolute after:right-0 after:top-0 after:inline-block after:h-full after:w-0 after:bg-sky-50 after:content-[''] hover:bg-sky-50/40 hover:text-sky-50/100 hover:after:w-1 ${isActive ? "bg-sky-50/40 text-sky-50/100 after:w-1" : ""}`}
          >
            {navIcon} <span>{navTitle}</span>
          </li>
        );
      }}
    </Link>
  );
};

export default NavLink;
