import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";
import gfoBg from "../../img/gfoBg.jpeg"
import gfoBg2 from "../../img/gfoBg2.jpg";
import gfoBg3 from "../../img/gfoBg3.jpg";

function ShowcaseSwiper() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{ delay: "3000" }}
        modules={[Scrollbar, Autoplay]}
        className="w-full cs:h-[500px] h-[700px]"
      >
        <SwiperSlide>
          <img src={gfoBg2} alt="" className="w-full h-full cursor-grab" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={gfoBg3} alt="" className="w-full h-full cursor-grab" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={gfoBg} alt="" className="w-full h-full cursor-grab" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ShowcaseSwiper;
