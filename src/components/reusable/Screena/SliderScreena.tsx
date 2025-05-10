'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules"; // Added Autoplay module

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image4 from "@/../public/assets/Screena1.png";
import Image3 from "@/../public/assets/Screena2.png";
import Image1 from "@/../public/assets/Screena3.png";
import Image2 from "@/../public/assets/Screena4.png";
import Image5 from "@/../public/assets/Screena5.png";
import Image from "next/image";
import "../../pages/bumpa_details/Slider.css";
import SecondaryHeading from "@/components/reusable/SecondaryHeading";

const ImagesArray = [Image4, Image3, Image1, Image2, Image4, Image5];

const SliderScreena = () => {
    return (
        <div className="container mx-auto px-4 lg:pt-28 pt-20">
            <div className="flex justify-center items-center -mb-10">

                <SecondaryHeading text="Screena in Action" />
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="swiper_container w-full overflow-hidden"
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 50000,
                    disableOnInteraction: false,
                }}

                breakpoints={{

                    1024: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    480: {
                        slidesPerView: 1,
                    },
                }}
            >
                {
                    ImagesArray.map((image, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={image}
                                alt="Picture of the author"
                                className="w-full h-full object-cover"
                                width={500}
                                height={500}
                            />
                        </SwiperSlide>
                    ))}

            </Swiper>
        </div>
    );
}


export default SliderScreena
