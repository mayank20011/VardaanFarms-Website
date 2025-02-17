import React from "react";

const FarmCards = ({ img, name, info }) => {
  return (
    <div className="bg-white rounded-xl shadow-2xl hover:translate-y-[-20px] transition duration-300 ease-in-out flex flex-col gap-6">
      <div className="rounded-xl overflow-hidden">
        <div className="aspect-[16/9]">
          <img
            src={img}
            alt={`${name}'s image`}
            className="rounded-xl w-full shadow-sm shadow-black transition hover:scale-105 h-auto"
            loading="lazy"
            style={{ width: "100%", height: "fit" }}
          />
        </div>
      </div>

      <div className="pb-10 flex flex-col gap-4">
        <h1 className="text-2xl lg:text-xl xl:text-2xl font-bold text-black text-center">
          {name}
        </h1>
        <p className="font-bold text-black text-center">{info}</p>
      </div>
    </div>
  );
};

export default FarmCards;
