import BumpaHeading from "@/components/reusable/BumpaHeading";
import React from "react";
import { Header } from "@/components/common/Header";
import { DetailsText } from "@/components/reusable/DetailsText";
import FeatureDetailsSection from "./Feature_Details_Section";
import { HeaderBumpa } from "@/components/common/HeaderBumpa";
const HeroSection = () => {
  const DETAILS_TEXT =
    "The Bumpa conveyor is built to meet the demands of modern construction, offering fast, reliable, and safe material handling solutions. Its innovative design makes it an essential tool on construction sites.";
  const HEADINGTEXT = "BUMPA";
  const SUB_HEADING = "Key Features and Advantages";

  return (
    <>
    <div className="bump_bg h-full">
    <HeaderBumpa />
      <div className="container mx-auto px-4  ">
      
        <div className="  grid sm:grid-cols-2 grid-cols-1 md:pt-10 pt-6  md:pb-24 pb-16">
          <div> 
            <BumpaHeading text={HEADINGTEXT} />
            <h2 className="text-white text-2xl font-semibold font-titillium   pb-3 ">
              {SUB_HEADING}
            </h2> 
            <DetailsText text={DETAILS_TEXT} />
          </div>
        </div>
       
      </div>
    
    </div>
    </>
  );
};

export default HeroSection;
