import { HeaderBumpa } from "@/components/common/HeaderBumpa";
import React from "react";
import Link from "next/link";

export const Banner = () => {
  return (
    <>
      <HeaderBumpa />
      <div className="bg-flame overflow-hidden bg-cover sm:bg-center bg-right sm:h-screen h-[80vh] w-full pt-[34px] relative"> 
  <div className="absolute inset-0 bg-black opacity-40 pointer-events-none z-10"></div> 
  <div className="relative w-full h-full flex z-20 items-center pt-[60px] px-4 container mx-auto">
    <div className="flex flex-col sm:gap-12 gap-8 sm:w-[617px] max-sm:w-full">
      <div className="flex flex-col md:gap-[22px] gap-1 w-full font-titillium">
        <div className="font-titillium flex flex-col font-normal lg:text-5xl  text-3xl   lg:leading-[60px] md:leading-[40.872px] text-white">
          Bringing
          <span className="text-customRed font-bold font-titillium-bold">
            Innovative Machinery
          </span>
          Solutions to the Middle East
        </div>
        <div className="font-lato lg:text-2xl text-custom-grey-300 text-lg font-normal sm:leading-8 leading-6 md:w-[619px] w-full">
          Pioneering world-class construction machinery in the Middle East,
          raising standards in both quality and efficiency
        </div>
      </div>
      <Link href={"/products"}
        className={`flex gap-2.5 font-titillium    p-2.5 bg-white hover:bg-transparent border border-white  transition-colors duration-500 ease-in-out rounded-[4px] w-fit cursor-pointer font-normal md:text-xl sm:text-lg text:base text-black hover:text-white  `}>
          <span className="text-center w-full">Explore Our Machinery</span>
      </Link>
    </div>
  </div>
</div>

    </>
  );
};
