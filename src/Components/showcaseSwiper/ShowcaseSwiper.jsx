import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import mobileSlide1 from "../../img/mobileSlider1.jpg";
import mobileSlide2 from "../../img/mobileSlider2.jpg";
import mobileSlide3 from "../../img/mobileSlider3.jpg";
import pcSlider1 from "../../img/pcSlider1.jpg";
import pcSlider2 from "../../img/pcSlider2.jpg";
import pcSlider3 from "../../img/pcSlider3.jpg";
import { Link } from "react-router-dom";

const ShowcaseSwiper = () => {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{ delay: "5000" }}
        modules={[Scrollbar, Autoplay]}
        className="w-full bg-slate-100"
      >
        <SwiperSlide className="relative">
          <div className="relative w-full h-full">
            <img
              src={pcSlider1}
              alt="Cows Grazing in farm"
              className="w-full h-full cursor-grab hidden md:block brightness-50"
            />
            <img
              src={mobileSlide1}
              alt="Cow and Calf Staring at camera"
              className="w-full h-full cursor-grab md:hidden brightness-50"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_40px_rgba(0,0,0,0.7)] pointer-events-none"></div>
          </div>
          <div className="absolute z-50 top-0 flex flex-col gap-6 h-full w-full justify-end md:justify-center pb-12 md:pb-0">
            <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
              <div className="md:w-1/2 flex flex-col gap-6 tab:w-3/4">
                <h1
                  className="text-white text-3xl md:text-5xl font-bold tab:text-4xl"
                  id="slide1h1"
                >
                  Fresh Farm Milk
                </h1>
                <p className="text-lg md:text-lg" id="slide1p">
                  Our cows graze on lush green pastures, producing milk that's
                  pure and wholesome. Straight from our farm to your table,
                  enjoy the taste of freshness in every sip.
                </p>
                <Link to={"/blogs"}>
                  <button
                    id="slide1btn"
                    className="w-fit border-2 px-4 py-2 shadow-md shadow-white hover:scale-95 transition cursor-pointer"
                  >
                    Read Blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="relative w-full h-full">
            <img
              src={pcSlider2}
              alt="cow Heard"
              className="w-full h-full cursor-grab hidden md:block brightness-50"
              loading="lazy"
            />
            <img
              src={mobileSlide2}
              alt="Cow Portrait looking somewhere else"
              className="w-full h-full cursor-grab md:hidden brightness-50"
              loading="lazy"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_40px_rgba(0,0,0,0.7)] pointer-events-none"></div>
          </div>
          <div className="absolute z-50 top-0 flex flex-col gap-6 h-full w-full justify-end md:justify-center pb-12 md:pb-0">
            <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
              <div className="md:w-1/2 flex flex-col gap-6 tab:w-3/4">
                <h1 className="text-white text-3xl md:text-5xl font-bold tab:text-4xl">
                  Nutritious Dairy Products
                </h1>
                <p className="text-lg md:text-lg">
                  From creamy yogurt to rich butter, our dairy products are
                  crafted with care. We ensure quality and nutrition in every
                  bite, making your meals healthier and tastier.
                </p>
                <Link
                  to={"/blogs"}
                  className="w-fit border-2 px-4 py-2 shadow-md shadow-white hover:scale-95 transition cursor-pointer"
                >
                  Read Blogs
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative">
          <div className="relative w-full h-full">
            <img
              src={pcSlider3}
              alt="cow Heard Grazing and onw cow looking at camera"
              className="w-full h-full cursor-grab hidden md:block brightness-50"
              loading="lazy"
            />
            <img
              src={mobileSlide3}
              alt="cow Looking Dead in cameraman eyes"
              className="w-full h-full cursor-grab md:hidden brightness-50"
              loading="lazy"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_40px_rgba(0,0,0,0.7)] pointer-events-none"></div>
          </div>
          <div className="absolute z-50 top-0 flex flex-col gap-6 h-full w-full justify-end md:justify-center pb-12 md:pb-0">
            <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
              <div className="md:w-1/2 flex flex-col gap-6 tab:w-3/4">
                <h1 className="text-white text-3xl md:text-5xl font-bold tab:text-4xl">
                  Sustainable Farming
                </h1>
                <p className="text-lg md:text-lg">
                  At our dairy farm, we prioritize sustainability. Our
                  eco-friendly practices help protect the environment while
                  providing you with the best dairy products.
                </p>
                <Link
                  to={"/blogs"}
                  className="w-fit border-2 px-4 py-2 shadow-md shadow-white hover:scale-95 transition cursor-pointer"
                >
                  Read Blogs
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ShowcaseSwiper;


