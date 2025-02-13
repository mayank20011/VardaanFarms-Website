import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import Products from "./Pages/Products/Products.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollTop/ScrollTop.jsx";
import ReadFullBlog from "./Pages/ReadFullBlog/ReadFullBlog.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import WhatsappLink from "./Components/WhatsappLink/WhatsappLink.jsx";

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setHeaderHeight(25);
        setNavHeight(30);
      } else {
        const header = document.getElementById("header");
        const nav = document.getElementById("nav");
        if (header && nav) {
          setHeaderHeight(header.offsetHeight);
          setNavHeight(nav.offsetHeight);
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="bg-black text-white">
      <WhatsappLink/>
      <ScrollToTop />
      <Header />
      <Navbar headerHeight={headerHeight} />
      <Routes>
        <Route
          path="/"
          element={<HomePage totalPaddingToGive={headerHeight + navHeight} />}
        />
        <Route
          path="/products"
          element={<Products totalPaddingToGive={headerHeight + navHeight} />}
        />
        <Route
          path="/aboutUs"
          element={<AboutUs totalPaddingToGive={headerHeight + navHeight} />}
        />
        <Route
          path="/contactUs"
          element={<ContactUs totalPaddingToGive={headerHeight + navHeight} />}
        />
        <Route
          path="/blogs"
          element={<Blogs totalPaddingToGive={headerHeight + navHeight} />}
        />
        <Route
          path="blog/:id"
          element={<ReadFullBlog totalPaddingToGive={headerHeight + navHeight}/>}
        />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
