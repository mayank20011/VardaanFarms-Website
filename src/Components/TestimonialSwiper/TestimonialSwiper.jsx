import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import leftQuote from "../../img/left-quote.png";
import testimonial2 from "../../img/testimonial2.jpg";
import priyaSharma from "../../img/priyaSharma.jpg";
import poojaSingh from "../../img/poojaSingh.jpg";
import snehaReddy from "../../img/snehaReddy.jpg";
import rahulMehta from "../../img/rahulMehta.jpg";
import anilKumar from "../../img/anilKumar.jpeg";
import amitJoshi from "../../img/amitJoshi.jpeg";

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
            <img src={leftQuote} alt="" loading="lazy"/>
            <p className="text-xl text-neutral-600 text-left">
            "VardaanFarms' milk has been a game-changer for our family. The quality is top-notch, and it’s so fresh. We love starting our day with it! Whether it's tea, coffee, or just a glass of milk, we can taste the difference in every sip. The richness and purity make it a perfect choice for all our dairy needs."
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={rahulMehta}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Rahul Mehta</h1>
                  <p className="text-neutral-500 text-sm">Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" loading="lazy"/>
            <p className="text-xl text-neutral-600 text-left">
            "I've tried many dairy brands, but nothing compares to VardaanFarms. Their paneer is incredibly soft and delicious, making my curries and snacks taste amazing. It's become a staple in our kitchen, and even my kids love it! The texture and flavor are always consistent, which makes it easy to cook with."
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={priyaSharma}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Priya Sharma</h1>
                  <p className="text-neutral-500 text-sm">Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" loading="lazy"/>
            <p className="text-xl text-neutral-600 text-left">
            "VardaanFarms' ghee has brought back the traditional taste to my cooking. It’s rich and flavorful, just like what my grandmother used to make. The aroma and taste are so authentic that it makes every dish special. It’s not just food, it's a journey back to those cherished family recipes."
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={anilKumar}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Anil Kumar</h1>
                  <p className="text-neutral-500 text-sm">Bangalore</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" loading="lazy"/>
            <p className="text-xl text-neutral-600 text-left">
            "Their curd is simply amazing. It’s smooth and has the perfect tangy taste that enhances every meal. Whether it's in raita, lassi, or kadhi, VardaanFarms' curd adds that extra touch of deliciousness. It's a must-have in our refrigerator, and we enjoy it daily."
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={snehaReddy}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Sneha Reddy</h1>
                  <p className="text-neutral-500 text-sm">Hyderabad</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" loading="lazy"/>
            <p className="text-xl text-neutral-600 text-left">
            "The convenience of having fresh, nutritious milk delivered to our doorstep every day is unbeatable. VardaanFarms has exceeded our expectations with their service and quality. It's a relief to know we can always count on them for our dairy needs. The hassle-free service is a huge plus for our busy lifestyle."
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={amitJoshi}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Amit Joshi</h1>
                  <p className="text-neutral-500 text-sm">Pune</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          {/* Card */}
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="" loading="lazy"/>
            <p className="text-xl text-neutral-600 text-left">
            "I love the purity and taste of VardaanFarms' products. Their buffalo milk is perfect for making sweets, and the quality is always consistent. My family enjoys the rich and creamy taste in our desserts and everyday meals. The freshness and authenticity make all the difference."
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={poojaSingh}
                  alt=""
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Pooja Singh</h1>
                  <p className="text-neutral-500 text-sm">Jaipur</p>
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
