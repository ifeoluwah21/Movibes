import React, { useRef } from "react";
import logo from "../../assets/logo-1.png";
import { BiHome, BiVideo } from "react-icons/bi";
import { PiCalendarDotDuotone, PiMonitorPlayBold } from "react-icons/pi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import NavLink from "../NavLink";
import { logOut } from "../../firebase";
import { useNavigate } from "@tanstack/react-router";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

const SideNav: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate({ from: "/" });
  const toggleNav = (action: "open" | "close") => {
    if (action === "open") {
      navRef.current?.classList.remove("close");
    } else {
      navRef.current?.classList.add("close");
    }
  };
  return (
    <>
      <nav
        ref={navRef}
        className="bg-black-100 close fixed left-0 top-0 z-[4] row-span-2 flex h-screen w-full flex-col flex-nowrap gap-y-20 py-8 transition duration-300 ease-in md:sticky md:translate-x-0 md:transform-none md:rounded-br-[45px] md:rounded-tr-[45px]"
      >
        <figure className="relative px-8">
          <img src={logo} width={118} height={42} alt="Movibes Logo" />
          <button
            type="button"
            onClick={() => toggleNav("close")}
            className="scale-200 absolute right-6 top-1/2 -translate-y-1/2 md:hidden"
          >
            <IoCloseSharp />
          </button>
        </figure>
        <ul className="flex h-full flex-col flex-nowrap space-y-12">
          <NavLink
            to="/"
            onClick={() => toggleNav("close")}
            navIcon={<BiHome />}
            navTitle="Home"
          />
          <NavLink
            to="/movie"
            onClick={() => toggleNav("close")}
            navIcon={<BiVideo />}
            navTitle="Movies"
          />
          <NavLink
            to="/tv"
            onClick={() => toggleNav("close")}
            navIcon={<PiMonitorPlayBold />}
            navTitle="TV Series"
          />
          <NavLink
            to="/upcoming"
            onClick={() => toggleNav("close")}
            navIcon={<PiCalendarDotDuotone />}
            navTitle="Upcoming"
          />
          <button
            className="relative mt-auto px-6 py-4 text-base text-gray-50 transition-all duration-200 after:absolute after:right-0 after:top-0 after:inline-block after:h-full after:w-0 after:bg-sky-50 after:content-[''] hover:bg-sky-50/40 hover:text-sky-50/100 hover:after:w-1"
            onClick={async () => {
              await logOut();
              toggleNav("close");
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
      <button
        type="button"
        className="fixed right-4 top-6 z-[3] md:hidden"
        onClick={() => toggleNav("open")}
      >
        <RiMenu3Line className="h-8 w-8" />
      </button>
    </>
  );
};

export default SideNav;
