import React from "react";
import logo from "../../assets/logo-1.png";
import { BiHome, BiVideo } from "react-icons/bi";
import { PiCalendarDotDuotone, PiMonitorPlayBold } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import NavLink from "../NavLink";
import { logOut } from "../../firebase";
import { useNavigate } from "@tanstack/react-router";

const SideNav: React.FC = () => {
  const navigate = useNavigate({ from: "/" });
  return (
    <nav className="bg-black-100 row-span-2 flex flex-col flex-nowrap gap-y-20 rounded-br-[45px] rounded-tr-[45px] py-8">
      <figure className="px-8">
        <img src={logo} width={118} height={42} alt="Movibes Logo" />
      </figure>
      <ul className="flex h-full flex-col flex-nowrap space-y-12">
        <NavLink to="/" navIcon={<BiHome />} navTitle="Home" />
        <NavLink to="/movies" navIcon={<BiVideo />} navTitle="Movies" />
        <NavLink
          to="/tv-series"
          navIcon={<PiMonitorPlayBold />}
          navTitle="TV Series"
        />
        <NavLink
          to="/upcoming"
          navIcon={<PiCalendarDotDuotone />}
          navTitle="Upcoming"
        />
        <button
          className="relative mt-auto px-6 py-4 text-base text-gray-50 transition-all duration-200 after:absolute after:right-0 after:top-0 after:inline-block after:h-full after:w-0 after:bg-sky-50 after:content-[''] hover:bg-sky-50/40 hover:text-sky-50/100 hover:after:w-1"
          onClick={async () => {
            logOut();
            navigate({
              to: "/signin",
            });
          }}
        >
          <li className="flex items-center gap-x-2">
            <RiLogoutBoxRLine /> Log out
          </li>
        </button>
      </ul>
    </nav>
  );
};

export default SideNav;
