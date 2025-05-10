 
import AccessoriesCards from "@/components/pages/bumpa_details/AccessoriesCard";
import AvailableSection from "@/components/pages/bumpa_details/AvailableSection";
import DynamicTable from "@/components/pages/bumpa_details/DataTable";
import FeatureDetailsSection from "@/components/pages/bumpa_details/Feature_Details_Section";
import HeroSection from "@/components/pages/bumpa_details/HeroSection";
import Slider from "@/components/pages/bumpa_details/Slider";
// import {Carousel} from '@/components/pages/bumpa_details/Slider'
import React from "react";

const page = () => {
 

  return (
    <div>
      <HeroSection />

      <FeatureDetailsSection />
      <div className="pt-4 ">
        <Slider/>
        <DynamicTable />
        <AvailableSection />
        <AccessoriesCards />
      </div>
    </div>
  );
};

export default page;
