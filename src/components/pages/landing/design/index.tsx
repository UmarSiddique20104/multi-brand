import Image from "next/image";
import React from "react";

export const Design = () => {
  return (
    <div className="bg-black pb-28">
      <div className="mx-auto container px-4">
        <div className="sm:w-24 w-16 bg-custom-red-100 sm:h-80 h-48 flex justify-center items-end rounded-b-lg">
          <Image
            src="/assets/iso-logo.png"
            width={300}
            height={300}
            alt="img"
            className="sm:w-[82px] w-16 h-16 sm:h-[82px]"
          />
        </div>
        <h3
          className="text-white md:text-5xl sm:text-4xl text-3xl font-normal font-titillium mt-5
        "
        >
          Designed <br />
          <span className="font-bold text-customRed">with Standards</span>
          <br /> in Mind
        </h3>
        <p className="mt-[22px] font-normal text-custom-grey-300 font-lato sm:text-2xl text-xl leading-[30px] sm:w-1/3">
          Our products are crafted to exceed industry benchmarks, ensuring
          top-quality and reliability.
        </p>
        <p className="sm:mt-40 mt-20 font-normal text-[#FFFFFFE5] font-lato sm:text-xl text-base leading-[32px] sm:w-3/4">
          Adhering to rigorous industry regulations, our machinery is designed
          and manufactured to meet top-tier standards including ISO 9001, ISO
          14001, and Coded Welding Certifications, ensuring quality, safety, and
          environmental responsibility across all our products.
        </p>
        <div className="mt-10 flex sm:gap-x-[90px] md:gap-x-12 gap-4">
          <div className="flex flex-col">
            <Image
              src="/assets/iso.png"
              width={300}
              height={300}
              alt="img"
                 className=" w-14 h-14 "
            />
            <span className="text-custom-grey-500 text-center text-lg font-inter font-bold">
              9001
            </span>
          </div>
          <div className="flex flex-col ">
            <Image
              src="/assets/iso.png"
              width={1000}
              height={1000  }
              alt="img"
              className=" w-14 h-14 "
            />
            <span className="text-custom-grey-500 text-center text-lg font-inter font-bold">
            14001
            </span>
          </div>
          <div className="py-1">

          <Image
            src="/assets/fors.png"
            width={1000}
            height={1000}
            alt="img"
                className=" w-full h-16 "
          />
          </div>
        </div>
      </div>
    </div>
  );
};
