import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../img/Vardanlogo.png";

const Navbar = ({ headerHeight }) => {
  const [active, setActive] = useState("home");
  const location = useLocation();
  const mobileNav = useRef(null);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") {
      setActive("home");
    } else if (path.includes("/products")) {
      setActive("products");
    } else if (path.includes("/about-us")) {
      setActive("aboutUs");
    } else if (path.includes("/contact-us")) {
      setActive("contactUs");
    } else if (path.includes("/blogs") || path.includes("/blog")) {
      setActive("blogs");
    } else {
      setActive(null);
    }
  }, [location.pathname]);

  function openNav() {
    mobileNav.current.classList.remove("-translate-x-full");
  }

  function closeNav() {
    mobileNav.current.classList.add("-translate-x-full");
  }

  return (
    <>
      <div
        className="bg-white py-2 text-black hidden md:flex md:border-b-2 border-neutral-300 fixed w-full z-50"
        style={{ top: `${headerHeight}px` }}
        id="nav"
      >
        <nav className="justify-between mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 items-center hidden md:flex">
          <Link className="aspect-[16/9]" to={"/"}>
            <img
              src={logo}
              alt="vardaanfarms Logo"
              className="w-[96px] h-auto"
              loading="lazy"
            />
          </Link>

          <ul className="flex gap-5">
            <li
              className={`cursor-pointer hover:scale-110 transition duration 700 hover:text-green-700 ${
                active === "home" ? "text-green-700 scale-110" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>

            <li
              className={`cursor-pointer hover:scale-110 transition duration 700 hover:text-green-700 ${
                active === "products" ? "text-green-700 scale-110" : ""
              }`}
            >
              <Link to="/products">Our Products</Link>
            </li>

            <li
              className={`cursor-pointer hover:scale-110 transition duration 700 hover:text-green-700 ${
                active === "aboutUs" ? "text-green-700 scale-110" : ""
              }`}
            >
              <Link to="/about-us">About Us</Link>
            </li>

            <li
              className={`cursor-pointer hover:scale-110 transition duration 700 hover:text-green-700 ${
                active === "contactUs" ? "text-green-700 scale-110" : ""
              }`}
            >
              <Link to="/contact-us">Contact Us</Link>
            </li>

            <li
              className={`cursor-pointer hover:scale-110 transition duration 700 hover:text-green-700 ${
                active === "blogs" ? "text-green-700 scale-110" : ""
              }`}
            >
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="md:hidden text-black bg-transparent overflow-hidden"
        style={{ height: "0px" }}
      >
        <div className="w-full relative p-2 flex justify-center items-center top-[40px] z-30">
          <div className="flex md:hidden bg-gray-100 p-2 w-[300px] mx-auto px-6 py-3 rounded-2xl justify-between shadow-2xl fixed">
            <Link className="aspect-[16/9]" to="/">
              <img
                src={logo}
                alt="vardan Farms Logo"
                className="h-[36px]"
                loading="lazy"
              />
            </Link>
            <div className="aspect-[16/9]">
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/ink/48/cow.png"
                alt="cow"
                loading="lazy"
              />
            </div>
            <div className="aspect-[16/9]">
              <img
                width="36"
                height="36"
                src="https://img.icons8.com/windows/32/menu--v5.png"
                alt="menu--v5"
                className="cursor-pointer"
                onClick={openNav}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <nav
          className="flex flex-col bg-white opacity-90 fixed top-0 min-h-screen w-[300px] transfor p-3 -translate-x-full transition duration-700 ease-in-out z-50"
          ref={mobileNav}
        >
          <div className="flex flex-col gap-4">
            <div
              className={`self-end cursor-pointer hover:scale-90 transition border-white border-2 border-dashed hover:border-green-600 `}
              onClick={closeNav}
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/dotty/80/delete-sign.png"
                alt="delete-sign"
                loading="lazy"
              />
            </div>

            <Link
              className={`px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer ${
                active === "home" ? "border-green-600 scale-90" : ""
              }`}
              to="/"
              onClick={() => {
                closeNav();
                setActive("home");
              }}
            >
              Home
            </Link>

            <Link
              className={`px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer ${
                active === "products" ? "border-green-600 scale-90" : ""
              }`}
              to="/products"
              onClick={() => {
                closeNav();
                setActive("products");
              }}
            >
              Our Products
            </Link>

            <Link
              className={`px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer ${
                active === "aboutUs" ? "border-green-600 scale-90" : ""
              }`}
              to="/about-us"
              onClick={() => {
                closeNav();
                setActive("aboutUs");
              }}
            >
              About Us
            </Link>

            <Link
              className={`px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer ${
                active === "contactUs" ? "border-green-600 scale-90" : ""
              }`}
              to="/contact-us"
              onClick={() => {
                closeNav();
                setActive("contactUs");
              }}
            >
              Contact Us
            </Link>

            <Link
              className={`px-4 py-2 border-2 border-dashed hover:border-green-600 hover:scale-90 transition cursor-pointer ${
                active === "blogs" ? "border-green-600 scale-90" : ""
              }`}
              to="/blogs"
              onClick={() => {
                closeNav();
                setActive("blogs");
              }}
            >
              Blogs
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
