import React from "react";
const Product = ({
  name,
  info,
  img,
  description,
  availability,
  bgColor,
  colorSide,
  descriptionColor,
  availabilityColor,
  totalPaddingToGive,
}) => {
  return (
    <>
      <div
        className="justify-center items-center relative bg-white text-black flex-col lg:flex-row pb-6 lg:pb-0 hidden lg:flex snap-start"
        style={{ minHeight: `calc(100vh - ${totalPaddingToGive}px)` }}
      >
        <div
          className={`lg:w-1/2 flex justify-center items-center w-11/12 mx-auto cs:justify-start border-2`}
          style={{
            background: colorSide === "left" ? bgColor : null,
            minHeight: `calc(100vh - ${totalPaddingToGive}px)`,
          }}
        >
          <div className="lg:w-fit lg:pr-12">
            <h1 className="capitalize font-bold text text-5xl py-6 border-b-2 text-center lg:text-left cs:text-2xl cs:text-left cs:border-b-0">
              {name}
            </h1>
            <p className="text-7xl font-bold py-6 border-b-2 text-center lg:text-left cs:py-0 cs:border-b-0 cs:text-left">
              100 %{" "}
            </p>
            <p className="text-2xl font-bold py-6 text-center lg:text-left">
              {info}
            </p>
          </div>
        </div>

        <img
          src={img}
          alt={name}
          className="lg:absolute w-72 hover:scale-105 transition"
          style={{ filter: "drop-shadow(0 16px 22px rgba(0, 0, 0))" }}
          loading="lazy"
        />

        <div
          className="lg:w-1/2 flex justify-center items-center w-11/12 mx-auto p-4 mt-6 lg:mt-0 px-8 py-12"
          style={{
            background: colorSide === "right" ? bgColor : null,
            minHeight: `calc(100vh - ${totalPaddingToGive}px)`,
          }}
        >
          <div className="lg:w-[600px] lg:pl-48">
            <p
              className="text-xl cs:text-sm cs:font-bold text-neutral-600 font-bold"
              style={{ color: descriptionColor }}
            >
              {description}
            </p>
            <p
              className="text-2xl font-bold py-4 text-neutral-600"
              style={{ color: availabilityColor }}
            >
              {availability}
            </p>
          </div>
        </div>
      </div>

      <div className={`block lg:hidden bg-white pb-6`}>
        <div className="bg-slate-100 rounded-md mx-auto w-4/5 sm:w-3/4 py-12 items-center shadow-lg shadow-black flex lg:hidden flex-col md:flex-row space-y-6 sm:space-y-0">
          <div className="flex items-center md:-translate-x-[50px]">
            <img
              src={img}
              alt=""
              className="w-3/4 mx-auto md:w-72"
              style={{ filter: "drop-shadow(5px 5px 10px black)" }}
              loading="lazy"
            />
          </div>

          <div className="text-black cs:space-y-2 space-y-6 px-6">
            <p className="text-4xl font-bold cs:text-xl">{name}</p>
            <p className="text-xl cs:text-lg">{info}</p>
            <p className="font-bold text-slate-500">{description}</p>
            <p className="font-bold text-slate-500">{availability}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
