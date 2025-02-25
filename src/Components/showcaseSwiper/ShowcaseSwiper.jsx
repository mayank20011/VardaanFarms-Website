import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useRef, useState } from "react";

import mobileSlide2 from "../../img/s1m.png";
import mobileSlide3 from "../../img/s2m.png";
import pcSlider2 from "../../img/s1d.png";
import pcSlider1 from "../../img/s2d.png";
import { useNavigate } from "react-router-dom";

const ShowcaseSwiper = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
      <Swiper
        autoplay={{ delay: 5000 }}
        modules={[Autoplay]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full bg-slate-100 md:rounded-b-[40px] md:aspect-[16/6] aspect-[16/24] border-b-2 border-b-slate-200"
      >
        <SwiperSlide className="relative aspect-auto" onClick={() => navigate("/products")}>
          <img
            src={pcSlider1}
            alt="cow Heard"
            className="w-full h-full cursor-grab hidden md:block brightness-100"
            loading="lazy"
          />
          <img
            src={mobileSlide3}
            alt="Cow Portrait"
            className="w-full h-full cursor-grab md:hidden brightness-100"
          />
          <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none"></div>
        </SwiperSlide>

        <SwiperSlide className="relative aspect-auto" onClick={() => navigate("/blog/006")}>
          <img
            src={pcSlider2}
            alt="cow Heard Grazing"
            className="w-full h-full cursor-grab hidden md:block brightness-100"
            loading="lazy"
          />
          <img
            src={mobileSlide2}
            alt="Cow Looking"
            className="w-full h-full cursor-grab md:hidden brightness-100"
            loading="lazy"
          />
          <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none"></div>
        </SwiperSlide>
      </Swiper>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
        <div className={`w-3 h-3 md:w-6 md:h-6 rounded-full transition-all ${activeIndex === 0 ? "bg-green-400 border-2 border-white" : "bg-white border-2 border-green-400"}`}></div>
        <div className={`w-3 h-3 md:w-6 md:h-6 rounded-full transition-all ${activeIndex === 1 ? "bg-green-400 border-2 border-white" : "bg-white border-2 border-green-400"}`}></div>
      </div>
    </div>
  );
};

export default ShowcaseSwiper;


