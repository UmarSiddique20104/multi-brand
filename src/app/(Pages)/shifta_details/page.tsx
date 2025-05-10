import FeaturesShifta from '@/components/reusable/Shifta/FeaturesShifta'
import HeroShifta from '@/components/reusable/Shifta/HeroShifta'

import React from 'react'
import Slider from '@/components/reusable/Shifta/Slider';
import Table from '@/components/reusable/Shifta/Table';
import AvailableShifta from '@/components/reusable/Shifta/AvailableShifta';
import AccecoriesSifta from '@/components/reusable/Shifta/AccecoriesSifta';
import { HeaderBumpa } from '@/components/common/HeaderBumpa';
const Details = [
    {
        id: 1,
        heading: "Ergonomic Design",
        subHeading: "Aids manual handling",
    },
    {
        id: 3,
        heading: "Twin Speed",
        subHeading: "Helps manage different loads",
    },
    {
        id: 5,
        heading: "Hybrid Hopper",
        subHeading: "For greater material flexibility",
    },
    {
        id: 2,
        heading: "Available in Multiple Lengths",
        subHeading: "Comes in 3, 4, 5, and 6-meter lengths",
    },

    {
        id: 4,
        heading: "Folding Head",
        subHeading: "Allows for easy cleaning and maintenance",
    },

    {
        id: 6,
        heading: "Control Linked Machines",
        subHeading:
            "Control all linked machines with any one machine’s controls",
    },
];

const link = "/shifta_details/features"

const page = () => {
    return (
        <div>
              <HeaderBumpa />
      
            <HeroShifta />
 
            <FeaturesShifta Link={link} Details={Details} />

            <div className="pt-4 ">
                <Slider />
                <Table />
                <AvailableShifta />
                <AccecoriesSifta />
            </div>

        </div>
    )
}

export default page
