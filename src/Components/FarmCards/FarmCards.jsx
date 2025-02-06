import React from "react";

function FarmCards({img, name, info}) {
  return (
    <div className="bg-white rounded-xl shadow-2xl hover:translate-y-[-20px] transition duration-300 ease-in-out flex flex-col gap-6">
      {/* img */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={img}
          alt=""
          className="rounded-xl w-full shadow-sm shadow-black transition hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* text */}
      <div className="pb-10 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-black text-center">
          {name}
        </h1>
        <p className="font-bold text-neutral-400 text-center">{info}</p>
      </div>
    </div>
  );
}

export default FarmCards;
