import React from "react";
import logo from "../../assets/logo-1.png";
import { BiHome, BiVideo } from "react-icons/bi";
import { PiCalendarDotDuotone, PiMonitorPlayBold } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import NavLink from "../NavLink";

const SideNav: React.FC = () => {
  return (
    <nav className="bg-black-100 flex flex-col flex-nowrap gap-y-20 rounded-br-[45px] rounded-tr-[45px] py-8">
      <figure className="px-8">
        <img src={logo} width={118} height={42} alt="Movibes Logo" />
      </figure>
      <ul className="flex h-full flex-col flex-nowrap space-y-2">
        <NavLink to="/">
          <li className="flex items-center gap-x-2">
            <BiHome /> Home
          </li>
        </NavLink>
        <NavLink to="/">
          <li className="flex items-center gap-x-2">
            <BiVideo /> Movies
          </li>
        </NavLink>
        <NavLink to="/">
          <li className="flex items-center gap-x-2">
            <PiMonitorPlayBold /> TV series
          </li>
        </NavLink>
        <NavLink to="/">
          <li className="flex items-center gap-x-2">
            <PiCalendarDotDuotone /> Upcoming
          </li>
        </NavLink>
        <NavLink to="/" className="mt-auto">
          <li className="flex items-center gap-x-2">
            <RiLogoutBoxRLine /> Log out
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default SideNav;
