import React from 'react'
import BumpaHeading from '../BumpaHeading';
import { HeaderBumpa } from '@/components/common/HeaderBumpa';
import { DetailsText } from '../DetailsText';

const HeroScreena = () => {
    const DETAILS_TEXT =
    "The Screena is engineered for reliability and ease of use, making it the go-to solution for screening in construction, landscaping, and recycling projects";
  const HEADINGTEXT = "SCREENA";
  const SUB_HEADING = "Key Features and Advantages";

  return (
    <>
    <div className="screena_img bg-black bg-opacity-90 bg-cover bg-right-bottom h-full">
        <HeaderBumpa />
      <div className="container mx-auto px-4  ">
        <div className="  grid sm:grid-cols-2 grid-cols-1 md:pt-10 pt-6  md:pb-24 pb-16">
          <div> 
          <h1 className={`BumbaText font-titillium-bold  py-32 sm:text-[150px] text-8xl  max-[375px]:text-7xl   BumbaText_letterSpaces`}>{HEADINGTEXT}</h1>
     
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

export default HeroScreena
