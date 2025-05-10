"use client";
import Image from "next/image";
import React from "react";
import Image4 from "@/../public/assets/Tool1.png";
import Image3 from "@/../public/assets/Tool2.png";
import Image1 from "@/../public/assets/Tool3.png";
import Image2 from "@/../public/assets/Tool4.png";
import SecondaryHeading from "@/components/reusable/SecondaryHeading";
import { DetailsText } from "@/components/reusable/DetailsText";

const Accessories = [
  {
    Images: Image1,
    Title: "Brick Guard",
    Description: "Increases safety for operators by preventing brick slippage",
  },
  {
    Images: Image2,
    Title: "Shute Extensions",
    Description: "Allow for smoother offloading at greater heights ",
  },
  {
    Images: Image3,
    Title: "Buckets",
    Description:
      "Ideal for transporting smaller items such as mortar or gravel",
  },
  {
    Images: Image4,
    Title: "Base Stand",
    Description:
      "Anchors the machine securely to the ground for stable operation",
  },
];

const AccessoriesCards = () => {
  return (
    <div className="container mx-auto px-4 lg:pt-56 pt-36  pb-16">
      <div className="grid grid-cols-12   ">
        <div className="xl:col-span-5 lg:col-span-6 md:col-span-8 col-span-12 xl:pe-16    ">
          <div className="pb-2">

          <SecondaryHeading text="Accessories" />
          </div>
          <DetailsText text="The Bumpa can be customized with a range of accessories, ensuring it meets the exact needs of every project. Whether it’s improving safety or boosting efficiency, these additions make the Bumpa even more versatile." />
        </div>
      </div>
      <div className="lg:pt-40 pt-24">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {Accessories.map((accessory, index) => (
            <AccessoriesCard
              key={index}
              Images={accessory.Images}
              Title={accessory.Title}
              Description={accessory.Description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccessoriesCards;
const AccessoriesCard = ({ Images, Title, Description }: any) => {
  return (
    <div className=" grid grid-cols-1  gap-5">
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
        <p className="text-center text-black text-base font-normal font-titillium leading-tight">
          {Description}
        </p>
      </div>
    </div>
  );
};
