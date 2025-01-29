import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import client1 from "../../img/client-1.png";
import client2 from "../../img/client-2.png";
import client3 from "../../img/client-3.png";
import client4 from "../../img/client-4.png";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

function TestimonialSlide() {
  return (
    <div className="w-full">
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={3}
        className="w-[380px] sm:w-[500px] md:w-[800px] overflow-x-hidden"
        modules={[Autoplay]}
        autoplay={{delay:2000}}
      >

        {/* SLide-1 */}
        <SwiperSlide className="text-center text-black select-none">
          <div className="bg-white w-full flex flex-col items-center">
            <img src={client1} alt="" className="w-36" loading="lazy"/>
            <p className="text-sm">Black Seeds</p>
          </div>
        </SwiperSlide>

         {/* SLide-2 */}
         <SwiperSlide className="text-center text-black select-none">
          <div className="bg-white w-full flex flex-col items-center">
            <img src={client2} alt="" className="w-36" loading="lazy"/>
            <p className="text-sm">Black Seeds</p>
          </div>
        </SwiperSlide>

         {/* SLide-3 */}
         <SwiperSlide className="text-center text-black select-none">
          <div className="bg-white w-full flex flex-col items-center">
            <img src={client3} alt="" className="w-36" loading="lazy"/>
            <p className="text-sm">Black Seeds</p>
          </div>
        </SwiperSlide>

         {/* SLide-4 */}
         <SwiperSlide className="text-center text-black select-none">
          <div className="bg-white w-full flex flex-col items-center">
            <img src={client4} alt="" className="w-36" loading="lazy"/>
            <p className="text-sm">Black Seeds</p>
          </div>
        </SwiperSlide>
        
        {/* Slide-5 */}
        <SwiperSlide className="text-center text-black select-none">
          <div className="bg-white w-full flex flex-col items-center">
            <img src={client1} alt="" className="w-36" loading="lazy"/>
            <p className="text-sm">Black Seeds</p>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default TestimonialSlide;
