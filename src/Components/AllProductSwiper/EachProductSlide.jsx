import React from "react";
import { Link } from "react-router-dom";
const EachProductSlide = ({img, heading, pera, link, bgColor, fontColor}) => {
  return (
    <div className="w-full h-full rounded-md sm:px-4 md:px-6 lg:px-8 px-2 py-4 flex flex-col gap-2 shadow-md" style={{backgroundColor:`${bgColor}`}}>
      <div className="grow flex items-center justify-center">
        <img src={img} alt="Product Image" className="w-52 select-none" style={{filter:"drop-shadow(2px 2px 2px black)"}}/>
      </div>
      <div className="flex flex-col gap-2 text-black">
        <h1 className="text-white font-bold text-xl" style={{color:`${fontColor}`}}>{heading}</h1>
        <p style={{color:`white`}}>
          {pera}
        </p>
        <Link className="bg-transparent border-2 text-white font-bold  px-4 py-2 flex justify-center items-center w-fit rounded-md hover:scale-95 transition hover:shadow-slate-100 hover:shadow-md text-sm" to={`${link}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default EachProductSlide;
