import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Distributor = () => {
  return (
    <div className="md:pt-48 pt-28 md:pb-40 pb-20 bg-white ">
      <div>
        <div  className=" px-">
        <h3 className="text-customRed md:text-4xl   sm:text-3xl text-[28px] font-normal font-titillium mb-3 container mx-auto   px-6 ">
          We’re the
        </h3>

        </div>
        <div className="flex w-full bg-[linear-gradient(to_right,_#c3202a_40%,_#ffffff_60%)]  ">
          <div className="container mx-auto sm:px-0 px-6 sm:flex hidden  bg-white ">
            <h2 className="rounded-r-lg text-white md:text-5xl px-4 sm:text-4xl text-3xl font-bold font-titillium-bold py-4 pe-4 bg-customRed w-fit">
              Exclusive Distributor
            </h2>
          </div>
          <div className="container mx-auto sm:px-0 px-6 sm:hidden blovk    bg-[linear-gradient(to_right,_#c3202a_40%,_#ffffff_60%)]">
            

            <h2 className="rounded-r-lg   text-white md:text-5xl  sm:text-4xl text-3xl font-bold font-titillium-bold py-4 pe-4 bg-customRed w-fit">
              Exclusive Distributor
            </h2>
            
          </div>
        </div>

        <div className="container mx-auto sm:px-0 px-6  ">
          <h3 className="text-black md:text-[28px] px-4 text-2xl font-normal font-titillium mt-3 ">
            of Mace Industries for the Middle East{" "}
          </h3>
          <div  className="px-4">

          <Image
            src="/assets/distrbutor-image.png"
            width={300}
            height={300}
            alt="img"
            className="md:mt-48 sm:mt-32 mt-24 md:mb-40 sm:mb-32 mb-20"
          />
          </div>
          <div className="container px-4 mx-auto">

          <p className=" mb-3 md:text-xl sm:text-lg font-titillium font-normal text-custom-grey-300 opacity-80 lg:w-[45vw] sm:w-[65vw] w-full">
            Mace Industries is a UK-based company known for designing innovative
            equipment that improves safety and efficiency on construction sites.
            Mace’s Shifta, Screena, and Bumpa machines are built to reduce
            physical strain, speed up material movement, and enhance overall
            productivity on-site.
          </p>
          <Link href={"https://maceindustries.co.uk/"} target="_blank"
            className={`flex gap-2.5 font-titillium p-2.5 bg-black hover:bg-transparent border border-black  transition-colors duration-500 ease-in-out rounded-[4px] w-fit cursor-pointer font-normal md:text-xl sm:text-lg text:base text-white hover:text-black`}
          >
            <span className="text-center w-full">
              Visit Mace Industries
            </span>
          </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
