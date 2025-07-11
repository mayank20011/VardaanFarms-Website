import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export default function ProductSwiper({ images }) {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        className="mySwiper cursor-grab"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {images.map((imgurl, index) => (
          <SwiperSlide key={imgurl}>
            <img
              src={imgurl}
              alt="product img"
              loading={`${index == 0 ? "eager" : "lazy"}`}
              className={`aspect-square`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
