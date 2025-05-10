import { HeaderBumpa } from "@/components/common/HeaderBumpa";
import HeroSection from "@/components/pages/bumpa_details/HeroSection";
import VerticleComponent from "@/components/pages/products/VerticleComponent";

import React from "react";

const page = () => {
  return (
    < >
       
        <HeaderBumpa /> 
      <div className="container mx-auto px-4  ">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-7 gap-4 overflow-hidden">

        <VerticleComponent content={"BUMPA"} description={"Vertical Conveyor"} link={"/bumpa_details"} />
        <VerticleComponent content={"SHIFTA"} description={"Conveyor System"} link={"/shifta_details"} />
        <VerticleComponent content={"SCREENA"} description={"Screening System"} link={"/screena_details"} />
        </div>
      </div>
    </>
  );
};

export default page;
