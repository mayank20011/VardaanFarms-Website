import React from "react";
import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Body from "./Components/Body/Body.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
import Products from "./Pages/Products/Products.jsx";
import AboutUs from "./Pages/AboutUs/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollTop/ScrollTop.jsx";
function App() {
  return (
    <main className="bg-black text-white">
      <header className="w-full fixed z-10">
        <ScrollToTop/>
        <Header />
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </main>
  );
}

export default App;
