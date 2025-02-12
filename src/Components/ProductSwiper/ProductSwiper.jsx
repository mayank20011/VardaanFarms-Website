import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-cards";

import "./swiper.css";

import { EffectCards, Autoplay } from "swiper/modules";

import DTM from "../../img/DTM2.png";
import cowGhee from "../../img/a2CowGhee.png";
import buffaloGhee from "../../img/buffaloGhee.png";
import Paneer from "../../img/paneer.png";
import Curd from "../../img/curd.png";

const ProductSwiper = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay]}
        autoplay={{ delay: 5000 }} 
        className={`w-[267px] h-[400px]`}
      >
        <SwiperSlide className={`px-4 py-6 shadow-2xl shadow-black flex flex-col items-center justify-center rounded-lg text-xl font-bold`}>
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex justify-center items-center p-4">
              <img src={DTM} alt="Vardaan's Double Toned Milk" className="w-44 hover:rotate-6 transition" loading="lazy"/>
            </div>
            <div className="grow-1 flex flex-col gap-2">
              <h1 className="">Double Toned</h1>
              <p className="text-sm">Light and nutritious, perfect for everyday health and wellness.</p>
              <Link to={"/products"} className="w-fit text-sm px-6 py-2 border-2 rounded-md hover:scale-90 transition  font-bold hover:shadow-lg">See More</Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-4 py-6 shadow-2xl shadow-black flex flex-col items-center justify-center rounded-lg text-xl font-bold">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex justify-center items-center p-4">
              <img src={Curd} alt="Vardaan's Curd" className="w-44 hover:rotate-6 transition" loading="lazy"/>
            </div>
            <div className="grow-1 flex flex-col gap-2">
              <h1 className="">Curd</h1>
              <p className="text-sm">Creamy and tangy, our dahi is a must for every meal.</p>
              <Link to={"/products"} className="w-fit text-sm px-6 py-2 border-2 rounded-md hover:scale-90 transition  font-bold hover:shadow-lg">See More</Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-4 py-6 shadow-2xl shadow-black flex flex-col items-center justify-center rounded-lg text-xl font-bold">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex justify-center items-center p-4">
              <img src={cowGhee} alt="vardaan's Cow Ghee" className="w-32 hover:rotate-6 transition" loading="lazy"/>
            </div>
            <div className="grow-1 flex flex-col gap-2">
              <h1 className="">Cow Ghee</h1>
              <p className="text-sm">Pure desi ghee, rich in flavor and tradition.</p>
              <Link to={"/products"} className="w-fit text-sm px-6 py-2 border-2 rounded-md hover:scale-90 transition font-bold hover:shadow-lg hover:shadow-yellow-300 bg-yellow-300">See More</Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-4 py-6 shadow-2xl shadow-black flex flex-col items-center justify-center rounded-lg text-xl font-bold">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex justify-center items-center p-4">
              <img src={buffaloGhee} alt="vardaan's Buffalo Ghee" className="w-32 hover:rotate-6 transition" loading="lazy"/>
            </div>
            <div className="grow-1 flex flex-col gap-2">
              <h1 className="">Buffalo Ghee</h1>
              <p className="text-sm">Rich and aromatic, ideal for enhancing your dishes.</p>
              <Link to={"/products"} className="w-fit text-sm px-6 py-2 border-2 rounded-md hover:scale-90 transition  font-bold hover:shadow-lg border-slate-100">See More</Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="px-4 py-6 shadow-2xl shadow-black flex flex-col items-center justify-center rounded-lg text-xl font-bold">
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex justify-center items-center p-4">
              <img src={Paneer} alt="vardaan's Paneer" className="w-28 hover:rotate-6 transition" loading="lazy"/>
            </div>
            <div className="grow-1 flex flex-col gap-2">
              <h1 className="">Paneer</h1>
              <p className="text-sm">Soft and creamy paneer for all your favorite recipes.</p>
              <Link to={"/products"} className="w-fit text-sm px-6 py-2 border-2 rounded-md hover:scale-90 transition  font-bold hover:shadow-lg">See More</Link>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}

export default ProductSwiper;
