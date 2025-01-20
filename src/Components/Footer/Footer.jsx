import React from "react";
import footerMail from "../../img/footerMail.png";
import footerLocation from "../../img/footerLocation2.png";
import cowIcon from "../../img/cowIcon.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    // for bg-color
    <div className="bg-neutral-700">
      {/* for container */}
      <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-24 mx-auto flex justify-center items-center flex-col gap-8 text-white">
        {/* for diff sections */}
        <div className="w-full grid gap-4 md:grid-cols-2">
          {/* For text and id */}
          <div className="flex flex-col gap-4">
            {/* img and text */}
            <div className="flex gap-4">
              <img src={cowIcon} alt="" />
              <span
                className="text-5xl font-bold"
                style={{ filter: "drop-shadow(2px 2px 0px rgba(0, 0, 0, 1))" }}
              >
                Vardaan
              </span>
            </div>
            <p className="text-slate-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              aut ab optio reprehenderit, magnam a possimus quas odio!
            </p>
            <div>
              {/* for mail */}
              <div className="flex gap-4 items-center">
                <img src={footerMail} alt="" className="w-[50px]" />
                <p className="hover:scale-110 transition-all hover:text-green-600 cursor-pointer">
                  hello@vardaanfarms.com
                </p>
              </div>
              {/* for location */}
              <div className="flex gap-4 items-center">
                <img src={footerLocation} alt="" className="w-[50px]" />
                <p className="hover:text-green-600 transition hover:scale-110">
                  Gurugram India
                </p>
              </div>
            </div>
          </div>

          {/* for quick nav and social medais*/}
          <div className="flex gap-6">
            <ul className="flex flex-col gap-4">
              <Link className="hover:text-green-600 transition text-xl cursor-pointer underline underline-offset-4" to={"/"}>
                Home
              </Link>
              <Link className="hover:text-green-600 transition text-xl cursor-pointer underline underline-offset-4" to={"/products"}>
                Our Products
              </Link>
              <Link className="hover:text-green-600 transition text-xl cursor-pointer underline underline-offset-4" to={"/aboutUs"}>
                About Us
              </Link>
              <Link className="hover:text-green-600 transition text-xl cursor-pointer underline underline-offset-4" to={"/contactUs"}>
                Contact Us
              </Link>
              <Link className="hover:text-green-600 transition text-xl cursor-pointer underline underline-offset-4" to={"/bllogs"}>
                Blogs
              </Link>
            </ul>

            {/* for social media */}
            <div className="flex gap-6 grow self-center justify-end">
              <i className="fa-brands fa-facebook-f text-4xl cursor-pointer hover:text-green-600 hover:scale-95 transition"></i>
              <i className="fa-brands fa-instagram text-4xl cursor-pointer hover:text-green-600 hover:scale-95 transition"></i>
              <i className="fa-brands fa-linkedin-in text-4xl cursor-pointer hover:text-green-600 hover:scale-95 transition"></i>
              <i className="fa-brands fa-youtube text-4xl cursor-pointer hover:text-green-600 hover:scale-95 transition"></i>
            </div>
          </div>
        </div>
        <div className="w-full border-t-2 border-dashed border-t-green-600">
          <p className="pt-12 text-center">
            &copy; 2014 Vardaan Farms | All rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
