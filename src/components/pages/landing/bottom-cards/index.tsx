import Button from "@/components/reusable/Button";
import { Features } from "@/dummy/Cards";
import Link from "next/link";
import React from "react";

export const BottomCards = () => {
  return (
    <div className="lg:py-60 pb-28">
      <div className=" sm:border-l-[48px] border-l-[32px] border-l-customRed">
        <div className="container mx-auto relative">
          <h4 className="integar-text font-titillium-bold absolute -top-24 sm:text-[150px] text-8xl sm:ms-0 ms-6">03</h4>
          <div className="flex justify-start">
            <div className="lg:w-1/2 md:w-[70%] px-6 ">
              <div className="lg:text-[180px] md:text-[120px] text-6xl h-fit font-bold font-titillium-bold text-white md:tracking-[-9px] leading-none m-0 ">
                SCREENA{" "}
              </div>
              <h3 className="sm:text-5xl text-4xl font-normal text-customRed sm:leading-[60px] leading-9 tracking-[1.4px]">
                Screening System{" "}
              </h3>
              <div className="mt-20">
                <h3 className="text-[28px] font-normal text-white">
                  Cleaner Material, Less Waste{" "}
                </h3>
                <p className="mb-0 text-custom-grey-100 font-normal text-base  leading-[28px]">
                  The Screena’s portable design and interchangeable screens make
                  it ideal for quickly separating materials like soil, compost,
                  or sand.
                </p>
                <div className="py-10">
                <Link href={"/screena_details"}
                    className={`flex gap-2.5 font-titillium    p-2.5 bg-white hover:bg-transparent border border-white  transition-colors duration-500 ease-in-out rounded-[4px] w-fit cursor-pointer font-normal md:text-xl sm:text-lg text:base text-black hover:text-white  `}
                  >
                    <span className="text-center w-full">Show me more details</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-6 sm:gap-y-24">
            <div className="flex justify-end">
              <div className=" sm:w-1/2 w-3/4">
                <div className="px-4 bg-bottom-cards bg-contain bg-no-repeat bg-center w-full sm:h-[70vh] h-[50vh]"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2   lg:grid-cols-4 gap-4">
              {Features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-custom-grey-400 w-full pt-12   pb-8 xl:px-8 md:px-6 px-4 pe-2.5 flex flex-col gap-y-7"
                >
                  {feature.icon}
                  <div className="flex flex-col gap-y-2">
                    <h4 className="text-white text-xl font-semibold font-titillium-semi leading-[48px]">
                      {feature.title}
                    </h4>
                    <p className="mb-0 text-custom-grey-100 font-normal text-base break-words">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
