import React from "react";
import blog1 from "../../img/blog1.jpg";
import blog2 from "../../img/blog2.jpg";
import blog3 from "../../img/blog3.jpg";
import blog4 from "../../img/blog4.jpg";
import blog5 from "../../img/blog5.jpg";
import blog6 from "../../img/blog6.jpg";
import Footer from "../../Components/Footer/Footer.jsx";

function Blogs() {
  return (
    <section className="bg-slate-100 text-black min-h-screen">
      <div className="p-24 md:p-48 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 flex flex-col gap-6">
        <span className="md:text-center font-bold text-green-600 text-lg">
          Our Blogs
        </span>
        <h1 className="md:text-center text-5xl font-extrabold">Latest Blog</h1>
        <p className="w-full md:text-center text-slate-500 md:w-[700px] mx-auto text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt velit
          commodi fugiat sit repellendus excepturi sed eligendi at cumque natus
          eveniet tempore vitae impedit, doloremque, aperiam inventore? Quo
          possimus, blanditiis vero aliquam quaerat modi ut reprehenderit.
          Tempore similique vel cumque!
        </p>

        {/* for blogs */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* blog-1 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog1} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-blue-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Dairy</span>
            </div>
            <h1 className="text-xl font-bold">Safe Environment For Dairy Farm</h1>
            <p className="text-slate-500 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
          </article>

          {/* blog-2 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog2} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-blue-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Cheese</span>
            </div>
            <h1 className="text-xl font-bold">Organic Cheese Curds & Gravy</h1>
            <p className="text-slate-500 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
          </article>

          {/* blog-3 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog3} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-blue-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Markets</span>
            </div>
            <h1 className="text-xl font-bold">Frozen Dairy Items On The Market</h1>
            <p className="text-slate-500 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
          </article>

          {/* blog-4 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog4} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-blue-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Milk</span>
            </div>
            <h1 className="text-xl font-bold">Milk & Cheese Against Allergies</h1>
            <p className="text-slate-500 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
          </article>

          {/* blog-5 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog5} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-blue-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Farm</span>
            </div>
            <h1 className="text-xl font-bold">High Standards For A Dairy Farm</h1>
            <p className="text-slate-500 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
          </article>

          {/* bllog-6 */}
          <article className="grid gap-4">
            <div className="relative">
              <img src={blog6} alt="" className="rounded-md" loading="lazy"/>
              <span className="absolute text-white bg-blue-600  px-6 py-2 rounded-full bottom-[20px] left-[20px]">Organic</span>
            </div>
            <h1 className="text-xl font-bold">Sustainability On A Dairy Farm</h1>
            <p className="text-slate-500 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore...
            </p>
          </article>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default Blogs;
