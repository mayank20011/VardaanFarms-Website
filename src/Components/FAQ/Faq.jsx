import React, { useState } from "react";

const Faq = ({data}) => {

  const [indexId, setIndexId] = useState(null);

  function openClose(index) {
    setIndexId(index === indexId ? null : index);
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full select-none">
      <h1 className="text-3xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-xl text-center">
        Everything You Need to Know About Our Fresh & Organic Dairy
      </p>
      {data.map((obj, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 bg-white w-full p-6 rounded-lg cursor-pointer shadow-lg"
          onClick={() => {
            openClose(index);
          }}
        >
          <div className="flex gap-4 text-xl items-center text-black">
            <span
              className="cursor-pointer select-none border-2 px-2 border-black"
            >
              {index === indexId ? "-" : "+"}
            </span>
            <h1 className="text-black">{obj.q}</h1>
          </div>
          <p
            className={`overflow-hidden w-full md:w-4/5 transition-all duration-300 text-slate-600 ${
              index === indexId ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            {obj.ans}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
