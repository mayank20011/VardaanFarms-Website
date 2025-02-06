import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    // for bg-color
    <footer className="bg-neutral-700">
      {/* for container */}
      <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-12 mx-auto flex justify-center items-center flex-col gap-8 text-white">
        {/* for diff sections */}
        <div className="w-full grid gap-4 md:grid-cols-2">
          {/* For text and id */}
          <div className="flex flex-col gap-4 text-sm">
            {/* img and text */}
            <div className="flex gap-4 items-center">
              <img src="https://img.icons8.com/?size=100&id=101713&format=png&color=000000" alt="" loading="lazy" className="w-16"/>
              <span
                className="text-3xl font-bold"
                style={{ filter: "drop-shadow(2px 2px 0px rgba(0, 0, 0, 1))" }}
              >
                Vardaan
              </span>
            </div>
            <p className="text-slate-200">
            Delivering fresh, pure, and natural dairy products directly from our farm to your home, every day with love and care.
            </p>
            <div>
              {/* for mail */}
              <div className="flex gap-4 items-center">
                <img src="https://img.icons8.com/?size=100&id=xLIkjgcmFOsC&format=png&color=000000" alt="" className="w-12" loading="lazy"/>
                <p className="hover:scale-110 transition-all hover:text-green-600 cursor-pointer">
                  hello@vardaanfarms.com
                </p>
              </div>
              {/* for location */}
              <div className="flex gap-4 items-center">
                <img src="https://img.icons8.com/?size=100&id=PZTTDl8ML4vy&format=png&color=000000" alt="" className="w-12" loading="lazy"/>
                <p className="hover:text-green-600 transition hover:scale-110">
                  Gurugram India
                </p>
              </div>
            </div>
          </div>

          {/* for quick nav and social medais*/}
          <nav className="flex gap-6 self-center">
            <ul className="flex flex-col gap-4">
              <Link className="hover:text-green-600 transition cursor-pointer" to={"/"}>
                Home
              </Link>
              <Link className="hover:text-green-600 transition cursor-pointer" to={"/products"}>
                Our Products
              </Link>
              <Link className="hover:text-green-600 transition cursor-pointer" to={"/aboutUs"}>
                About Us
              </Link>
              <Link className="hover:text-green-600 transition cursor-pointer" to={"/contactUs"}>
                Contact Us
              </Link>
              <Link className="hover:text-green-600 transition cursor-pointer" to={"/blogs"}>
                Blogs
              </Link>
            </ul>

            {/* for social media */}
            <div className="flex gap-6 grow self-end justify-end flex-col">
              <h1 className="text-center text-md">Social Media</h1>
              <div className="flex gap-6 self-center">
              <i className="fa-brands fa-facebook-f text-2xl cursor-pointer hover:text-green-600 hover:scale-95 transition" onClick={()=>{window.open("https://www.facebook.com/vardaanfarms/")}}></i>
              <i className="fa-brands fa-instagram text-2xl cursor-pointer hover:text-green-600 hover:scale-95 transition" onClick={()=>{window.open("https://www.instagram.com/vardaanfarms/")}}></i>
              <i className="fa-brands fa-linkedin-in text-2xl cursor-pointer hover:text-green-600 hover:scale-95 transition" onClick={()=>{window.open("")}}></i>
              <i className="fa-brands fa-youtube text-2xl cursor-pointer hover:text-green-600 hover:scale-95 transition" onClick={()=>{window.open("https://www.youtube.com/@VardaanFarms")}}></i>
              </div>
            </div>
          </nav>
        </div>
        <div className="w-full border-t border-white">
          <p className="pt-12 text-center">
            &copy; 2014 Vardaan Farms | All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
