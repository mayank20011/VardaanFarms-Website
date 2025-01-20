import React from "react";
import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Body from "./Components/Body/Body.jsx";
import HomePage from "./Pages/Home/HomePage.jsx";
function App() {
  return (
    <div className="bg-black text-white">
      <div className="w-full fixed z-10">
        <Header />
        <Navbar />
      </div>
      <HomePage />
    </div>
  );
}

export default App;
