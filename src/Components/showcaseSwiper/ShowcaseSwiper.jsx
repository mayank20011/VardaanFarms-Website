import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import img1 from "../../img/homeSwipper1.svg";
import img2 from "../../img/homeSwipper2.svg";
import img3 from "../../img/homeSwipper3.svg";
import mobileSlide1 from "../../img/mobileSlider1.jpg";
import mobileSlide2 from "../../img/mobileSlider2.jpg";
import mobileSlide3 from "../../img/mobileSlider3.jpg";
function ShowcaseSwiper() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{ delay: "3000" }}
        modules={[Scrollbar, Autoplay]}
        className="w-full bg-slate-100"
      >
        {/* <SwiperSlide className="">
          <img src={img1} alt="" className="w-full h-full cursor-grab hidden md:block" loading="lazy"/>
          <img src={mobileSlide1} alt="" className="w-full h-full cursor-grab md:hidden" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="w-full h-full cursor-grab hidden md:block" loading="lazy"/>
          <img src={mobileSlide2} alt="" className="w-full h-full cursor-grab md:hidden" loading="lazy"/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" className="w-full h-full cursor-grab hidden md:block" loading="lazy"/>
        <img src={mobileSlide3} alt="" className="w-full h-full cursor-grab md:hidden" loading="lazy"/>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={img1}
              alt=""
              className="w-full h-full cursor-grab hidden md:block"
              loading="lazy"
            />
            <img
              src={mobileSlide1}
              alt=""
              className="w-full h-full cursor-grab md:hidden"
              loading="lazy"
            />
            {/* Shadow overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_40px_rgba(0,0,0,0.7)] pointer-events-none"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={img2}
              alt=""
              className="w-full h-full cursor-grab hidden md:block"
              loading="lazy"
            />
            <img
              src={mobileSlide2}
              alt=""
              className="w-full h-full cursor-grab md:hidden"
              loading="lazy"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_40px_rgba(0,0,0,0.7)] pointer-events-none"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={img3}
              alt=""
              className="w-full h-full cursor-grab hidden md:block"
              loading="lazy"
            />
            <img
              src={mobileSlide3}
              alt=""
              className="w-full h-full cursor-grab md:hidden"
              loading="lazy"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_40px_rgba(0,0,0,0.7)] pointer-events-none"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ShowcaseSwiper;
