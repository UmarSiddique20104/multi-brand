"use client"
import React, { useEffect, useRef, useState } from "react";
import { Logo } from "../icons/logo";
import { Search } from "../icons/search";
import Link from "next/link";

export const Header = () => {
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef<any | null>(null);
  const handleMenuClick = () => {
    setMenuState(!menuState);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuState(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-between z-10 relative sm:px-12 px-2.5">
      {/* logo  */}
      <Link href="/">
        <Logo />
      </Link>
      {/* navbar  */}
      <div className="lg:block hidden">
        <ul className="font-titillium text-base font-normal flex xl:gap-4 w-fit text-white items-center">
          <Link href={"/"} 
            className={`py-4 px-8 cursor-pointer relative after:content-[''] after:block after:h-[2px] after:w-10/12 after:bg-red-500 after:rounded-[1px] after:scale-x-0 hover:after:scale-x-50 after:origin-left after:transition-transform after:duration-300 after:absolute after:bottom-2 after:left-8`}
          >
            Home
          </Link>

          <Link href={"/about"} className="py-4 px-8 cursor-pointer relative after:content-[''] after:block after:h-[2px] after:w-full after:bg-red-500 after:rounded-[1px] after:scale-x-0 hover:after:scale-x-50 after:origin-left after:transition-transform after:duration-300 after:absolute after:bottom-2">
            About Us
          </Link>
          <Link href={"/products"} className="py-4 px-8 cursor-pointer relative after:content-[''] after:block after:h-[2px] after:w-full after:bg-red-500 after:rounded-[1px] after:scale-x-0 hover:after:scale-x-50 after:origin-left after:transition-transform after:duration-300 after:absolute after:bottom-2">
            Products
          </Link>
          <Link href={"/contact-us"} className="py-4 px-8 cursor-pointer relative after:content-[''] after:block after:h-[2px] after:w-11/12 after:bg-red-500 after:rounded-[1px] after:scale-x-0 hover:after:scale-x-50 after:origin-left after:transition-transform after:duration-300 after:absolute after:bottom-2">
            Contact
          </Link>
        </ul>
      </div>
      <div
        onClick={handleMenuClick}
        className={`lg:hidden overflow-hidden ${
          menuState
            ? "opacity-100 visible w-screen h-screen z-50"
            : "opacity-0 invisible  w-0 h-0"
        } absolute transition-all text-white ease-in-out duration-500 py-10 select-none top-0 w-screen h-screen border-black   bg-black backdrop-blur-[2.875em]`}
      >
        <ul ref={menuRef} className="flex font-titillium flex-col gap-[30px] ">
          <li
            className="text-[1.2em] w-fit pt-5 group group-hover:rotate-0 flex items-center gap-[15px] ps-[60px] cursor-pointer  hover:font-bold font-titillium-bold font-titillium"
            onClick={handleMenuClick}
          >
            <div className="cursor-pointer ">
              <Search />
            </div>
          </li>
          <li
            className="sm:text-base text-sm font-normal w-fit  group group-hover:rotate-0 flex items-center sm:gap-[15px] gap-2.5 ps-[60px] cursor-pointer  hover:font-bold font-titillium-bold font-titillium"
            onClick={handleMenuClick}
          >
            Home
          </li>
          <Link href={"/about"} 
            className="sm:text-base text-sm font-normal w-fit  group group-hover:rotate-0  flex items-center sm:gap-[15px] gap-2.5 ps-[60px] cursor-pointer  hover:font-bold font-titillium-bold font-titillium"
            onClick={handleMenuClick}
          >
            About Us
          </Link>
          <Link href={"/products"}
            className="sm:text-base text-sm font-normal w-fit  flex items-center sm:gap-[15px] gap-2.5 ps-[60px] cursor-pointer  hover:font-bold font-titillium-bold font-titillium group group-hover:rotate-0 "
            onClick={handleMenuClick}
          >
            Products
          </Link>
          <Link href={"/contact-us"}
            className="sm:text-base text-sm font-normal w-fit flex items-center sm:gap-[15px] gap-2.5 ps-[60px] cursor-pointer  hover:font-bold font-titillium-bold font-titillium group group-hover:rotate-0 "
            onClick={handleMenuClick}
          >
            Contact
          </Link>
        </ul>
      </div>
      {/* link  */}
      <div className="w-fit  lg:flex hidden gap-[10px] ">
        <div className="cursor-pointer">
          <Search />
        </div>
      </div>
      {/* HumBurger */}
      <div
        onClick={handleMenuClick}
        className={` z-[999] lg:hidden transition-all duration-1000 select-none cursor-pointer bg-[#C3202A] w-[44px] lg:w-[50px] h-[44px] lg:h-[50px] rounded-full flex items-center justify-center`}
      >
        {/* {open ? ( */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-menu text-white"
        >
          {/* Hamburger Icon (default state) */}
          {!menuState && (
            <>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </>
          )}

          {/* Cross Icon (active state) */}
          {menuState && (
            <>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </>
          )}
        </svg>
      </div>
    </div>
  );
};
