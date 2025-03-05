import React from "react";
import { Link } from "react-router-dom";
import facebookLogo from "../../img/facebookLogo.png";
import instagramLogo from "../../img/instagramLogo2.png";
import linkedinLogo from "../../img/linkedinLogo2.png";
import youtubeLogo from "../../img/youtubeLogo2.png";

const Footer = () => {
  return (
    <footer className="bg-neutral-700">
      <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-12 mx-auto flex justify-center items-center flex-col gap-8 text-white">
        <div className="w-full grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-4 text-sm">
            <div className="flex gap-4 items-center">
              <img
                src="https://img.icons8.com/?size=100&id=101713&format=png&color=000000"
                alt="cow Image"
                loading="lazy"
                className="w-16"
              />
              <span
                className="text-3xl font-bold"
                style={{ filter: "drop-shadow(2px 2px 0px rgba(0, 0, 0, 1))" }}
              >
                Vardaan
              </span>
            </div>
            <p className="text-slate-200">
              Delivering fresh, pure, and natural dairy products directly from
              our farm to your home, every day with love and care.
            </p>
            <div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=xLIkjgcmFOsC&format=png&color=000000"
                  alt="mail Icon"
                  className="w-12"
                  loading="lazy"
                />
                <p className="hover:scale-110 transition-all hover:text-green-600 cursor-pointer">
                  hello@vardaanfarms.com
                </p>
              </div>
              <div className="flex gap-4 items-center">
                <img
                  src="https://img.icons8.com/?size=100&id=PZTTDl8ML4vy&format=png&color=000000"
                  alt="Location Icon"
                  className="w-12"
                  loading="lazy"
                />
                <p className="hover:text-green-600 transition hover:scale-110">
                  Gurugram India
                </p>
              </div>
            </div>
          </div>

          <nav className="flex gap-6 self-center">
            <div className="flex flex-col gap-4">
              <Link
                className="hover:text-green-600 transition cursor-pointer"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className="hover:text-green-600 transition cursor-pointer"
                to={"/products"}
              >
                Our Products
              </Link>
              <Link
                className="hover:text-green-600 transition cursor-pointer"
                to={"/aboutUs"}
              >
                About Us
              </Link>
              <Link
                className="hover:text-green-600 transition cursor-pointer"
                to={"/contactUs"}
              >
                Contact Us
              </Link>
              <Link
                className="hover:text-green-600 transition cursor-pointer"
                to={"/blogs"}
              >
                Blogs
              </Link>
            </div>

            <div className="flex gap-6 grow self-end justify-end flex-col">
              <h1 className="text-center text-md">Social Media</h1>
              <div className="flex gap-6 self-center">
                <img
                  src={facebookLogo}
                  alt="facebook Logo"
                  onClick={() => {
                    window.open("https://www.facebook.com/vardaanfarms/");
                  }}
                  style={{width:"40px", height:"40px"}}
                  className="cursor-pointer hover:scale-95"
                  loading="lazy"
                />
                <img
                  src={instagramLogo}
                  alt="Instagram Logo"
                  onClick={() => {
                    window.open("https://www.instagram.com/vardaanfarms/");
                  }}
                  style={{width:"40px", height:"40px"}}
                  className="cursor-pointer hover:scale-95"
                  loading="lazy"
                />
                <img
                  src={linkedinLogo}
                  alt="Linkedin Logo"
                  onClick={() => {
                    window.open("https://www.facebook.com/vardaanfarms/");
                  }}
                  style={{width:"40px", height:"40px"}}
                  className="cursor-pointer hover:scale-95"
                  loading="lazy"
                />
                <img
                  src={youtubeLogo}
                  alt="Youtube Logo"
                  onClick={() => {
                    window.open("https://www.youtube.com/@VardaanFarms");
                  }}
                  style={{width:"40px", height:"40px"}}
                  className="cursor-pointer hover:scale-95"
                  loading="lazy"
                />
              </div>
            </div>
          </nav>
        </div>
        <div className="w-full border-t border-white">
          <p className="pt-12 text-center">
            &copy; 2024 Vardaan Farms | All rights Reserved <Link to={"/privacyPolicy"} className="hover:scale-110 transition hover:text-green-600">| Privacy Policy</Link>
            <Link to={"/termsAndConditions"} className="hover:scale-110 transition hover:text-green-600"> | Terms & conditions</Link>
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
