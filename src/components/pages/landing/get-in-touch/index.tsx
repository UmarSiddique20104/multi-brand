import Link from "next/link";
import React from "react";

export const GetInTouch = () => {
  return (
    <div className="bg-white py-20 w-full  ">
      <div className="mx-auto container px-4 ">

      <div className="mx-auto container flex sm:flex-row flex-col gap-y-4 items-center sm:px-0 px-6 sm:justify-start justify-center">
        <h3 className="text-black md:text-6xl sm:text-4xl text-[26px] font-medium font-ubuntu sm:w-3/4 w-full">
          Get in touch with us
        </h3> 
        <Link  href={"/contact-us"} className="rounded-full p-2.5 h-[45px] bg-customRed sm:text-[28px] text-xl font-normal font-ubuntu text-white flex items-center w-56 justify-center">
          Let’s do this
        </Link>
      </div>
      </div>
    </div>
  );
};
