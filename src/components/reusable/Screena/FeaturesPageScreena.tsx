import React from 'react'
import FeatureDetailList from '../FeatureDetailList';
import OpertionalEfficiency from '../OpertionalEfficiency';
import KeyFeature from '../KeyFeature';

import Capacity from '../../icons/capacity';
import Setting from '../../icons/setting';
import Portability from '../../icons/portability';
import SafetyIcon from '../../icons/SafetyIcon';
import { HeaderBumpa } from '@/components/common/HeaderBumpa';
import TittleMainHeading from '../TittleMainHeading';

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
const FeaturesPageScreena = () => {
    const HEADINGTEXT = "Key Features";
    const SUB_HEADING = "SCREENA";
    return (
        <>


            <div className="  h-full  ">
                <div className="container mx-auto px-4   ">
                    <HeaderBumpa />
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
                                "Requires 1-2 operators, depending on the type and volume of materials being screened.",
                                "The Screena must be placed on flat, stable ground, ensuring it can support the combined weight of the machine and the materials being processed.",
                                "Operators should perform routine checks to ensure that the screen is properly aligned and that all components are functioning correctly before use.",
                            ]}
                        />




                        <FeatureDetailList
                            icon={Portability}
                            heading="Portability"
                            dashed={false}
                            details={[
                                "Weighing 180 kg, the Screena is easy to transport and reposition, with compact dimensions for efficient storage.",
                                "The machine operates on either 110V or 240V power supplies, making it adaptable to various site requirements.",
                                "Its folding frame and wheels allow for quick setup and breakdown, reducing downtime between jobs.",
                            ]}
                        />
                        <FeatureDetailList
                            icon={SafetyIcon}
                            heading="Safety"
                            dashed={false}
                            details={[
                                "Equipped with emergency stop buttons to immediately halt operations in case of an issue.,",
                                "The machine includes an overload protection system, ensuring safe performance even under heavy loads.",
                                "Operators are required to use PPE, such as safety glasses, gloves, and protective footwear, and should ensure that power cables are kept clear of moving parts to avoid accidents.",
                            ]}
                        />


                    </div>



                </div>

                <div className=' py-8 bg-[#c3202a] mt-20'>
                    <OpertionalEfficiency data={data} heading="Operational Efficiency" />
                </div>

            </div>
        </>
    )
}

export default FeaturesPageScreena
