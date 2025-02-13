// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import EachProductSlide from "./EachProductSlide.jsx";

// importing images
import a2DesiCowMilk from "../../img/a2DesiCowMilk.png";
import fullCream from "../../img/fullCream.png";
import tonedMilk from "../../img/tonedMilk.png";
import doubleTonedMilk from "../../img/DTM2.png";
import naturalCowMilk from "../../img/cowMilk.png";
import buffaloMilk from "../../img/buffaloMilk.png";
import familyPack from "../../img/familyPack.png";
import butterMilk from "../../img/plainChach.png";
import masalaChach from "../../img/masalaChach.png";
import slimCurd from "../../img/dahiLight.png";
import curd from "../../img/curd.png";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 350,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={{
          thresholdDelta: 70,
        }}
        breakpoints={{
          200:{
            slidesPerView:1.3,
          },
          560: {
            slidesPerView: 2.1,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Autoplay, EffectCoverflow]}
        pagination={true}
        autoplay={{ delay: 3000 }}
        className="mySwiper w-full h-[435px]"
        style={{ padding: "0px 0px 35px 0px" }}
      >
        <SwiperSlide className="relative w-[320px]">
          <EachProductSlide
            img={a2DesiCowMilk}
            heading={"A2 Desi Cow Milk"}
            pera={"A2 Desi cow milk is healthy, natural, and easily digestible."}
            link={""}
            bgColor={"#e8b794"}
            fontColor={"white"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachProductSlide
            img={fullCream}
            heading={"Full Cream"}
            pera={"Full cream A2 Desi cow milk is rich, creamy, nutritious."}
            link={""}
            bgColor={"#f9b3b3"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachProductSlide
            img={tonedMilk}
            heading={"Toned Milk"}
            pera={"Light, nutritious, balanced milk, great for daily use."}
            link={""}
            bgColor={"#8cd8d7"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachProductSlide
            img={doubleTonedMilk}
            heading={"Double Toned Milk"}
            pera={"Lighter, low-fat option, healthy, easily digestible for everyone."}
            link={""}
            bgColor={"#a999cf"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachProductSlide
            img={naturalCowMilk}
            heading={"Natural Cow Milk"}
            pera={"Pure, fresh milk, straight from cows, wholesome goodness."}
            link={""}
            bgColor={"#8cbfe0"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachProductSlide
            img={buffaloMilk}
            heading={"Buffalo Milk"}
            pera={"Creamy, rich milk, full of flavor, very nutritious."}
            link={""}
            bgColor={"#6b6972"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachProductSlide
            img={familyPack}
            heading={"Family Pack"}
            pera={"Convenient, larger size, perfect for household needs, budget-friendly."}
            link={""}
            bgColor={"#f28d92"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachProductSlide
            img={butterMilk}
            heading={"Butter Milk"}
            pera={"Light, refreshing drink, aids digestion, loved by all."}
            link={""}
            bgColor={"#6b957c"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachProductSlide
            img={masalaChach}
            heading={"Masala Chach"}
            pera={"Spiced, tangy drink, refreshing, perfect for summer days."}
            link={""}
            bgColor={"#a7d87f"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachProductSlide
            img={slimCurd}
            heading={"Slim Curd"}
            pera={"Low-fat, smooth curd, healthy choice, great taste."}
            link={""}
            bgColor={"#a4d8e3"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <EachProductSlide
            img={curd}
            heading={"Curd"}
            pera={"Creamy, tangy yogurt, probiotic, enhances meals, loved by all."}
            link={""}
            bgColor={"#f49b80"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
