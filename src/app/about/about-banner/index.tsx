 
import React from "react"; 
export const Banner = () => {
  return (
    <>
     
      <div className="w-fit h-full flex items-center       ">
        <div className="flex flex-col sm:gap-12 gap-8 sm:w-[800px] max-[676px]:w-full">
          <div className="flex flex-col md:gap-[22px] gap-1 w-full font-titillium">
            <div className="   ">
              <div className="font-titillium flex flex-col font-normal lg:text-5xl md:text-3xl text-2xl lg:leading-[60px] md:leading-[40.872px] text-white  ">
                We distribute
                <span>advanced construction equipment</span>
                <span className="text-customRed font-normal font-titillium">
                  tailored to the Middle East
                </span>
              </div>
              <div className="lg:w-[70%] max-[676px]:w-full  pt-[10px]">
                <p className="text-[#595959] font-[24px] leading-[32px]">
                  Our range focuses on reducing labour time and enhancing
                  safety, helping teams work faster and with less physical
                  strain. With exclusive access to trusted brands, we provide
                  solutions that automate strenuous tasks and optimize
                  productivity on-site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;  
