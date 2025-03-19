import { Swiper, SwiperSlide } from "swiper/react";
import leftQuote from "../../img/left-quote.png";
import priyaSharma from "../../img/priyaSharma.jpg";
import poojaSingh from "../../img/poojaSingh.jpg";
import snehaReddy from "../../img/snehaReddy.jpg";
import rahulMehta from "../../img/rahulMehta.jpg";
import anilKumar from "../../img/anilKumar.jpeg";
import amitJoshi from "../../img/amitJoshi.jpeg";
// import vinay from "../../img/vinay.jpg";

import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const TestimonialSwiper = () => {
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
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt={"left Quote Image"} loading="lazy" className="w-16"/>
            <p className="text-xl text-neutral-600 text-left">
            "Vardaan Farms’ fresh milk has been a game changer for my family. The taste is pure, and I love that it's free from preservatives. My kids enjoy every sip!"
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={rahulMehta}
                  alt="Rahul Mehta's image"
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Aman Kumar</h1>
                  <p className="text-neutral-500 text-sm">Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="left Quote image" loading="lazy" className="w-16" />
            <p className="text-xl text-neutral-600 text-left">
            "As a café owner, I need high-quality dairy products daily. Vardaan Farms’ high-protein milk has been the perfect choice for our protein shakes and lattes!"
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={priyaSharma}
                  alt="Priya Sharma's image"
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Ritika Sharma</h1>
                  <p className="text-neutral-500 text-sm">Gurgaon</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          <div className="w-full bg-white pb-12" >
            <img src={leftQuote} alt="left Quote image" loading="lazy" className="w-16" />
            <p className="text-xl text-neutral-600 text-left">
            "We’ve been sourcing bulk fresh milk from Vardaan Farms for our retail store, and the quality has been exceptional. Customers love the purity!"
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={anilKumar}
                  alt="Anil Kumar's Image"
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Rajesh Mehra</h1>
                  <p className="text-neutral-500 text-sm">Gurugram, Dairy Distributor</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="left Quote image" loading="lazy" className="w-16" />
            <p className="text-xl text-neutral-600 text-left">
            "Switching to Vardaan Farms' organic milk was the best decision. It’s rich, creamy, and truly natural. I feel the difference in my health!"
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={snehaReddy}
                  alt="Sneha Reddy's image"
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Neha</h1>
                  <p className="text-neutral-500 text-sm">Jhajjar</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="left Quote image" loading="lazy" className="w-16"/>
            <p className="text-xl text-neutral-600 text-left">
            "The paneer and ghee from Vardaan Farms are of the highest quality. You can taste the authenticity and farm-fresh goodness in every bite!"
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={amitJoshi}
                  alt="Amit Joshi's Image"
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Amit Joshi</h1>
                  <p className="text-neutral-500 text-sm">Jhajjar</p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full select-none cursor-pointer">
          <div className="w-full bg-white pb-12">
            <img src={leftQuote} alt="left Quote image" loading="lazy" className="w-16" />
            <p className="text-xl text-neutral-600 text-left">
            "Their cultured milk is amazing! My digestion has improved, and I love that it’s packed with natural probiotics. Highly recommend!"
            </p>
            <div>
              <div className="flex gap-4 pt-6">
                <img
                  src={poojaSingh}
                  alt="Pooja Singh's image"
                  className="w-28 rounded-full border-2 border-green-600 shadow-md shadow-black"
                  loading="lazy"
                />
                <div className="grow flex flex-col justify-center">
                  <h1 className="text-black">Sonia Parjapati</h1>
                  <p className="text-neutral-500 text-sm">Gurugram</p>
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
