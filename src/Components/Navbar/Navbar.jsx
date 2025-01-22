import React from "react";
import logo from "../../img/Vardanlogo.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  const mobileNav = useRef(null);

  function openNav() {
    mobileNav.current.classList.remove("-translate-x-full");
  }

  function closeNav() {
    mobileNav.current.classList.add("-translate-x-full");
  }

  return (
    <>
      {/* for laptop */}
      <div className="bg-white py-4 text-neutral-700 hidden md:flex md:border-b-2 border-neutral-300">
        {/* for desktop Navbar*/}
        <div className="justify-between mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 items-center hidden md:flex">
          {/* For image */}
          <img src={logo} alt="logo" className="w-24" />

          {/* For Navlinks */}
          <ul className="flex gap-5">
            <li
              className={`cursor-pointer hover:scale-110 transition duration 700 font-bold hover:text-green-600 ${
                active == "home"
                  ? "text-green-600 underline underline-offset-8 scale-110"
                  : ""
              }`}
              onClick={() => {
                setActive("home");
              }}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className={`cursor-pointer hover:scale-110 transition duration 700 font-bold hover:text-green-600 ${
                active == "products"
                  ? "text-green-600 underline underline-offset-8 scale-110"
                  : ""
              }`}
              onClick={() => {
                setActive("products");
              }}
            >
              <Link to={"/products"}>Our Products</Link>
            </li>
            <li
              className={`cursor-pointer hover:scale-110 transition duration 700 font-bold hover:text-green-600 ${
                active == "aboutUs"
                  ? "text-green-600 underline underline-offset-8 scale-110"
                  : ""
              }`}
              onClick={() => {
                setActive("aboutUs");
              }}
            >
              <Link to={"/aboutUs"}>About Us</Link>
            </li>
            <li
              className={`cursor-pointer hover:scale-110 transition duration 700 font-bold hover:text-green-600 ${
                active == "contactUs"
                  ? "text-green-600 underline underline-offset-8 scale-110"
                  : ""
              }`}
              onClick={() => {
                setActive("contactUs");
              }}
            >
              <Link to={"/contactUs"}>Contact Us</Link>
            </li>
            <li
              className={`cursor-pointer hover:scale-110 transition duration 700 font-bold hover:text-green-600 ${
                active == "blogs"
                  ? "text-green-600 underline underline-offset-8 scale-110"
                  : ""
              }`}
              onClick={() => {
                setActive("blogs");
              }}
            >
              <Link to={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* For mobile nav */}
      <div className="md:hidden text-black bg-transparent overflow-hidden">
        {/* for mobile navbar */}
        <div className="w-full relative p-2 flex justify-center items-center top-[40px] z-30">
          <div className="flex md:hidden bg-gray-100 p-2 w-[300px] mx-auto px-6 py-3 rounded-2xl justify-between shadow-md fixed">
            <img src={logo} alt="vardan Farms Logo" className="h-[36px]" />
            <img
              width="36"
              height="36"
              src="https://img.icons8.com/ink/48/cow.png"
              alt="cow"
            />
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/windows/32/menu--v5.png"
              alt="menu--v5"
              className="cursor-pointer"
              onClick={openNav}
            />
          </div>
        </div>

        {/* for mobile nav slider */}
        <div
          className="flex flex-col bg-white opacity-90 fixed top-0 min-h-screen w-[300px] transfor p-3 -translate-x-full transition duration-700 ease-in-out z-50"
          ref={mobileNav}
        >
          <ul className="flex flex-col gap-4">
            <li
              className={`self-end cursor-pointer hover:scale-90 transition border-white border-2 border-dashed hover:border-green-600 `}
              onClick={closeNav}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/dotty/80/delete-sign.png"
                alt="delete-sign"
              />
            </li>

            <Link
              className={`px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer ${
                active == "home" ? "border-green-600 scale-90" : ""
              }`}
              to={"/"}
              onClick={() => {
                closeNav();
                setActive("home");
              }}
            >
              Home
            </Link>

            <Link
              className={`px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer ${
                active == "products" ? "border-green-600 scale-90" : ""
              }`}
              to={"/products"}
              onClick={() => {
                closeNav();
                setActive("products");
              }}
            >
              Our Products
            </Link>

            <Link
              className={`px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer ${
                active == "aboutUs" ? "border-green-600 scale-90" : ""
              }`}
              to={"/aboutUs"}
              onClick={() => {
                closeNav();
                setActive("aboutUs");
              }}
            >
              About Us
            </Link>

            <Link
              className={`px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer ${
                active == "contactUs" ? "border-green-600 scale-90" : ""
              }`}
              to={"/contactUs"}
              onClick={() => {
                closeNav();
                setActive("contactUs");
              }}
            >
              Contact Us
            </Link>

            <Link
              className={`px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer ${
                active == "blogs" ? "border-green-600 scale-90" : ""
              }`}
              to={"/blogs"}
              onClick={() => {
                closeNav();
                setActive("blogs");
              }}
            >
              Blogs
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
