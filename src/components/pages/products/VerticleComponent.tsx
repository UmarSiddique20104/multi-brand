import Link from "next/link";
import React from "react";

const VerticleComponent = ({ content, description, link }: any) => {
  return (
    <Link href={link || ""} className="  mx-1">
      <div className=" flex flex-col lg:mt-28 md:mt-20 mt-10 mb-8 w-full hover:shadow-lg hover:shadow-white  bg-[#1a1a1a] overflow-hidden]">
        <div className="flex justify-center items-center  text-white text-center lg:h-[750px] md:h-[550px] h-[450px] -rotate-90  lg:text-[160px] md:text-[130px] text-8xl font-bold   leading-[60px] products_text">
          {content}
        </div>
        <div className=" md:min-h-[114px] min-h-24 bg-[#c3202a] justify-center items-center gap-2.5 inline-flex">
          <p className="min-h-[63px] px-2 text-center text-white xl:text-5xl md:text-[32px] text-[28px] font-semibold font-titillium leading-[60px] tracking-wider">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VerticleComponent;
