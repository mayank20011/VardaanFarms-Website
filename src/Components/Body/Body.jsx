import React from "react";
import aboutUsImg from "../../img/aboutUsImg.png";
import ProductSwiper from "../ProductSwiper/ProductSwiper";
import team1 from "../../img/team1.jpg";
import testimonial from "../../img/testimonial.png";
import TestimonialSwiper from "../TestimonialSwiper/TestimonialSwiper";
import TestimonialSlide from "../TestimonialSlide/TestimonialSlide";
import Footer from "../Footer/Footer";
import ShowcaseSwiper from "../showcaseSwiper/ShowcaseSwiper";
import { Link } from "react-router-dom";
import aboutUsHome from "../../img/aboutUsHome.png";

function Body({ totalPaddingToGive }) {
  return (
    <>
      {/* For Slider */}
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

      {/* for about Us */}
      <section className="w-full bg-slate-100 pt-28 md:pt-40 overflow-hidden pb-28">
        {/* This div is sort of container */}
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
          {/* About Us */}
          <section className="flex gap-12 flex-col md:flex-row">
            {/* for content */}
            <div className="md:w-1/2 flex flex-col gap-8 order-2 md:order-1">
              <span className="text-green-600 text-2xl font-bold" id="aboutUs">
                _____ About Us
              </span>
              <h1 className="text-5xl font-bold text-black" id="knowAbout">
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
                VardaanFarms was founded in 2014 by [Founder's Name]. Starting
                as a small family-run operation, we've grown while keeping our
                core principles and quality intact. Our journey of love, hard
                work, and progress has made us a trusted name in the dairy
                industry.
              </p>
            </div>

            {/* for image */}
            <div
              className="md:w-1/2 md:h-[400px] flex justify-center md:flex-row-reverse order-1 md:order-2 spacing-6 rounded-xl shadow-sm shadow-black"
              style={{ border: "10px solid white" }}
            >
              <img
                src={aboutUsHome}
                alt="AboutUsImg"
                className="w-full rounded-xl filter brightness-75"
                id="sinceImg"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </section>

      {/* For Services */}
      <section className="bg-white py-8">
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
          {/* Services */}
          <section className="flex flex-col gap-12 py-8">
            <span
              className="text-green-600 text-2xl font-bold text-center"
              id="serviceSpan"
            >
              ____ Services ____
            </span>
            <h1
              className="text-5xl text-center text-black font-bold pb-6"
              id="whatWeOffer"
            >
              What We Offer
            </h1>

            {/* for cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full justify-evenly gap-12 ">
              {/* for milk */}
              <div
                className="bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto z-0"
                id="milk"
              >
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/matisse/100/milk.png"
                  alt="milk"
                  className="absolute -top-[50px] left-0 cursor-pointer hover:scale-90 transition z-0"
                  loading="lazy"
                />
                <h1 className="text-2xl font-bold pt-6">Milk</h1>
                <p className="text-slate-400 font-bold">
                  Enjoy the tasty milk from VardaanFarms, straight from our
                  happy cows. Perfect for tea, coffee, or homemade dishes. Full
                  of nutrients and healthy for your family.
                </p>
              </div>

              {/* for panner */}
              <div
                className="bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto"
                id="paneer"
              >
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/plasticine/100/silken-tofu.png"
                  alt="silken-tofu"
                  className="absolute -top-[50px] left-0 cursor-pointer hover:scale-90 transition"
                  loading="lazy"
                />
                <h1 className="text-2xl font-bold pt-6">Paneer</h1>
                <p className="text-slate-400 font-bold">
                  Enjoy our soft and creamy paneer made from the best milk.
                  Great for curries, snacks, parathas, and pakoras. A family
                  favorite and full of protein.
                </p>
              </div>

              {/* for Curd */}
              <div
                className="bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto"
                id="curd"
              >
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/stickers/100/yogurt.png"
                  alt="yogurt"
                  className="absolute -top-[50px] left-0 cursor-pointer hover:scale-90 transition"
                  loading="lazy"
                />
                <h1 className="text-2xl font-bold pt-6">Curd</h1>
                <p className="text-slate-400 font-bold">
                  Enjoy the tangy flavor of VardaanFarms' curd, made from fresh
                  milk. Great for meals, adding smooth texture and healthy
                  probiotics. Use it for raita, kadhi, or lassi
                </p>
              </div>

              {/* for Ghee */}
              <div
                className="bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto "
                id="ghee"
              >
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/dotty/80/jam.png"
                  alt="jam"
                  className="absolute -top-[50px] left-0 cursor-pointer hover:scale-90 transition"
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

      {/* for a photo */}
      <section className="py-12 md:py-24 bg-my-background bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-50"></div>
        <section className="w-full flex flex-col gap-12 relative z-10 px-4">
          <span
            className="text-green-600 text-center text-2xl font-bold"
            id="organicDairyServices"
            style={{filter:"drop-shadow(2px 2px 1px white)"}}
          >
            ___ Organic Dairy Services ___
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

      {/* for products */}
      <section className="bg-white pb-12 overflow-x-hidden">
        <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-10 mx-auto flex justify-center items-center flex-col gap-8 ">
          <div className="xl:4/5 mx-auto flex flex-col justify-center items-center gap-8 ">
            <span className="text-2xl font-bold text-green-600">
              ___ Shop ___
            </span>
            <h1 className="text-5xl font-bold text-black">Our Products</h1>

            <div className="flex w-full xl:gap-24 justify-between lg:gap-12 flex-col md:flex-row gap-12">
              {/* For productSwiper */}
              <div className="flex lg:px-12">
                <ProductSwiper />
              </div>
              {/* Text */}
              <div className="w-full text-center md:text-left md:w-1/2 lg:w-3/4 text-black flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-neutral-600">
                  We Offer daily Labtested Products
                </h1>
                <p className="text-xl">
                  At VardaanFarms, we ensure that every product you receive is
                  lab-tested daily for quality and purity. Our commitment is to
                  deliver fresh, nutritious, and safe dairy products to your
                  family.
                  <br />
                  From milk to ghee, each item undergoes rigorous testing to
                  meet our high standards. Enjoy the confidence of knowing that
                  VardaanFarms’ dairy products are of the highest quality, made
                  with care and dedication.
                </p>
                <div className="grow flex justify-center md:justify-start md:items-end">
                  <Link
                    to={"/products"}
                    className="px-6 py-4 border-2 rounded-md text-neutral-500 shadow-md font-bold"
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="bg-slate-100 py-12 pb-24">
        <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-10 mx-auto flex justify-center items-center flex-col gap-8">
          <span className="text-green-600 text-2xl font-bold text-center">
            ___ Team ___
          </span>
          <h1 className="text-5xl font-bold text-black">Our Farmers</h1>

          {/* For Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
            {/* card-1 */}
            <div className="bg-white rounded-xl shadow-2xl hover:translate-y-[-20px] transition duration-300 ease-in-out">
              {/* img */}
              <div className="rounded-xl">
                <img src={team1} alt="" className="rounded-xl" loading="lazy" />
              </div>

              {/* icons */}
              <div className="flex items-center justify-center w-full relative top-[-25px]">
                <div className="flex gap-4">
                  <i className="fa-brands fa-facebook-f px-5 p-4 bg-slate rounded-full cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:shadow-black bg-green-600 text-white border-2"></i>
                  <i className="fa-brands fa-linkedin-in px-4 p-4 bg-slate rounded-full cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:shadow-black bg-green-600 text-white border-2"></i>
                </div>
              </div>

              {/* text */}
              <div className="pb-10 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-black text-center">
                  Ben Stcoks
                </h1>
                <p className="font-bold text-neutral-400 text-center">
                  Tractor Driver
                </p>
              </div>
            </div>

            {/* card-2 */}
            <div className="bg-white rounded-xl shadow-2xl hover:translate-y-[-20px] transition duration-300 ease-in-out">
              {/* img */}
              <div className="rounded-xl">
                <img src={team1} alt="" className="rounded-xl" loading="lazy" />
              </div>

              {/* icons */}
              <div className="flex items-center justify-center w-full relative top-[-25px]">
                <div className="flex gap-4">
                  <i className="fa-brands fa-facebook-f px-5 p-4 bg-slate rounded-full cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:shadow-black bg-green-600 text-white border-2"></i>
                  <i className="fa-brands fa-linkedin-in px-4 p-4 bg-slate rounded-full cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:shadow-black bg-green-600 text-white border-2"></i>
                </div>
              </div>

              {/* text */}
              <div className="pb-10 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-black text-center">
                  Ben Stcoks
                </h1>
                <p className="font-bold text-neutral-400 text-center">
                  Tractor Driver
                </p>
              </div>
            </div>

            {/* card-3 */}
            <div className="bg-white rounded-xl shadow-2xl hover:translate-y-[-20px] transition duration-300 ease-in-out">
              {/* img */}
              <div className="rounded-xl">
                <img src={team1} alt="" className="rounded-xl" loading="lazy" />
              </div>

              {/* icons */}
              <div className="flex items-center justify-center w-full relative top-[-25px]">
                <div className="flex gap-4">
                  <i className="fa-brands fa-facebook-f px-5 p-4 bg-slate rounded-full cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:shadow-black bg-green-600 text-white border-2"></i>
                  <i className="fa-brands fa-linkedin-in px-4 p-4 bg-slate rounded-full cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:shadow-black bg-green-600 text-white border-2"></i>
                </div>
              </div>

              {/* text */}
              <div className="pb-10 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-black text-center">
                  Ben Stcoks
                </h1>
                <p className="font-bold text-neutral-400 text-center">
                  Tractor Driver
                </p>
              </div>
            </div>

            {/* card-4 */}
            <div className="bg-white rounded-xl shadow-2xl hover:translate-y-[-20px] transition duration-300 ease-in-out">
              {/* img */}
              <div className="rounded-xl">
                <img src={team1} alt="" className="rounded-xl" loading="lazy" />
              </div>

              {/* icons */}
              <div className="flex items-center justify-center w-full relative top-[-25px]">
                <div className="flex gap-4">
                  <i className="fa-brands fa-facebook-f px-5 p-4 bg-slate rounded-full cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:shadow-black bg-green-600 text-white border-2"></i>
                  <i className="fa-brands fa-linkedin-in px-4 p-4 bg-slate rounded-full cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:shadow-black bg-green-600 text-white border-2"></i>
                </div>
              </div>

              {/* text */}
              <div className="pb-10 flex flex-col gap-4">
                <h1 className="text-3xl font-bold text-black text-center">
                  Ben Stcoks
                </h1>
                <p className="font-bold text-neutral-400 text-center">
                  Tractor Driver
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="bg-white">
        <div className=" max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-24 mx-auto flex justify-center items-center flex-col gap-8 text-black">
          {/* for image and text */}
          <div className="flex gap-12 flex-col md:flex-row w-full">
            {/* for Photo */}
            <div className="md:w-1/2">
              <img src={testimonial} alt="Testimonial" loading="lazy" />
            </div>

            {/* for text and swiper*/}
            <div className="flex flex-col gap-8 w-full md:w-1/2 lg:items-start ">
              <span className="text-green-600 text-2xl font-bold ">
                ___ Review
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold">
                What Client's Say
              </h1>
              <div className="border-red-600 flex justify-start w-full">
                <TestimonialSwiper />
              </div>
            </div>
          </div>

          {/* For sliding strip */}
          <div>
            <TestimonialSlide />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Body;
