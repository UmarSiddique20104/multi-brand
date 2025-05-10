import Button from "@/components/reusable/Button";
import { NavigationLink } from "@/components/reusable/NavigationLink";
import React from "react";

const FeatureDetailsSection = () => {
  const Details = [
    {
      id: 1,
      heading: "Flexibility",
      subHeading: "Available in 3 different lengths",
    },
    {
      id: 3,
      heading: "Material Handling",
      subHeading: "Ergonomic design aids manual handling",
    },
    {
      id: 5,
      heading: "Speed",
      subHeading: "Can transport material at 28 meters per second",
    },
    {
      id: 2,
      heading: "Quick to Erect",
      subHeading: "Can be set up and operational in under 4 minutes",
    },
   
    {
      id: 4,
      heading: "Transport and Storage",
      subHeading: "Folds down for easy transportation and storage",
    },
  
    {
      id: 6,
      heading: "Mobility",
      subHeading:
        "Lightweight, easy to maneuver with locking, puncture-proof wheels",
    },
  ];
  return (
    <div className="bg-customRed py-4">
        <div className="container mx-auto px-4">

      <div className="  grid grid-cols-12   py-4  justify-start items-start  md:gap-14 sm:gap-7 gap-5  ">
        {Details.map((detail) => (
          <div key={detail.id} className="xl:col-span-4  lg:col-span-6 col-span-12 ">
            <DetailsText
              heading={detail.heading}
              subHeading={detail.subHeading}
            />
          </div>
        ))}
      </div>
      <div className="lg:flex justify-center  items-center py-8">
        <NavigationLink text="See features detail" padding="px-10" link="/bumpa_details/features" /> 
      </div>
        </div>
    </div>
  );
};

export default FeatureDetailsSection;

const DetailsText = ({ heading, subHeading }: any) => {
  return (
    <>
      <h4 className=" text-white text-xl font-bold  font-titillium tracking-wider  ">
        {heading}
      </h4>
      <p className=" pt-3 md:pe-7 opacity-60 font-titillium text-white text-xl font-normal  leading-[32px] tracking-wider ">
        {subHeading}
      </p>
    </>
  );
};
