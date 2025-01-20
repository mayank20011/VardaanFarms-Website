import React from "react";
import logo from "../../img/Vardanlogo.png";
import { useRef } from "react";
import { Link } from "react-router-dom";
function Navbar() {
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
      <div className="bg-white py-4 text-neutral-700 hidden md:flex">
        {/* for desktop Navbar*/}
        <div className="justify-between mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 items-center hidden md:flex">
          {/* For image */}
          <img src={logo} alt="logo" className="w-24" />

          {/* For Navlinks */}
          <ul className="flex gap-5">
            <li className="cursor-pointer hover:scale-110 transition duration 700 font-bold hover:text-green-600">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="cursor-pointer hover:scale-110 transition duration 700 font-bold hover:text-green-600">
              <Link to={"/products"}>Our Products</Link>
            </li>
            <li className="cursor-pointer hover:scale-110 transition duration 700 font-bold hover:text-green-600">
             <Link to={"/aboutUs"}>About Us</Link>
            </li>
            <li className="cursor-pointer hover:scale-110 transition duration 700 font-bold hover:text-green-600">
              <Link to={"/contactUs"}>Contact Us</Link>
            </li>
            <li className="cursor-pointer hover:scale-110 transition duration 700 font-bold hover:text-green-600">
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
              className="self-end cursor-pointer hover:scale-90 transition border-white border-2 border-dashed hover:border-green-600"
              onClick={closeNav}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/dotty/80/delete-sign.png"
                alt="delete-sign"
              />
            </li>
            <Link className="px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer" to={"/"} onClick={closeNav}>
             Home
            </Link>
            <Link className="px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer" to={"/products"} onClick={closeNav}>
              Our Products
            </Link>
            <Link className="px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer" to={"/aboutUs"} onClick={closeNav}>
              About Us
            </Link>
            <Link className="px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer" to={"/contactUs"} onClick={closeNav}>
              Contact Us
            </Link>
            <Link className="px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer" to={"/blogs"} onClick={closeNav}>
            Blogs
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
