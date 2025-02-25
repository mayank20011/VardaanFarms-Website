import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EachProductSlide = ({
  img,
  heading,
  pera,
  link,
  bgColor,
  fontColor,
  setReturnPage,
}) => {
  const navigate = useNavigate();

  function redirectPage() {
    navigate(link);
  }

  return (
    <div
      className="w-full h-full rounded-2xl sm:px-4 md:px-6 lg:px-8 px-2 py-4 flex flex-col gap-2 shadow-md md:shadow-xl"
      style={{ backgroundColor: `${bgColor}` }}
      onClick={redirectPage}
    >
      <div className="grow flex items-center justify-center">
        <img
          src={img}
          alt="Product Image"
          className="select-none"
          style={{
            filter: "drop-shadow(5px 5px 5px black)",
            width: "210px",
            height: "210px",
          }}
        />
      </div>
      <div className="flex flex-col gap-2 text-black vs:px-4 px-2">
        <h1
          className="text-white font-bold text-xl"
          style={{ color: `${fontColor}` }}
        >
          {heading}
        </h1>
        <p style={{ color: `white` }}>{pera}</p>
        <Link
          className="bg-transparent border-2 text-white font-bold  px-4 py-2 flex justify-center items-center w-fit rounded-md hover:scale-95 transition hover:shadow-slate-100 hover:shadow-md text-sm"
          to={`${link}`}
          onClick={() => {
            setReturnPage("Home");
          }}
          aria-label={`read more about ${heading}`}
        >
          Read More
          <span className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden border-0"> about {heading}</span>
        </Link>
      </div>
    </div>
  );
};

export default EachProductSlide;
