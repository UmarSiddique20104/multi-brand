import React from "react";

const OpertionalList = ({ heading, description }: any) => {
  return (
    <div className="flex-col justify-start items-start gap-1.5 inline-flex">
      <h4 className="self-stretch   text-white text-2xl font-semibold font-titillium leading-loose">
        {heading}
      </h4>
      <p className="self-stretch opacity-60 text-white text-xl font-normal font-titillium leading-loose">
        {description}
      </p>
    </div>
  );
};

const OpertionalEfficiency = ({
  data,
  heading,
}: {
  data: { heading: string; description: string }[];
  heading: string;
}) => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-black text-4xl   font-titillium-semi leading-loose">
        {heading}
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 pt-4">
        {data.map((item, index) => (
          <OpertionalList
            key={index}
            heading={item.heading}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OpertionalEfficiency;
