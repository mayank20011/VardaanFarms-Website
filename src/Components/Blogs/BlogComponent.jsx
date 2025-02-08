import React, { useEffect } from "react";
import blogData from "./BlogData.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function BlogComponent({ id, setId, setBlogClicked }) {
  const { id: textId } = useParams();
  const data = blogData.find((obj) => obj._id == id);
  const navigate = useNavigate();
  const [lastDigit, setLastDigit] = useState(data._id[2]);

  function nextBlog() {
    let lastDigit = +id[2];
    if (lastDigit < blogData.length) {
      lastDigit++;
    } else {
      lastDigit = 1;
    }
    const idString = `00${lastDigit}`;
    navigate(`/readFullBlog/${idString}`, { replace: true });
    setId(idString);
    setLastDigit(lastDigit);
    setBlogClicked(lastDigit);
  }

  function prevBlog() {
    let lastDigit = +id[2];
    if (lastDigit == 1) {
      lastDigit = 6;
    } else {
      lastDigit--;
    }
    const idString = `00${lastDigit}`;
    navigate(`/readFullBlog/${idString}`, { replace: true });
    setId(idString);
    setLastDigit(lastDigit);
    setBlogClicked(lastDigit);
  }

  return (
    <div className="w-full h-full flex flex-col gap-6 vs:gap-4">
      <img
        src={data.data.img}
        alt="blog-1"
        className="w-full border-4 border-white rounded-lg"
        loading="lazy"
      />
      <div className="flex flex-col gap-6 p-8 vs:gap-4 vs:p-4">
        <div className="flex gap-8">
          {/* for date */}
          <div className="flex  items-center gap-2">
            <i className="fa-solid fa-clock"></i>
            <p className="text-green-600 font-bold">{data.data.date}</p>
          </div>

          {/* for admin */}
          <div className="flex  items-center gap-2">
            <i className="fa-solid fa-user"></i>
            <p className="text-green-600 font-bold">Admin</p>
          </div>
        </div>

        <h1 className="text-4xl font-bold hover:text-green-600 duration-300">
          {data.data.heading}
        </h1>

        <div className="text-neutral-700 text-lg flex flex-col gap-4">
          <p>{data.data.intro}</p>
          {data.data.pera.map((obj) => (
            <div key={obj.heading}>
              <h3 className="text-xl underline text-green-600">
                {obj.heading}
              </h3>
              <p>{obj.info}</p>
            </div>
          ))}
          <div className="p-4 px-6 border-l border-l-green-600 bg-slate-100 flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-green-600">Conclusion</h3>
            <p>{data.data.conclusion}</p>
          </div>
        </div>

        <div className="border-t border-green-600 py-12 mt-6 flex gap-6 flex-col md:flex-row crbs:flex-col">
          {/* for tags */}
          <div className="flex gap-2 grow sm:items-center flex-col sm:flex-row crbs:flex-col crbs:items-start">
            <h1 className="text-xl font-bold">Tags: </h1>
            <div className="sm:flex gap-2 grid grid-cols-2">
              {data.data.tags.map((tag) => (
                <span
                  className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          {/* for links */}
          <div className="flex gap-4 items-center text-xl">
            {/* Facebook */}
            <i className="fa-brands fa-facebook-f cursor-pointer hover:text-slate-500 transition"></i>
            {/* Twitter */}
            <i className="fa-brands fa-twitter cursor-pointer hover:text-slate-500 transition"></i>
            {/* instagram */}
            <i className="fa-brands fa-instagram cursor-pointer hover:text-slate-500 transition"></i>
            {/* linkedin */}
            <i className="fa-brands fa-linkedin-in cursor-pointer hover:text-slate-500 transition"></i>
          </div>
        </div>
      </div>

      <div className="relative flex lg:hidden items-center text-black z-10 bg-transparent w-fit mx-auto pb-12">
        <img
          src="https://img.icons8.com/?size=100&id=42477&format=png&color=000000"
          alt="arrow-left"
          className="w-12 cursor-pointer select-none"
          onClick={prevBlog}
        />
        <p className="font-bold">{`${textId[2]} of ${blogData.length}`}</p>
        <img
          width="80"
          height="80"
          src="https://img.icons8.com/dotty/80/right.png"
          alt="right"
          className="w-12 cursor-pointer select-none"
          onClick={nextBlog}
        />
      </div>
    </div>
  );
}

export default BlogComponent;
