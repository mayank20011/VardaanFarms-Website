import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogComponent from "../../Components/Blogs/BlogComponent.jsx";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function ReadFullBlog({ totalPaddingToGive }) {

  const seoData = {
    "001": {
      title: "Why A2 Desi Cow Milk - Dairy Farm Insights",
      description: "Learn about the benefits of A2 Desi Cow Milk and why it is a healthier choice for your diet. Discover how it differs from regular milk and its advantages.",
      keywords: "A2 Desi Cow Milk, Dairy Farm, Healthy Milk, Desi Cows"
    },
    "002": {
      title: "Enjoy Full Cream Milk Daily - Dairy Farm Insights",
      description: "Discover the rich and creamy taste of Full Cream Milk and how it can enhance your daily diet. Learn about its nutritional benefits and uses.",
      keywords: "Full Cream Milk, Rich Milk, Creamy Milk, Dairy Farm"
    },
    "003": {
      title: "Healthy & Tasty: Toned Milk - Dairy Farm Insights",
      description: "Explore the benefits of Toned Milk, a healthy and tasty option for those looking for a balanced diet. Learn about its nutritional value and uses.",
      keywords: "Toned Milk, Healthy Milk, Balanced Diet, Dairy Farm"
    },
    "004": {
      title: "Light & Tasty: Double Toned Milk - Dairy Farm Insights",
      description: "Learn about Double Toned Milk, a lighter choice that doesn't compromise on taste. Discover its benefits and why it is a great option for your diet.",
      keywords: "Double Toned Milk, Light Milk, Tasty Milk, Dairy Farm"
    },
    "005": {
      title: "Buffalo Milk: Rich & Nutritious - Dairy Farm Insights",
      description: "Discover the rich and creamy texture of Buffalo Milk and its nutritional benefits. Learn why you should consider adding it to your diet.",
      keywords: "Buffalo Milk, Rich Milk, Nutritious Milk, Dairy Farm"
    },
    "006": {
      title: "Sustainability On Dairy Farm - Dairy Farm Insights",
      description: "Explore how dairy farms can adopt sustainable practices to protect the environment while providing high-quality dairy products.",
      keywords: "Sustainability, Dairy Farm, Eco-Friendly, Sustainable Farming"
    }
  };

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
      <Helmet>
        <title>{seoData[id]?.title}</title>
        <meta name="description" content={seoData[id]?.description} />
        <meta name="keywords" content={seoData[id]?.keywords} />
      </Helmet>
      
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
