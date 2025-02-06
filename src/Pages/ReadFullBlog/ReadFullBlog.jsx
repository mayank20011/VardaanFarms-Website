import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogComponent from "../../Components/Blogs/BlogComponent.jsx";
import { useNavigate } from "react-router-dom";

function ReadFullBlog({ totalPaddingToGive }) {
  const [id, setId] = useState(useParams().id);
  const navigate = useNavigate();
  const [blogClicked, setBlogClicked] = useState("0");

  useEffect(() => {
    document.querySelector("#leftBlog").scrollTo(0, 0);
  }, [blogClicked]);

  return (
    <div
      className="min-h-screen w-full bg-slate-100"
      style={{ paddingTop: `${totalPaddingToGive}px` }}
    >
      <div
        className="md:pb-4 md:pt-8 flex gap-12 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 text-black flex-row"
        style={{ height: `calc(100vh - ${totalPaddingToGive}px)` }} // Ensure to add "px" to the padding value
      >
        {/* for left blogs */}

        <div
          className="grow w-full h-full overflow-y-auto bg-white rounded-md shadow-md relative scroll-smooth"
          style={{
            scrollbarColor: "green white",
            scrollbarWidth: "thin",
          }}
          id="leftBlog"
        >
          <Link to={"/blogs"} className="fixed -translate-x-1/2">
            <i className="fa-solid fa-arrow-left text-white bg-black top-10 text-3xl p-2 rounded-md"></i>
          </Link>

          {<BlogComponent id={id} setId={setId} setBlogClicked={setBlogClicked}/>}
        </div>

        {/* for right */}
        <div className="w-[400px] h-fit p-4 bg-white hidden flex-col gap-4 shadow-lg rounded-md lg:flex">
          <h1 className="font-bold underline-offset-8 underline">All Blogs</h1>
          <div
            className="border- h-[300px] overflow-y-auto flex flex-col gap-2"
            style={{ scrollbarWidth: "thin", scrollbarColor: "green white" }}
          >
            <div
              className={`p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer ${
                id == "001"
                  ? "shadow-md shadow-black scale-95 hover:shadow-black"
                  : null
              }`}
              onClick={() => {
                setId("001");
                navigate(`/readFullBlog/001`, { replace: true });
                setBlogClicked(1);
              }}
            >
              <h1 className="font-bold">Why A2 Desi Cow Milk</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">28 July,2024</p>
              </div>
            </div>

            <div
              className={`p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer ${
                id == "002"
                  ? "shadow-md shadow-black scale-95 hover:shadow-black"
                  : null
              }`}
              onClick={() => {
                setId("002");
                navigate(`/readFullBlog/002`, { replace: true });
                setBlogClicked(2);
              }}
            >
              <h1 className="font-bold">Enjoy Full Cream Milk Daily</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">17 August,2024</p>
              </div>
            </div>

            <div
              className={`p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer ${
                id == "003"
                  ? "shadow-md shadow-black scale-95 hover:shadow-black"
                  : null
              }`}
              onClick={() => {
                setId("003");
                navigate(`/readFullBlog/003`, { replace: true });
                setBlogClicked(3);
              }}
            >
              <h1 className="font-bold">Healthy & Tasty: Toned Milk</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">23 October,2024</p>
              </div>
            </div>

            <div
              className={`p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer ${
                id == "004"
                  ? "shadow-md shadow-black scale-95 hover:shadow-black"
                  : null
              }`}
              onClick={() => {
                setId("004");
                navigate(`/readFullBlog/004`, { replace: true });
                setBlogClicked(4);
              }}
            >
              <h1 className="font-bold">Light & Tasty: Double Toned Milk</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">December 1,2024</p>
              </div>
            </div>

            <div
              className={`p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer ${
                id == "005"
                  ? "shadow-md shadow-black scale-95 hover:shadow-black"
                  : null
              }`}
              onClick={() => {
                setId("005");
                navigate(`/readFullBlog/005`, { replace: true });
                setBlogClicked(5);
              }}
            >
              <h1 className="font-bold">Buffalo Milk: Rich & Nutritious</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">13 Jan,2025</p>
              </div>
            </div>

            <div
              className={`p-2 rounded-md flex flex-col gap-2 border hover:shadow-md transition cursor-pointer ${
                id == "006"
                  ? "shadow-md shadow-black scale-95 hover:shadow-black"
                  : null
              }`}
              onClick={() => {
                setId("006");
                navigate(`/readFullBlog/006`, { replace: true });
                setBlogClicked(6);
              }}
            >
              <h1 className="font-bold">Sustainability On Dairy Farm</h1>
              <div className="flex gap-4 items-center">
                <i className="fa-solid fa-clock text-green-600"></i>
                <p className="text-sm text-slate-600">Feb 4,2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadFullBlog;
