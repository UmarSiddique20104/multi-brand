import Image from 'next/image'
import React from 'react'
import Shifta from "@/../public/assets/Screena-Structure.png"
const AvailableScreena = () => {
  return (
    <>
            <div className="container mx-auto px-4 lg:pt-20 pb-10 ">
                <div className="w-full h-full pt-10   md:relative">
                    {/* <div className="md:absolute top-5  w-full">
                        <h4 className=" ps-12 text-center text-[#c3202a] text-xl font-semibold font-titillium leading-[46px]">
                            Available in
                        </h4>
                        <p className="ps-12 text-center  text-white text-xl font-semibold font-titillium leading-[46px]">
                            6,050 mm, 8,050 mm and 10,050 mm
                        </p>
                    </div> */}
                    <Image
                        src={Shifta}
                        alt="Picture of the author"
                        width={2000}
                        height={2000}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </>
  )
}

export default AvailableScreena
