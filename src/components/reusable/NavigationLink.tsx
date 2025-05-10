import Link from "next/link";
import React from "react";

export const NavigationLink = ({
    text,
    padding,
    link,
    }: {
    text: string;
    padding: string;
    link: string;
    
}) => {
  return (
    <>
      <div
        className={`flex gap-2.5 font-titillium   p-2.5 bg-white hover:bg-transparent border border-white  transition-colors duration-500 ease-in-out rounded-[4px] w-fit cursor-pointer font-normal md:text-xl sm:text-lg text:base text-black hover:text-white ${padding}`}
      >
        <Link
          href={link}
          className="text-black  text-lg font-titillium font-bold"
        >
          <span className="text-center w-full">{text}</span>
        </Link>
      </div>
    </>
  );
};
