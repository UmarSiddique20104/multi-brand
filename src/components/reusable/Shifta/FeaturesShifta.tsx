import React from 'react'
import { NavigationLink } from '../NavigationLink';

const FeaturesShifta = ({ Details , Link }: { Details: any[], Link: any }) => {
    const safeDetails = Array.isArray(Details) ? Details : []; // Fallback to empty array if it's not an array
    return (
        <div className="bg-customRed py-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 py-4 justify-start items-start md:gap-14 sm:gap-7 gap-5">
                    {safeDetails?.map((detail: any) => (
                        <div key={detail.id} className="xl:col-span-4 lg:col-span-6 col-span-12">
                            <DetailsText heading={detail.heading} subHeading={detail.subHeading} />
                        </div>
                    ))}
                </div>
                <div className="lg:flex justify-center items-center py-8">
                    <NavigationLink text="See features detail" padding="px-10" link={Link} />
                </div>
            </div>
        </div>
    );
};
export default FeaturesShifta

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
