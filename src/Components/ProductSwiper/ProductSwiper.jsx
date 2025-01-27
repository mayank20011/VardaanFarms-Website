import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiper.css";

// Import required modules
import { EffectCards, Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";

import DTM from "../../img/DTM2.png";
import cowGhee from "../../img/a2CowGhee.png";
import buffaloGhee from "../../img/buffaloGhee.png";
import Paneer from "../../img/paneer.png";
import Curd from "../../img/curd.png";

function ProductSwiper() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{ delay: 5000 }} 
        // Add autoplay option with delay of 3000ms (3 seconds)
        className={`w-[267px] h-[400px]`}
      >
        <SwiperSlide className={`px-4 py-6 shadow-2xl shadow-black flex flex-col items-center justify-center rounded-lg text-xl font-bold`}>
          <div className="w-full h-full flex flex-col justify-between">
            {/* image */}
            <div className="flex justify-center items-center p-4">
              <img src={DTM} alt="" className="w-44 hover:rotate-6 transition"/>
            </div>
            {/* Text */}
            <div className="grow-1 flex flex-col gap-2">
              <h1 className="">Double Toned</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius.</p>
              <button className="w-fit text-sm px-6 py-2 border-2 rounded-md hover:scale-90 transition  font-bold hover:shadow-lg">See More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-4 py-6 shadow-2xl shadow-black flex flex-col items-center justify-center rounded-lg text-xl font-bold">
          <div className="w-full h-full flex flex-col justify-between">
            {/* image */}
            <div className="flex justify-center items-center p-4">
              <img src={Curd} alt="" className="w-44 hover:rotate-6 transition"/>
            </div>
            {/* Text */}
            <div className="grow-1 flex flex-col gap-2">
              <h1 className="">Curd</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius.</p>
              <button className="w-fit text-sm px-6 py-2 border-2 rounded-md hover:scale-90 transition  font-bold hover:shadow-lg">See More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-4 py-6 shadow-2xl shadow-black flex flex-col items-center justify-center rounded-lg text-xl font-bold">
          <div className="w-full h-full flex flex-col justify-between">
            {/* image */}
            <div className="flex justify-center items-center p-4">
              <img src={cowGhee} alt="" className="w-32 hover:rotate-6 transition"/>
            </div>
            {/* Text */}
            <div className="grow-1 flex flex-col gap-2">
              <h1 className="">Cow Ghee</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius.</p>
              <button className="w-fit text-sm px-6 py-2 border-2 rounded-md hover:scale-90 transition font-bold hover:shadow-lg hover:shadow-yellow-300 bg-yellow-300">See More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-4 py-6 shadow-2xl shadow-black flex flex-col items-center justify-center rounded-lg text-xl font-bold">
          <div className="w-full h-full flex flex-col justify-between">
            {/* image */}
            <div className="flex justify-center items-center p-4">
              <img src={buffaloGhee} alt="" className="w-32 hover:rotate-6 transition"/>
            </div>
            {/* Text */}
            <div className="grow-1 flex flex-col gap-2">
              <h1 className="">Buffalo Ghee</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius.</p>
              <button className="w-fit text-sm px-6 py-2 border-2 rounded-md hover:scale-90 transition  font-bold hover:shadow-lg border-slate-100">See More</button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-4 py-6 shadow-2xl shadow-black flex flex-col items-center justify-center rounded-lg text-xl font-bold">
          <div className="w-full h-full flex flex-col justify-between">
            {/* image */}
            <div className="flex justify-center items-center p-4">
              <img src={Paneer} alt="" className="w-28 hover:rotate-6 transition"/>
            </div>
            {/* Text */}
            <div className="grow-1 flex flex-col gap-2">
              <h1 className="">Paneer</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius.</p>
              <button className="w-fit text-sm px-6 py-2 border-2 rounded-md hover:scale-90 transition  font-bold hover:shadow-lg">See More</button>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default ProductSwiper;
