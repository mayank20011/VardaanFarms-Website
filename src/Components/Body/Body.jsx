import React from "react";
import aboutUsImg from "../../img/aboutUsImg.png";
import ProductSwiper from "../ProductSwiper/ProductSwiper";
import team1 from "../../img/team1.jpg";
import homePageBg from "../../img/homepagebg.png";
import testimonial from "../../img/testimonial.png";
import TestimonialSwiper from "../TestimonialSwiper/TestimonialSwiper";
import TestimonialSlide from "../TestimonialSlide/TestimonialSlide";
function Body() {
  return (
    <>
      {/* for about Us */}
      <div className="w-full bg-slate-100 pt-28 md:pt-40">
        {/* This div is sort of container */}
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
          {/* for Slider */}
          <section></section>

          {/* About Us */}
          <section className="flex gap-6 flex-col md:flex-row pb-8">
            {/* for content */}
            <div className="md:w-1/2 flex flex-col gap-8 order-2 md:order-1">
              <span className="text-green-600 text-2xl font-bold">
                _____ About Us
              </span>
              <h1 className="text-5xl font-bold text-black">
                Know About Our Farm And History
              </h1>
              <p className="text-slate-500 text-xl">
                It’s our obligation to take care of our animals, respect our
                people & improve the health of the planet for the future. We
                keep our animals healthy working in harmony with nature Just
                like you don’t want.
              </p>
              {/* for img and para */}
              <div>
                <img src="" alt="" />
                <p className="text-slate-500 text-xl">
                  We keep our animals healthy by working in harmony with nature
                  is like you don’t want your kids or your self to constantly
                  exposed to antibiotics we dont .
                </p>
              </div>
              <button className="py-4 px-8 border-2 border-slate-300 rounded-md text-black w-fit font-bold flex gap-4 items-center hover:scale-90 transition hover:shadow-green-600 hover:shadow-xl">
                <span>Read More</span>
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/dotty/80/right.png"
                  alt="right"
                />
              </button>
            </div>

            {/* for image */}
            <div className="md:w-1/2 flex justify-center md:flex-row-reverse order-1 md:order-2">
              <img src={aboutUsImg} alt="AboutUsImg" className="h-auto" />
            </div>
          </section>
        </div>
      </div>

      {/* For Services */}
      <div className="bg-white py-8">
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
          {/* Services */}
          <section className="flex flex-col gap-12 py-8">
            <span className="text-green-600 text-2xl font-bold text-center">
              ____ Services ____
            </span>
            <h1 className="text-5xl text-center text-black font-bold pb-6">
              What We Offer
            </h1>

            {/* for cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full justify-evenly gap-12 ">
              {/* for milk */}
              <div className="bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto z-0">
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/matisse/100/milk.png"
                  alt="milk"
                  className="absolute -top-[50px] left-0 cursor-pointer hover:scale-90 transition z-0"
                />
                <h1 className="text-2xl font-bold pt-6">Milk</h1>
                <p className="text-slate-400 font-bold">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                  eveniet voluptas voluptate dolor magnam neque! Ipsa illo
                  dolorem illum nisi, iure provident accusantium quod quo vero
                  impedit consectetur, voluptates distinctio.
                </p>
              </div>

              {/* for panner */}
              <div className="bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto">
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/plasticine/100/silken-tofu.png"
                  alt="silken-tofu"
                  className="absolute -top-[50px] left-0 cursor-pointer hover:scale-90 transition"
                />
                <h1 className="text-2xl font-bold pt-6">Paneer</h1>
                <p className="text-slate-400 font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  commodi amet harum molestiae, natus assumenda, omnis
                  voluptatem, est eius repudiandae placeat sit sunt? Eum
                  incidunt nobis sunt quibusdam temporibus quas.
                </p>
              </div>

              {/* for Curd */}
              <div className="bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto">
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/stickers/100/yogurt.png"
                  alt="yogurt"
                  className="absolute -top-[50px] left-0 cursor-pointer hover:scale-90 transition"
                />
                <h1 className="text-2xl font-bold pt-6">Curd</h1>
                <p className="text-slate-400 font-bold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis atque reprehenderit tempore dolor maxime quisquam
                  iusto et? Quis quasi, aspernatur explicabo repudiandae odio
                  illum consectetur itaque delectus ipsam! Reiciendis, corporis.
                </p>
              </div>

              {/* for Ghee */}
              <div className="bg-slate-100 px-4 py-6 flex flex-col gap-4 text-black rounded-md relative w-[300px] mx-auto md:w-auto ">
                <img
                  width="100"
                  height="100"
                  src="https://img.icons8.com/dotty/80/jam.png"
                  alt="jam"
                  className="absolute -top-[50px] left-0 cursor-pointer hover:scale-90 transition"
                />
                <h1 className="text-2xl font-bold pt-6">Ghee</h1>
                <p className="text-slate-400 font-bold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae atque, aspernatur, hic quod distinctio facere
                  tempora nemo in voluptatum odit aperiam quis? Suscipit,
                  nesciunt perferendis illum aut tempora facilis modi.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* for a photo */}
      <div className="py-12 md:py-24 bg-my-background bg-cover bg-center box-shadow-lg filter brightness-60">
        <section className="w-full flex flex-col gap-12">
          <span className="text-green-600 text-center text-2xl font-bold">
            ___ Orgainc Dairy Services ___
          </span>
          <h1 className="text-5xl text-center font-bold text-white md:w-4/5 mx-auto">
            Delivering organic integrity to everyone, everywhere.
          </h1>
          <button className="mx-auto w-fit px-8 py-4 border-2 rounded-md hover:scale-90 transition hover:shadow-xl hover:shadow-white">
            Contact Us
          </button>
        </section>
      </div>

      {/* for products */}
      <div className="bg-white pb-12 overflow-x-hidden">
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  nihil accusantium iusto quos atque modi, corporis qui
                  consequuntur. Id asperiores impedit, labore velit modi aperiam
                  facere similique eius laboriosam exercitationem. Saepe
                  recusandae, architecto repellat laboriosam, aut tempore veniam
                  quo ipsum dolore quidem, debitis nulla itaque ratione
                  voluptatem sunt eveniet distinctio.
                </p>
                <div className="grow flex justify-center md:justify-start md:items-end">
                  <button className="px-6 py-4 border-2 rounded-md text-neutral-500 shadow-md font-bold">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Teams */}
      <div className="bg-slate-100 py-12 pb-24">
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
                <img src={team1} alt="" className="rounded-xl" />
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
                <img src={team1} alt="" className="rounded-xl" />
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
                <img src={team1} alt="" className="rounded-xl" />
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
                <img src={team1} alt="" className="rounded-xl" />
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
      </div>

      <div className="bg-white">
        <div className=" max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-24 mx-auto flex justify-center items-center flex-col gap-8 text-black">
          <div className="flex gap-12 flex-col xl:flex-row w-full">
            {/* for Photo */}
            <div className="xl:w-1/2">
              <img src={testimonial} alt="Testimonial" />
            </div>

            {/* for text and swiper*/}
            <div className="flex flex-col gap-8 w-full xl:w-1/2 lg:items-start ">
              <span className="text-green-600 text-2xl font-bold ">
                ___ Review
              </span>
              <h1 className="text-5xl font-bold">What Client's Say</h1>
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
      </div>
    </>
  );
}

export default Body;
