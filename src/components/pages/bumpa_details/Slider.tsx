"use client";
// import Image from "next/image";
// import React from "react";

// import Image3 from "@/../public/assets/Tool2.png";
// import Image1 from "@/../public/assets/Tool3.png";
// import Image2 from "@/../public/assets/Tool4.png";
// import "./Slider.css";
// const Slider = () => {
//   return (
//     <div className="mainClass">
//       <input type="radio" name="position" />
//       <input type="radio" name="position" />
//       <input type="radio" name="position" checked />
//       <input type="radio" name="position" />
//       <input type="radio" name="position" />
//       <main id="carousel">
//         <div className="item">
//           <Image
//             src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//           <h3 className="name">Sally Sharpe</h3>
//           <p className="occupation">Marketing Admin</p>
//           <p className="testimonial">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
//             suscipit?
//           </p>
//         </div>
//         <div className="item">
//           <Image
//           src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//           <h3 className="name">Michael John</h3>
//           <p className="occupation">Cybersecurity Engineer</p>
//           <p className="testimonial">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
//             dolore.
//           </p>
//         </div>
//         <div className="item">
//           <Image
//          src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//           <h3 className="name">Mikayla Eddie</h3>
//           <p className="occupation">Software Engineer</p>
//           <p className="testimonial">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//             Consequatur, temporibus?
//           </p>
//         </div>
//         <div className="item">
//           <Image
//           src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//           <h3 className="name">Eve Smith</h3>
//           <p className="occupation">UI/UX Designer</p>
//           <p className="testimonial">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
//             beatae?
//           </p>
//         </div>
//         <div className="item">
//           <Image
//           src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//           <h3 className="name">Luke Maxwell</h3>
//           <p className="occupation">System Architect</p>
//           <p className="testimonial">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse,
//             tempore.
//           </p>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Slider;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, EffectCoverflow } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import Image4 from "@/../public/assets/Tool1.png";
// import Image from "next/image";
// import "./Slider.css";
// function CrouselSlider() {
//   return (
//     <div className="container mx-auto  ">
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={"auto"}
//         // slidesPerView={3} 
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         modules={[EffectCoverflow, Pagination]}
//         className="swiper_container"
//         pagination={{
//           clickable: true,
//         }}
//       >
  
//         <SwiperSlide>
//           <Image
//             src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <Image
//             src={Image4}
//             alt="Picture of the author"
//             width={500}
//             height={500}
//           />
//         </SwiperSlide>
      
//       </Swiper>
//     </div>
//   );
// }

// export default CrouselSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules"; // Added Autoplay module

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image4 from "@/../public/assets/Slider1.png";
import Image3 from "@/../public/assets/Slider2.png";
import Image1 from "@/../public/assets/Slider3.png";
import Image2 from "@/../public/assets/Slider4.png"; 
import Image5 from "@/../public/assets/Slide.png"; 
import Image from "next/image";
import "./Slider.css";
import SecondaryHeading from "@/components/reusable/SecondaryHeading";

function CrouselSlider() {

  const ImagesArray = [Image4, Image3, Image1, Image2, Image4, ];
  return (
    <div className="container mx-auto px-4 lg:pt-28 pt-20">
      <div className="flex justify-center items-center -mb-10">

      <SecondaryHeading text="Bumpa in Action" />
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
        modules={[EffectCoverflow, Pagination,Autoplay  ]}  
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

export default CrouselSlider;

//  "use client";
 

// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, EffectCoverflow, Autoplay } from "swiper/modules";   
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import Image4 from "@/../public/assets/Slider1.png";
// import Image3 from "@/../public/assets/Slider2.png";
// import Image1 from "@/../public/assets/Slider3.png";
// import Image2 from "@/../public/assets/Slider4.png"; 
// import Image5 from "@/../public/assets/Slide5.png"; 
// import Image from "next/image";
// import "./Slider.css";
// import SecondaryHeading from "@/components/reusable/SecondaryHeading";

// function CrouselSlider() {
//   const [num, setNum] = React.useState<any>("auto");
//   useEffect (() => {
//     if(window.innerWidth > 1024){
//       setNum(3);
//     }else {
//       setNum("auto");
//     }
//  console.log(window.innerWidth)
 
//   }, [ ]);

//   const ImagesArray = [Image4, Image3, Image1, Image2, Image5  ];
//   return (
//     <div className="container mx-auto px-4 lg:pt-28 pt-20">
//       <div className="flex justify-center items-center -mb-10">

//       <SecondaryHeading text="Bumpa in Action" />
//       </div>
//       <Swiper
//         effect={"coverflow "}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={num}  
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         modules={[EffectCoverflow, Pagination,
//           Autoplay 
//          ]}  
//         className="swiper_container w-full overflow-hidden"
//         pagination={{
//           clickable: true,
//         }}
//         autoplay={{
//           delay: 3500,  
//           disableOnInteraction: false,  
//         }}
    
        
      
//         breakpoints={{
         
//           1024: {
//             slidesPerView: 3,  
//           },
//           768: {
//             slidesPerView: 3,  
//           },
//           480: {
//             slidesPerView: 1,  
//           },
//         }}
//       >
//         { 
//         ImagesArray.map((image, index) => (
//           <SwiperSlide key={index}>
//             <Image
//               src={image}
//               alt="Picture of the author"
//               className="w-full h-full object-cover"
//               width={2000}
//               height={2000}
//             />
//           </SwiperSlide>
//         ))}
         
//       </Swiper>
//     </div>
//   );
// }

// export default CrouselSlider;

 