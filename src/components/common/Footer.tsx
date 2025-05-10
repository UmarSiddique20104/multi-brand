import React from "react";
import { FooterIcon } from "../icons/footer-logo";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4">
        <div className="sm:py-40 py-20 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-2">
            <FooterIcon />
          </div>

          <div className="col-span-1 md:col-span-1 sm:text-xl text-lg text-custom-grey-200 font-normal font-lato gap-y-6 flex flex-col">
            <Link href={"/about"} className="hover:text-white cursor-pointer">About us</Link>
            <Link href={"/contact-us"}  className="hover:text-white cursor-pointer">Contact Us</Link>{" "}
            <Link  href={"/products"} className="hover:text-white cursor-pointer">Products</Link>
          </div>

          <div className="col-span-1 md:col-span-1 sm:text-xl text-lg text-custom-grey-200 font-normal font-lato gap-y-6 flex flex-col">
            <p className="hover:text-white cursor-pointer">Facebook</p>
            <p className="hover:text-white cursor-pointer">Instagram</p>{" "}
            <p className="hover:text-white cursor-pointer">Linkedin</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center text-white opacity-50 text-sm font-normal font-lato py-3">
          Copyright © 2024 Multi Build Machinery. All rights reserved{" "}
        </p>
      </div>
    </div>
  );
};
