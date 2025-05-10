import React from 'react'
import { HeaderBumpa } from '../common/HeaderBumpa'; 
import TittleMainHeading from './TittleMainHeading';
import FeatureDetailList from './FeatureDetailList'; 
import KeyFeature from './KeyFeature';
import Capacity from '../icons/capacity';
import Setting from '../icons/setting';
import Portability from '../icons/portability';
import SafetyIcon from '../icons/SafetyIcon';
import OpertionalEfficiency from './OpertionalEfficiency';
const data = [
  {
    heading: "Manual Labor Time",
    description:
      "Moving 1,000 tiles manually to roof height typically requires 2-3 workers and can take upwards of 2 hours depending on the method used",
  },
  {
    heading: "Efficiency",
    description:
      "The Bumpa can transport 1,000 tiles in just 1 hour with 2 operators—1 at the base and 1 at the top—resulting in significantly less worker fatigue and strain",
  },
  {
    heading: "Time Savings",
    description:
      "The Bumpa is 2-3 times faster than manual labor, freeing up time for other tasks and enhancing overall productivity",
  },
  {
    heading: "Manpower Reduction",
    description:
      "Instead of 2-3 workers for manual labor, you only need 2 operators, which helps optimize manpower allocation across projects",
  },
];
const FeaturePage = () => {
  const HEADINGTEXT = "Key Features";
    const SUB_HEADING = "BUMPA";

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
      <div className='grid grid-cols-1 gap-y-24'>
      <FeatureDetailList
        icon={Capacity}
        heading="Capacity"
        dashed={true}
        details={[
          "Both electric and petrol Bumpa models can carry a maximum payload of 80 kg on the belt, with 20 kg per individual carrier",
          "Belt speed is 20 meters per minute across all models",
          "Maximum working heights",
          "6m model: 5.0 meters height",
          "8m model: 7.0 meters height",
          "10m model: 9.0 meters height",
        ]}
      />

      <FeatureDetailList
        icon={Setting}
        heading="Setup"
        dashed={false}
        details={[
          "Requires 2 operators: one at the base to load materials and another at the top to unload",
          "Must be set up on level ground to ensure stability, with safety checks conducted before each use",
          "Safety measures include ensuring the machine is properly secured to scaffolding or roof structures, and checking that the brake system is functioning correctly",
        ]}
      />




<FeatureDetailList
        icon={Portability}
        heading="Portability"
        dashed={false}
        details={[
          "The electric model is powered by a 0.75kW motor, suitable for sites with available power",
          "The petrol version uses a Honda GX120 engine, providing flexibility for remote locations without electricity",
          "Both models are designed to fold compactly for easy transport and secure storage, minimizing space requirements during transit",
        ]}
      />
<FeatureDetailList
        icon={SafetyIcon}
        heading="Safety"
        dashed={false}
        details={[
          "Equipped with emergency stop buttons for immediate shutdown in case of an emergency",
          "Limit switches are installed to prevent the machine from operating beyond safe load limits",
          "Operates safely at inclines up to 65°, with built-in features to maintain stability and prevent slipping during use",
        ]}
      />

    
    </div>

  
        
      </div>

      <div className=' py-8 bg-[#c3202a] mt-20'>
    <OpertionalEfficiency  data={data} heading="Operational Efficiency" />
    </div>
    
    </div>
    </>
  );
}

export default FeaturePage



