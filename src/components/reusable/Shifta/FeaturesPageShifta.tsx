import React from "react";
import FeatureDetailList from "../FeatureDetailList";
import OpertionalEfficiency from "../OpertionalEfficiency";
import KeyFeature from "../KeyFeature"; 
import Capacity from "../../icons/capacity";
import Setting from "../../icons/setting";
import Portability from "../../icons/portability";
import SafetyIcon from "../../icons/SafetyIcon";
import { HeaderBumpa } from "@/components/common/HeaderBumpa";
import TittleMainHeading from "../TittleMainHeading";

const data = [
  {
    heading: "Manual Labor Time",
    description:
      "Transporting heavy materials like rubble or soil manually can take 4-5 workers several hours",
  },
  {
    heading: "Efficiency",
    description:
      "The Shifta can move these materials continuously with 2-3 operators at much faster rates",
  },
  {
    heading: "Time Savings",
    description:
      "The Shifta reduces the transport time by 50% or more compared to manual handling",
  },
  {
    heading: "Manpower Reduction",
    description:
      "Instead of 4-5 workers, only 2-3 operators are needed, significantly reducing labor requirements",
  },
];
const FeaturesPageShifta = () => {
  const HEADINGTEXT = "Key Features";
  const SUB_HEADING = "SHIFTA";

  return (
    <>
      <div className="  h-full  ">
        <HeaderBumpa />
        <div className="container mx-auto px-4   ">
          <div className="  grid sm:grid-cols-2 grid-cols-1 md:pt-10 pt-6  md:pb-24 pb-16">
            <div>
              <TittleMainHeading text={SUB_HEADING} />
              <KeyFeature text={HEADINGTEXT} padding={"pb-10  2xl:pt-1"} />
            </div>
          </div>
        </div>
        <div className="container mx-auto  px-4">
          <div className="grid grid-cols-1 gap-y-24">
            <FeatureDetailList
              icon={Capacity}
              heading="Capacity"
              dashed={true}
              details={[
                "Maximum belt load of 200 kg for all models",
                "Belt speed options: 20 meters per minute (slow) and 32 meters per minute (fast)",
                "Maximum operating angle: 55° across all models",
              ]}
            />

            <FeatureDetailList
              icon={Setting}
              heading="Setup"
              dashed={false}
              details={[
                "Typically requires 2-3 operators, depending on the material load and site conditions", 
                "The machine must be securely positioned on firm, stable ground, with the aid of conveyor trestles to ensure operational stability", 
                "Before starting, operators must apply the brakes to prevent movement and conduct a full pre-operation safety check",
              ]}
            />

            <FeatureDetailList
              icon={Portability}
              heading="Portability"
              dashed={false}
              details={[
                "Powered by a 1.0kW drum motor, the Shifta is designed to handle heavy-duty material transport over long distances",
                "Features foldable wheels, allowing for compact storage and easier transportation between job sites",
                "Its lightweight yet durable construction makes it easy to move and reposition as needed, reducing setup time",
              ]}
            />
            <FeatureDetailList
              icon={SafetyIcon}
              heading="Safety"
              dashed={false}
              details={[
                "Emergency stop buttons are positioned on either side for quick access in case of a hazard",
                "An overload protection system prevents damage to the machine and ensures safe operation under heavy loads",
                "Operators must wear appropriate PPE, including gloves, helmets, and safety boots, to minimize risks during operation",
              ]}
            />
          </div>
        </div>

        <div className=" py-8 bg-[#c3202a] mt-20 pb-10">
          <OpertionalEfficiency data={data} heading="Operational Efficiency" />
        </div>
      </div>
    </>
  );
};

export default FeaturesPageShifta;
