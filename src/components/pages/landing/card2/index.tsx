import Bulb from "@/components/icons/bulb";
import { Portable } from "@/components/icons/portable"; 
import { Safety } from "@/components/icons/safety";
import { Sustainable } from "@/components/icons/sustainable";

import React from "react";

export const Card2 = () => {
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-2   grid-cols-1 md:pt-60 sm:pt-44 pt-28 sm:px-10 px-4">
     
     <Card icon={<Bulb />} mainText1="Innovative" mainText2="Partnerships" description="We collaborate with industry-leading manufacturers to bring the latest solutions to the Middle East. Our partnerships provide access to advanced, reliable machinery that meets the highest standards in efficiency and durability." />
      <Card icon={<Portable />} mainText1="Portable" mainText2="Solutions" description="Our equipment selection is designed to minimise manual labour and accelerate project timelines. These solutions optimise workflows, helping teams increase productivity and meet project deadlines more efficiently." />
      <Card icon={<Safety />} mainText1="Commitment" mainText2="to Safety" description="Safety is central to our equipment selection. We work with trusted suppliers who prioritise robust safety features, ensuring that every machine contributes to safer work environments and meets strict safety standards." />
      <Card icon={<Sustainable />} mainText1="Sustainable" mainText2="Solutions" description="With a focus on sustainability, we offer products that reduce environmental impact and improve energy efficiency. Our eco-friendly solutions support sustainable practices across the Middle East, enhancing long-term project viability." />
        
    </div>
  );
};
const Card = ({icon , mainText1, mainText2,  description}:any) => {
  return (
    <>
    
    <div className=" w-full items-center  flex flex-col gap-y-5">
        <div className="flex flex-col items-center justify-center ">
          <div>
            {icon}
          </div>
          <h4 className="text-white font-titillium md:text-center w-full xl:px-[35px] md:px-[20px] md:text-4xl text-3xl  md:leading-[46px]  leading-9">
            <h3>{mainText1}</h3> 
            <h3>{mainText2}</h3>
          </h4>
        </div>
        <div className="flex w-full flex-col ">
          <p className="mb-0 py-[16px] xl:px-[35px] md:px-[20px] text-custom-grey-100 font-normal leading-[28px] font-lato text-justify text-base">
           {description} </p>
        </div>
      </div>
    </>
  )
}