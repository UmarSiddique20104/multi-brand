import { HeaderBumpa } from "@/components/common/HeaderBumpa";
import ContactForm from "@/components/pages/contact-us/ContactForm";
import ContactInfo from "@/components/pages/contact-us/ContactInfo";
import ContactUsLocation from "@/components/pages/contact-us/ContactLocation";
import React from "react";

const page = () => {
  return (
    <> 
        <HeaderBumpa /> 
      <div className="container mx-auto   px-4">
        <div className="grid grid-cols-12 xl:pt-96 pt-14 pb-10">
          <div className="md:col-span-5 col-span-12 h-full w-full   bg-[#c3202a]">
            <ContactInfo />
          </div>
          <div className="md:col-span-7 col-span-12 bg-white">
            <ContactForm />
          </div>
          <div className="col-span-12">
            <ContactUsLocation />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
