 
import React from "react";
import Banner from "./about-banner";
import { Footer } from "@/components/common/Footer";
import Image from "next/image";
import { HeaderBumpa } from "@/components/common/HeaderBumpa";

const BannerSection = () => {
  const dataArray = [
    {
      id: 1,
      heading: "Efficiency & Productivity",
      details:
        "To be the leading distributor of innovative, safe, and sustainable construction equipment in the Middle East, empowering our clients with advanced solutions that enhance productivity, safety, and environmental responsibility",
    },
    {
      id: 2,
      heading: "Safety and Well-being",
      details:
        "Safety is at the heart of our equipment selection. We prioritise machinery with robust safety features to minimise physical strain and create a secure, supportive environment for the workforce",
    },
    {
      id: 3,
      heading: "Sustainable Practices",
      details:
        "ustainability drives our approach. We choose equipment that aligns with eco-friendly practices, reducing environmental impact and supporting a responsible future in construction",
    },
    {
      id: 4,
      heading: "Innovation in Solutions",
      details:
        "We bring innovative equipment to the Middle East, offering products that enable smarter, faster, and more effective project outcomes. Our focus is on providing access to solutions that set new standards in construction",
    },
  ];
  return (
    <>
     <HeaderBumpa />

    <div className="">
      <div className=" bg-cover w-full    h-full " >
        <Image 
        src="/assets/dubai_bridge2.png"
        width={1920}
        height={1080}
        alt="img"
        className=" w-full h-full object-cover max-[425px]:min-h-72"
        />
      </div>
      <div className="mx-auto container px-4">

        <Banner />
      <div className="  xl:py-24 pt-16 pb-10 md:gap-[50px] gap-5 grid grid-cols-12 items-center">
        <div className="about-img-box   xl:col-span-5 md:col-span-6 col-span-12 ">
          <Image
            src="/assets/vision.png"
            width={545}
            height={385}
            alt="img"
            className=" w-full h-full"
          />
        </div>
        <div className="about-content   xl:pl-16   xl:col-span-7 md:col-span-6  col-span-12">
          <Heading heading="Our Vision" />
          <Details details="To be the leading distributor of innovative, safe, and sustainable construction equipment in the Middle East, empowering our clients with advanced solutions that enhance productivity, safety, and environmental responsibility." />
        </div>
      </div>
      <div className="   xl:py-24 md:py-20 py-10 md:gap-[50px] gap-5 grid grid-cols-12 items-center">
        <div className="about-content   xl:pr-16 xl:col-span-7 md:col-span-6 col-span-12">
          <Heading heading="Our Mission" />
          <Details details="To provide the Middle East with access to the most advanced construction equipment, tailored to the region’s unique requirements. Our mission is to empower our clients with innovative solutions that enhance productivity, safety, and sustainability on-site." />
        </div>
        <div className="  xl:col-span-5  md:col-span-6  col-span-12 ">
          <Image
            src="/assets/mission.png"
            width={1000}
            height={1000}
            alt="img"
            className=" w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="  xl:py-24  pt-5 pb-10 ">
        <div className=" ">
          <Heading heading="Our Values" />
          <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-4  md:gap-7 gap-5">
            {dataArray.map((item: any, key: number) => {
              return (
                <div key={key} className="   rounded-lg">
                  <DynamicData heading={item.heading} details={item.details}  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
      {/* <Footer /> */}
    </div>
    </>
  );
};

export default BannerSection;
const DynamicData = ({ heading, details,}: any) => {
  return (
    <div className="pt-5">
      <h3 className={`text-[#c3202a]    font-titillium md:text-[30px]  text-[28px] pb-2 font-semibold lg:leading-[60px] md:leading-[48px]`}>
        {heading}
      </h3>
      <p className="text-[#595959] font-titillium md:text-[24px] text-lg md:leading-[32px] max-[1024px]:text-justify">
        {details}
      </p>
    </div>
  );
};

const Heading = ({ heading }: any) => {
  return (
    <h2 className="text-white font-titillium md:text-[48px] text-4xl lg:leading-[48px] md:leading-[48px] pb-6">
      {heading}
    </h2>
  );
};
const Details = ({ details }: any) => {
  return (
    <p className="text-[#595959] font-titillium md:text-[24px] text-lg lg:leading-[32px] md:leading-[32px] max-[425px]:text-justify">
      {details}
    </p>
  );
};
