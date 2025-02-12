import React from "react";
import ProductSwiper from "../ProductSwiper/ProductSwiper";
import TestimonialSwiper from "../TestimonialSwiper/TestimonialSwiper";
import TestimonialSlide from "../TestimonialSlide/TestimonialSlide";
import ShowcaseSwiper from "../showcaseSwiper/ShowcaseSwiper";
import { Link } from "react-router-dom";
import farmer1 from "../../img/farmer1.jpeg";
import farmer2 from "../../img/farmer2.jpg";
import farmer3 from "../../img/farmer3.jpg";
import farmer5 from "../../img/farmer5.jpg";
import FarmCards from "../FarmCards/FarmCards";
import clientCow2 from "../../img/clientCow2.jpg";
import gfoFarm from "../../img/gfoFarm.png";
import AllProductSwiper from "../AllProductSwiper/AllProductSwiper";
const Body = ({ totalPaddingToGive }) => {
  return (
    <>
      <section
        className="w-full bg-slate-100"
        style={
          window.innerWidth > 768
            ? { paddingTop: `${totalPaddingToGive}px` }
            : {}
        }
      >
        <ShowcaseSwiper />
      </section>

      <section className="w-full bg-slate-100 pt-12 md:pt-16 overflow-hidden pb-16">
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
          <section className="flex gap-12 flex-col md:flex-row tab:flex-col">
            <div className="md:w-1/2 flex flex-col gap-8 order-2 md:order-1 tab:w-full">
              <span className="text-green-600 text-2xl font-bold" id="aboutUs">
                About Us
              </span>
              <h1
                className="text-4xl md:text-5xl font-bold text-black"
                id="knowAbout"
              >
                Know About Our Farm And History
              </h1>
              <p className="text-slate-500 text-xl" id="aboutUsP">
                Located in the heart of the countryside, VardaanFarms blends
                tradition and modernity seamlessly. Our farm is home to a
                variety of cows and buffaloes. We believe in sustainable farming
                that protects the environment and ensures animal well-being. Our
                livestock roams freely, providing the purest milk straight from
                our farm to your home.
                <br />
                VardaanFarms was founded in 2024, starting as a small family-run
                operation we've grown while keeping our core principles and
                quality intact. Our journey of love, hard work, and progress has
                made us a trusted name in the dairy industry.
              </p>
            </div>

            <div
              className="md:w-1/2 md:h-[400px] flex justify-center md:flex-row-reverse order-1 md:order-2 spacing-6 rounded-xl shadow-sm shadow-black tab:w-full"
              style={{ border: "10px solid white" }}
            >
              <img
                src={gfoFarm}
                alt="cow Image"
                className="w-full rounded-xl filter brightness-75"
                id="sinceImg"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
          <section className="flex flex-col gap-12 py-8">
            <span
              className="text-green-600 text-2xl font-bold text-center"
              id="serviceSpan"
            >
              Services
            </span>
            <h1
              className="text-5xl text-center text-black font-bold pb-6"
              id="whatWeOffer"
            >
              What We Offer
            </h1>

            <div className="grid md:grid-cols-2 2xl:grid-cols-4 w-full justify-evenly gap-12 2xl:gap-6">
              <div
                className="bmd:w-full bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] md:w-fit mx-auto  z-0 shadow-lg"
                id="milk"
              >
                <img
                  width="80"
                  height="80"
                  src="https://img.icons8.com/?size=100&id=3tKbNQIe_DGA&format=png&color=000000"
                  alt="milk Icon"
                  className="absolute -top-[40px] left-0 cursor-pointer hover:scale-90 transition z-0"
                  loading="lazy"
                />
                <h1 className="text-2xl font-bold pt-6">Milk</h1>
                <p className="text-slate-400 font-bold">
                  Enjoy the tasty milk from VardaanFarms, straight from our
                  happy cows. Perfect for tea, coffee, or homemade dishes. Full
                  of nutrients and healthy for your family.
                </p>
              </div>

              <div
                className="bmd:w-full bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto shadow-lg"
                id="paneer"
              >
                <img
                  width="80"
                  height="80"
                  src="https://img.icons8.com/?size=100&id=KlRkVThu4Uim&format=png&color=000000"
                  alt="panner Icon"
                  className="absolute -top-[40px] left-1 cursor-pointer hover:scale-90 transition"
                  loading="lazy"
                />
                <h1 className="text-2xl font-bold pt-6">Paneer</h1>
                <p className="text-slate-400 font-bold">
                  Enjoy our soft and creamy paneer made from the best milk.
                  Great for curries, snacks, parathas, and pakoras. A family
                  favorite and full of protein.
                </p>
              </div>

              <div
                className="bmd:w-full bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto shadow-lg"
                id="curd"
              >
                <img
                  width="80"
                  height="80"
                  src="https://img.icons8.com/?size=100&id=QQlW3jD4qmhv&format=png&color=000000"
                  alt="Curd Icon"
                  className="absolute -top-[40px] left-1 cursor-pointer hover:scale-90 transition"
                  loading="lazy"
                />
                <h1 className="text-2xl font-bold pt-6">Curd</h1>
                <p className="text-slate-400 font-bold">
                  Enjoy the tangy flavor of VardaanFarms' curd, made from fresh
                  milk. Great for meals, adding smooth texture and healthy
                  probiotics. Use it for raita, kadhi, or lassi
                </p>
              </div>

              <div
                className="bmd:w-full bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto shadow-lg"
                id="ghee"
              >
                <img
                  width="80"
                  height="80"
                  src="https://img.icons8.com/dotty/80/jam.png"
                  alt="Ghee Jar Icon"
                  className="absolute -top-[40px] left-0 cursor-pointer hover:scale-90 transition"
                  loading="lazy"
                />
                <h1 className="text-2xl font-bold pt-6">Ghee</h1>
                <p className="text-slate-400 font-bold">
                  Enjoy the rich taste of our pure ghee, made from top-quality
                  milk. Perfect for cooking, baking, or adding a delicious touch
                  to your dishes like dal, rotis, halwa, and ladoos.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-my-background bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-50"></div>
        <section className="w-full flex flex-col gap-12 relative z-10 px-4">
          <span
            className="text-green-600 text-center text-2xl font-bold"
            id="organicDairyServices"
            style={{ filter: "drop-shadow(2px 2px 1px white)" }}
          >
            Organic Dairy Services
          </span>
          <h1
            className="text-5xl text-center font-bold text-white md:w-4/5 mx-auto vs:text-2xl"
            id="organicDairyServicesH"
          >
            Delivering organic integrity to everyone, everywhere.
          </h1>
          <Link
            id="organicDairyServicesB"
            className="mx-auto w-fit px-8 py-4 border-2 rounded-md hover:scale-90 transition hover:shadow-xl hover:shadow-white"
            to={"/contactUs"}
          >
            Contact Us
          </Link>
        </section>
      </section>

      {/* For new swiper */}
      <section className="bg-white pb-12 overflow-x-hidden">
        <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-10 mx-auto flex flex-col gap-6 md:gap-8">
          
          {/* heading */}
          <h1 className="text-green-600 text-center text-2xl font-bold">
            Shop
          </h1>

          {/* heading-2 */}
          <h1 className="text-center text-black text-5xl font-bold">
            Our Products
          </h1>

          {/* sipper */}
          <AllProductSwiper/>

        </div>
      </section>

      <section className="bg-slate-100 py-12 pb-24">
        <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-10 mx-auto flex justify-center items-center flex-col gap-8">
          <span className="text-green-600 text-2xl font-bold text-center">
            Team
          </span>
          <h1 className="text-5xl font-bold text-black">Our Farmers</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
            {/* card-1 */}
            <FarmCards
              img={farmer1}
              name={"Ramkishan Verma"}
              info={"Caretaker"}
            />
            <FarmCards img={farmer2} name={"Raju Kashyap"} info={"Milkman"} />
            <FarmCards img={farmer3} name={"Summitra Devi"} info={"Milkmaid"} />
            <FarmCards
              img={farmer5}
              name={"Narayan Singh"}
              info={"Caretaker"}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className=" max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-24 mx-auto flex justify-center items-center flex-col gap-8 text-black">
          <div className="flex gap-12 flex-col md:flex-row w-full tab:flex-col">
            <div className="md:w-1/2 rounded-lg tab:w-full">
              <img
                src={clientCow2}
                alt="cows Grazing"
                loading="lazy"
                className="rounded-lg shadow-lg shadow-black"
                style={{ border: "10px solid white" }}
              />
            </div>

            <div className="flex flex-col gap-8 w-full md:w-1/2 lg:items-start tab:w-full">
              <span className="text-green-600 text-2xl font-bold ">Review</span>
              <h1 className="text-4xl sm:text-5xl font-bold">
                What Client's Say
              </h1>
              <div className="border-red-600 flex justify-start w-full">
                <TestimonialSwiper />
              </div>
            </div>
          </div>

          {/* <div>
            <TestimonialSlide />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Body;






// <section className="bg-white pb-12 overflow-x-hidden">
// <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-10 mx-auto flex justify-center items-center flex-col gap-8 ">
//   <div className="xl:4/5 mx-auto flex flex-col justify-center items-center gap-8 ">
//     <span className="text-2xl font-bold text-green-600">Shop</span>
//     <h1 className="text-5xl font-bold text-black">Our Products</h1>

//     <div className="flex w-full xl:gap-24 justify-between lg:gap-12 flex-col md:flex-row gap-12">
//       {/* For productSwiper */}
//       <div className="flex lg:px-12">
//         <ProductSwiper />
//       </div>
//       {/* Text */}
//       <div className="w-full text-center md:text-left md:w-1/2 lg:w-3/4 text-black flex flex-col gap-4">
//         <h1 className="text-3xl font-bold text-neutral-600">
//           We Offer daily Labtested Products
//         </h1>
//         <p className="text-xl">
//           At VardaanFarms, we ensure that every product you receive is
//           lab-tested daily for quality and purity. Our commitment is to
//           deliver fresh, nutritious, and safe dairy products to your
//           family.
//           <br />
//           From milk to ghee, each item undergoes rigorous testing to
//           meet our high standards. Enjoy the confidence of knowing that
//           VardaanFarms’ dairy products are of the highest quality, made
//           with care and dedication.
//         </p>
//         <div className="grow flex justify-center md:justify-start md:items-end">
//           <Link
//             to={"/products"}
//             className="px-6 py-4 border-2 rounded-md text-neutral-500 shadow-md font-bold"
//           >
//             Explore More
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </section>