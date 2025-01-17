import React from "react";
import aboutUsImg from "../../img/aboutUsImg.png";

function Body() {
  return (
    <div className="w-full h-[1500px] bg-slate-100 pt-28 md:pt-40">

      {/* This div is sort of container */}
      <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
        {/* for Slider */}
        <section></section>

        {/* About Us */}
        <section className="flex gap-6 flex-col md:flex-row">
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
              people & improve the health of the planet for the future. We keep
              our animals healthy working in harmony with nature Just like you
              don’t want.
            </p>
            {/* for img and para */}
            <div>
              <img src="" alt="" />
              <p className="text-slate-500 text-xl">
                We keep our animals healthy by working in harmony with nature is
                like you don’t want your kids or your self to constantly exposed
                to antibiotics we dont .
              </p>
            </div>
            <button className="py-4 px-8 border-2 border-slate-300 rounded-md text-black w-fit font-bold flex gap-4 items-center hover:scale-90 transition hover:shadow-green-600 hover:shadow-xl">
              <span>Read More</span>
              <img width="30" height="30" src="https://img.icons8.com/dotty/80/right.png" alt="right"/>
            </button>
          </div>

          {/* for image */}
          <div className="md:w-1/2 flex justify-center md:flex-row-reverse order-1 md:order-2">
          <img src={aboutUsImg} alt="AboutUsImg" className="h-auto"/></div>
        </section>

      </div>
    </div>
  );
}

export default Body;
