"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Logo } from "../icons/logo";
import Link from "next/link";
import SearchBar from "../reusable/SearchBar";
import { Search } from '../icons/search';
export const HeaderBumpa = () => {
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef<any | null>(null);
  const pathname = usePathname();

  const handleMenuClick = () => {
    setMenuState(!menuState);
    document.body.classList.toggle("overflow-hidden", !menuState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuState(false);
        document.body.classList.remove("overflow-hidden");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const isActive = (path: string) => pathname === path;

  const paths = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/contact-us", label: "Contact" },
  ];

  return (
    <div className="container mx-auto">
      <div className="w-full flex items-center justify-between pt-4">
        <div className="mx-4">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="lg:block hidden">
          <ul className="font-titillium text-base font-normal flex xl:gap-4 w-fit text-white items-center">
            {paths.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`py-4 px-8 cursor-pointer relative after:content-[''] after:block after:h-[2px] ${
                  isActive(link.path)
                    ? "after:w-10/12 after:bg-red-500 after:scale-x-100"
                    : "after:w-0 hover:after:w-10/12 after:scale-x-0"
                } after:transition-all after:duration-300 after:rounded-[1px] after:origin-left`}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div
          className={`lg:hidden overflow-hidden ${
            menuState
              ? "opacity-100 visible w-screen h-screen z-50"
              : "opacity-0 invisible w-0 h-0"
          } absolute transition-all text-white ease-in-out duration-500 py-10 select-none top-0 w-screen h-screen border-black bg-black backdrop-blur-[2.875em]`}
        >
          <ul ref={menuRef} className="flex font-titillium flex-col gap-[30px]">
         


            {paths.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`sm:text-base text-sm font-normal w-fit ${
                  isActive(link.path) ? "font-bold text-red-500" : ""
                } flex items-center sm:gap-[15px] gap-2.5 ps-[60px] cursor-pointer hover:font-bold`}
                onClick={handleMenuClick}
              >
                {link.label}
              </Link>
            ))}

<li  className={`sm:text-base text-sm font-normal w-fit    rounded-md  text-black flex items-center sm:gap-[15px] gap-2.5 ps-[60px]   hover:font-bold`}
            > 
              <input
                type="text"
                placeholder="Search"
                className=" h-10 border px-2.5 w-fit   rounded-md  outline-none focus:outline-none  "
              />
              <span className="bg-[#C3202A]  h-[40px] px-2.5 pt-1.5 -ms-10  rounded-e-md cursor-pointer ">
              <Search />
            </span>
            </li>
          </ul>
        </div>
        <div className="w-fit lg:flex hidden gap-[10px] me-2">
          <SearchBar />
        </div>
        <div
        
          className={`mx-4 z-[999] lg:hidden transition-all duration-1000 select-none bg-[#C3202A] w-[44px] lg:w-[50px] h-[44px] lg:h-[50px] rounded-full flex items-center justify-center`}
        >
         {menuState && (  <span className="cursor-pointer bg-transparent"   onClick={handleMenuClick}>
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
             
             
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              
            </svg>
          </span>)}
        

          {!menuState && (   <span  className="cursor-pointer bg-transparent"    onClick={handleMenuClick}>
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
             
          
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              
            </svg>
          </span>)}
        </div>
      </div>
    </div>
  );
};
