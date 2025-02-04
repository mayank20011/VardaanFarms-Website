import React from "react";
import blog1 from "../../img/blog1.jpg";
import blog2 from "../../img/blog2.jpg";
import blog3 from "../../img/blog3.jpg";
import blog4 from "../../img/blog4.jpg";
import blog5 from "../../img/blog5.jpg";
import blog6 from "../../img/blog6.jpg";
import Footer from "../../Components/Footer/Footer.jsx";
import { Link } from "react-router-dom";
function Blogs() {
  return (
    <section className="bg-slate-100 text-black min-h-screen" id="blogPage">

      <div className="p-24 md:p-48 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 flex flex-col gap-6">
        <span className="md:text-center font-bold text-green-600 text-lg">
          Our Blogs
        </span>
        <h1 className="md:text-center text-5xl font-extrabold">Latest Blog</h1>
        <p className="w-full md:text-center text-slate-500 md:w-[700px] mx-auto text-lg">
        Welcome to our latest blog post! In this edition, we explore a variety of topics that touch upon every aspect of dairy farming, from maintaining a safe and sustainable environment to producing delicious and nutritious dairy products. Whether you're a dairy enthusiast or just curious about where your milk comes from, there's something here for everyone.
        </p>

        {/* for blogs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* blog-1 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog1} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Dairy</span>
            </div>
            <h1 className="text-xl font-bold">Why A2 Desi Cow Milk</h1>
            <p className="text-slate-500 text-lg">
            A2 Desi Cow Milk is a type of milk that comes from desi cows, which are native to our ...
            </p>
            <Link className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit" to={"/readFullBlog"}>Read More</Link>
          </article>

          {/* blog-2 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog2} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Cheese</span>
            </div>
            <h1 className="text-xl font-bold">Enjoy Full Cream Milk Daily</h1>
            <p className="text-slate-500 text-lg">
            Full Cream Milk is a rich and creamy type of milk that is perfect for your daily diet ...
            </p>
            <Link className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit" to={"/readFullBlog"}>Read More</Link>
          </article>

          {/* blog-3 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog3} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Markets</span>
            </div>
            <h1 className="text-xl font-bold">Healthy and Tasty: Toned Milk</h1>
            <p className="text-slate-500 text-lg">
            Toned Milk is a type of milk that offers a good balance of health and ...
            </p>
            <Link className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit" to={"/readFullBlog"}>Read More</Link>
          </article>

          {/* blog-4 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog4} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Milk</span>
            </div>
            <h1 className="text-xl font-bold">Light and Tasty: Double Toned Milk</h1>
            <p className="text-slate-500 text-lg">
            Double Toned Milk is a lighter choice that does not compromise on taste. Here's why ...
            </p>
            <Link className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit" to={"/readFullBlog"}>Read More</Link>
          </article>

          {/* blog-5 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog5} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Farm</span>
            </div>
            <h1 className="text-xl font-bold">Buffalo Milk: Rich and Nutritious</h1>
            <p className="text-slate-500 text-lg">
            Buffalo Milk is known for its rich and creamy texture. Here's why you should consider adding ...
            </p>
            <Link className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit" to={"/readFullBlog"}>Read More</Link>
          </article>

          {/* bllog-6 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog6} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-green-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Organic</span>
            </div>
            <h1 className="text-xl font-bold">Sustainability On A Dairy Farm</h1>
            <p className="text-slate-500 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
            <Link className="px-4 py-2 text-white font-bold bg-green-600 rounded-md hover:scale-95 transition hover:shadow-md hover:shadow-slate-500 w-fit" to={"/readFullBlog"}>Read More</Link>
          </article>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Blogs;
