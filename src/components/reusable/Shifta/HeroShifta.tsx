import { HeaderBumpa } from '@/components/common/HeaderBumpa';
import React from 'react'
import BumpaHeading from '../BumpaHeading';
import { DetailsText } from '../DetailsText';

const HeroShifta = () => {
    const DETAILS_TEXT = "The Screena is engineered for reliability and ease of use, making it the go-to solution for screening in construction, landscaping, and recycling projects";
  const HEADINGTEXT = "SHIFTA";
  const SUB_HEADING = "Key Features and Advantages";

  return (
    <>
    <div className="shifta_img bg-black bg-opacity-90 bg-cover bg-right-bottom h-full">
      <div className=" container mx-auto px-4 ">
      
        <div className="  grid sm:grid-cols-2 grid-cols-1 md:pt-10 pt-6  md:pb-24 pb-16">
          <div> 
            <BumpaHeading text={HEADINGTEXT} />
            <h2 className="text-white text-2xl font-semibold font-titillium  pb-3 ">
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

export default HeroShifta
