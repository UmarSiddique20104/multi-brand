import Email from "@/components/icons/email";
import FaceBook from "@/components/icons/facebook";
import Instagram from "@/components/icons/instagram";
import Linkendin from "@/components/icons/linkendin";
import Location from "@/components/icons/location";
import Phone from "@/components/icons/phone";
import React from "react";

const ContactInfo = () => {
  return (
    <div>
      <div className="  flex-col justify-start     inline-flex lg:px-12 px-4 py-8">
        <div className="self-stretch  text-white  md:text-[40px] text-4xl font-bold font-titillium leading-[46px]">
          Contact Us
        </div>
        <div className="  flex-col justify-start items-start md:gap-7  gap-4 flex pt-20">
          <div className="flex-col flex justify-start space-y-6 w-full items-start">
            <InfoDetail icon={<Phone />} text={"+971 (4) 32 90676"} />
            <InfoDetail icon={<Email />} text={"Sales @multibuildmachiney.com"} />
           
            
            <div className="flex  justify-start  gap-5 w-full">
              <span className="pt-3">
              <Location />
              </span>
              <span className=" text-white text-xl font-normal font-titillium leading-[36px]">
              Emaar Business Park, Building 3, <br/>Office 303, P.O. Box 38115, Dubai, United Arab Emirates
              </span>
            </div>
          </div>
          
        </div>
         
          <div className=" flex justify-start items-center  pt-24 pb-6 space-x-10     ">
            <FaceBook />
        
            <Linkendin /> 
            <Instagram />
         
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

const InfoDetail = ({icon , text}:any)=>{
    return(
        <>
          <div className="flex   justify-start items-center gap-5">
              <span>
                {icon}
              </span>
              <span className=" text-white sm:text-xl text-lg font-normal font-titillium leading-[46px]">
                {text}
              </span>
            </div>
        </>
    )
}