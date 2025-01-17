import React from "react";
import aboutUsImg from "../../img/aboutUsImg.png";

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
    </>
  );
}

export default Body;
