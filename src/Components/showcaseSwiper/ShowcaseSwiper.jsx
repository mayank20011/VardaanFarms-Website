import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar, Autoplay } from "swiper/modules";
// import gfoBg from "../../img/gfoBg.jpeg"
// import gfoBg2 from "../../img/gfoBg2.jpg";
// import gfoBg3 from "../../img/gfoBg3.jpg";

import img1 from "../../img/homeSwipper1.svg";
import img2 from "../../img/homeSwipper2.svg";
import img3 from "../../img/homeSwipper3.svg";
function ShowcaseSwiper() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{ delay: "3000" }}
        modules={[Scrollbar, Autoplay]}
        // className="w-full cs:h-[500px] h-[700px]"
        className="w-full h-auto"
      >
        <SwiperSlide>
          <img src={img1} alt="" className="w-full h-full cursor-grab" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" className="w-full h-full cursor-grab" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={img3} alt="" className="w-full h-full cursor-grab" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default ShowcaseSwiper;
