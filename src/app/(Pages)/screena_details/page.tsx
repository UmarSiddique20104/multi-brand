import AvailableScreena from '@/components/reusable/Screena/AvailableScreena';
import HeroScreena from '@/components/reusable/Screena/HeroScreena'
import SliderScreena from '@/components/reusable/Screena/SliderScreena';
import FeaturesShifta from '@/components/reusable/Shifta/FeaturesShifta'
import React from 'react'
const Details = [
    {
        id: 1,
        heading: "Tested Throughput",
        subHeading: "Can move 60 tonnes per hour for high efficiency",
    },
    {
        id: 3,
        heading: "Heavy Integral Zinc-Plated Hopper",
        subHeading: "Reduces overspill in demanding environments",
    },
    {
        id: 5,
        heading: "Interchangeable Screens",
        subHeading: "Allows for flexibility in screening with multiple sizes available",
    },
    {
        id: 2,
        heading: "Highly Portable",
        subHeading: "Can be easily moved by one person, enhancing mobility",
    },

    {
        id: 4,
        heading: "Simplified Design",
        subHeading: "Fewer moving parts, less weight, and reduced maintenance requirements",
    },

    {
        id: 6,
        heading: "Eco-Friendly Motor",
        subHeading:
            "Equipped with a 3-phase 0.55kw motor, ensuring lower environmental impact",
    },
];
const link = "/screena_details/features"
const page = () => {
    return (
        <div>
            <HeroScreena />
            <FeaturesShifta Link={link} Details={Details} />
            <div className="pt-4 ">
                <SliderScreena />
                <AvailableScreena />
            </div>
        </div>
    )
}

export default page
