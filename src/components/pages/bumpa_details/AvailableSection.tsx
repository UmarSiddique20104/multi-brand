import React from "react";
import Image from "next/image";
import Image4 from "@/../public/assets/Drawing.png";
const AvailableSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 lg:pt-20 pt-16">
        <div className="w-full h-full pt-10   md:relative">
          <div className="md:absolute top-5  w-full">
            <h4 className=" ps-12 text-center text-[#c3202a] text-xl font-semibold font-titillium leading-[46px]">
              Available in
            </h4>
            <p className="ps-12 text-center  text-white text-xl font-semibold font-titillium leading-[46px]">
              6,050 mm, 8,050 mm and 10,050 mm
            </p>
          </div>
          <Image
            src={Image4}
            alt="Picture of the author"
            width={4000}
            height={4000}
            className="w-full h-full object-contain    "
          />
        </div>
      </div>
    </>
  );
};

export default AvailableSection;
