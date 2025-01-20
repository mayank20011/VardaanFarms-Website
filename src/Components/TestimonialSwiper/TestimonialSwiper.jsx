import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import leftQuote from "../../img/left-quote.png";
import testimonial2 from "../../img/testimonial2.jpg";
// Import Swiper styles
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function TestimonialSwiper() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{delay:3000}}
        modules={[Pagination, Autoplay]}
        className=""
      >
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" />
            <p className="text-xl text-neutral-600 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sapiente repudiandae sit tempora commodi eligendi repellendus,
              modi nostrum mollitia, veniam laboriosam veritatis deleniti
              officiis numquam iusto omnis dolore, soluta magni.
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={testimonial2}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Adam Crew</h1>
                  <p className="text-neutral-500 text-sm">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" />
            <p className="text-xl text-neutral-600 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sapiente repudiandae sit tempora commodi eligendi repellendus,
              modi nostrum mollitia, veniam laboriosam veritatis deleniti
              officiis numquam iusto omnis dolore, soluta magni.
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={testimonial2}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Adam Crew</h1>
                  <p className="text-neutral-500 text-sm">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" />
            <p className="text-xl text-neutral-600 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sapiente repudiandae sit tempora commodi eligendi repellendus,
              modi nostrum mollitia, veniam laboriosam veritatis deleniti
              officiis numquam iusto omnis dolore, soluta magni.
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={testimonial2}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Adam Crew</h1>
                  <p className="text-neutral-500 text-sm">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" />
            <p className="text-xl text-neutral-600 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sapiente repudiandae sit tempora commodi eligendi repellendus,
              modi nostrum mollitia, veniam laboriosam veritatis deleniti
              officiis numquam iusto omnis dolore, soluta magni.
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={testimonial2}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Adam Crew</h1>
                  <p className="text-neutral-500 text-sm">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" />
            <p className="text-xl text-neutral-600 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sapiente repudiandae sit tempora commodi eligendi repellendus,
              modi nostrum mollitia, veniam laboriosam veritatis deleniti
              officiis numquam iusto omnis dolore, soluta magni.
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={testimonial2}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Adam Crew</h1>
                  <p className="text-neutral-500 text-sm">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" />
            <p className="text-xl text-neutral-600 text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              sapiente repudiandae sit tempora commodi eligendi repellendus,
              modi nostrum mollitia, veniam laboriosam veritatis deleniti
              officiis numquam iusto omnis dolore, soluta magni.
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={testimonial2}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Adam Crew</h1>
                  <p className="text-neutral-500 text-sm">Manager</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TestimonialSwiper;
