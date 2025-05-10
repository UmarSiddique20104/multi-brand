import Image from 'next/image';
import React from 'react'
import { DetailsText } from '../DetailsText';
import SecondaryHeading from '../SecondaryHeading';
import Image1 from "@/../public/assets/accessories1.png";
import Image2 from "@/../public/assets/accessories2.png";
import Image3 from "@/../public/assets/accessories3.png";
import Image4 from "@/../public/assets/accessories4.png";

const AccecoriesSifta = () => {
    const Accessories = [
        {
            Images: Image1,
            Title: "Brick Guard",
        },
        {
            Images: Image2,
            Title: "Shute Extensions",
        },
        {
            Images: Image3,
            Title: "Buckets",
        },
        {
            Images: Image4,
            Title: "Base Stand",
        },
    ];
    return (
        <div className="container mx-auto px-4 lg:pt-56 pt-36  pb-16">
          <div className="grid grid-cols-12    ">
            <div className="xl:col-span-5 lg:col-span-6 md:col-span-8 col-span-10 xl:pe-16    ">
              <div className="pb-2">
    
              <SecondaryHeading text="Accessories" />
              </div>
              <DetailsText text="The Shifta can be customized with several accessories to further improve efficiency and site safety" />
            </div>
          </div>
          <div className="lg:pt-48 pt-32">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {Accessories.map((accessory, index) => (
                <AccessoriesCard
                  key={index}
                  Images={accessory.Images}
                  Title={accessory.Title}
                //   Description={accessory.Description}
                />
              ))}
            </div>
          </div>
        </div>
      );
}

export default AccecoriesSifta


const AccessoriesCard = ({ Images, Title }: any) => {
    return (
      <div className=" grid grid-cols-1  gap-x-5 gap-y-2">
        <div className="h-full">
          <Image
            height={1000}
            width={1000}
            alt="Image"
            className="w-full h-80 object-cover  "
            src={Images}
          />
        </div>
  
        <div className=" px-6 pt-4 pb-7  h-full   bg-white">
          <h3 className="text-center text-[#c3202a] text-2xl font-bold font-titillium leading-[46px]">
            {Title}
          </h3>
          {/* <p className="text-center text-black text-base font-normal font-titillium leading-tight">
            {Description}
          </p> */}
        </div>
      </div>
    );
  };
  