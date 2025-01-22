import React from "react";

// images
import buffaloGhee from "../../img/buffaloGhee.png";
import cowGhee from "../../img/cowGhee.png";
import curd from "../../img/curd.png";
import Dtm from "../../img/DTM2.png";
import paneer from "../../img/paneer.png";

import Footer from "../../Components/Footer/Footer.jsx";
function Products() {
  return (
    <div className="min-h-screen">
      {/* Product-1 */}
      <div className="min-h-screen flex justify-center items-center relative bg-white text-black flex-col lg:flex-row pt-28 md:pt-36 lg:pt-0 pb-6 lg:pb-0">
        {/* Left Side */}
        <div className="lg:w-1/2 flex justify-center items-center lg:min-h-screen w-11/12 mx-auto">
          <div className="lg:w-fit lg:pr-12">
            <h1 className="capitalize font-bold text text-5xl py-6 border-b-2 text-center lg:text-left">
              A2 Skimmed milk
            </h1>
            <p className="text-7xl font-bold py-6 border-b-2 text-center lg:text-left">
              100 %{" "}
            </p>
            <p className="text-2xl font-bold py-6 text-center lg:text-left">
              Natural & Unadultrated
            </p>
          </div>
        </div>

        {/* image */}
        <img
          src={buffaloGhee}
          alt="Product Image"
          className="lg:absolute w-72"
          style={{ filter: "drop-shadow(0 16px 22px rgba(0, 0, 0))" }}
        />

        {/* Right Side */}
        <div
          className="lg:w-1/2 flex justify-center items-center lg:min-h-screen w-11/12 mx-auto p-4 rounded-lg lg:rounded-none mt-6 lg:mt-0"
          style={{ background: "#f2eecb" }}
        >
          <div className="lg:w-[600px] lg:pl-48">
            <h1 className="capitalize font-bold text text-5xl py-4">1 Litre</h1>
            <p className="text-xl">
              For Those who wants to stay in shape, but also want the wholesome
              goodness of milk , A2 skimmed milk has come to your rescue !
            </p>
            <p className="text-2xl font-bold py-4 text-neutral-800">Rs. 110</p>
          </div>
        </div>
      </div>

      {/* Product-2 */}
      <div className="min-h-screen flex justify-center items-center relative bg-white text-black flex-col lg:flex-row pt-28 lg:pt-0 lg:pb-0">
        {/* Left Side */}
        <div
          className="lg:w-1/2 flex justify-center items-center lg:min-h-screen w-11/12 mx-auto mb-6 lg:mb-0 rounded-md lg:rounded-none"
          style={{ background: "#efd179" }}
        >
          <div className="lg:w-fit lg:pr-12">
            <h1 className="capitalize font-bold text text-5xl py-6 border-b-2 text-center lg:text-left">
              A2 Skimmed milk
            </h1>
            <p className="text-7xl font-bold py-6 border-b-2 text-center lg:text-left">
              100 %{" "}
            </p>
            <p className="text-2xl font-bold py-6 text-center lg:text-left">
              Natural & Unadultrated
            </p>
          </div>
        </div>

        {/* image */}
        <img
          src={cowGhee}
          alt="Product Image"
          className="lg:absolute w-72"
          style={{ filter: "drop-shadow(0 16px 22px rgba(0, 0, 0))" }}
        />

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center items-center lg:min-h-screen w-11/12 mx-auto p-4 rounded-lg lg:rounded-none mt-6 lg:mt-0">
          <div className="lg:w-[600px] lg:pl-48">
            <h1 className="capitalize font-bold text text-5xl py-4">1 Litre</h1>
            <p className="text-xl">
              For Those who wants to stay in shape, but also want the wholesome
              goodness of milk , A2 skimmed milk has come to your rescue !
            </p>
            <p className="text-2xl font-bold py-4 text-neutral-800">Rs. 110</p>
          </div>
        </div>
      </div>

      {/* Product-3 */}
      <div className="min-h-screen flex justify-center items-center relative bg-white text-black flex-col lg:flex-row pt-28 md:pt-36 lg:pt-0 pb-6 lg:pb-0">
        {/* Left Side */}
        <div className="lg:w-1/2 flex justify-center items-center lg:min-h-screen w-11/12 mx-auto">
          <div className="lg:w-fit lg:pr-12">
            <h1 className="capitalize font-bold text text-5xl py-6 border-b-2 text-center lg:text-left">
              A2 Skimmed milk
            </h1>
            <p className="text-7xl font-bold py-6 border-b-2 text-center lg:text-left">
              100 %{" "}
            </p>
            <p className="text-2xl font-bold py-6 text-center lg:text-left">
              Natural & Unadultrated
            </p>
          </div>
        </div>

        {/* image */}
        <img
          src={curd}
          alt="Product Image"
          className="lg:absolute w-72"
          style={{ filter: "drop-shadow(0 16px 22px rgba(0, 0, 0))" }}
        />

        {/* Right Side */}
        <div
          className="lg:w-1/2 flex justify-center items-center lg:min-h-screen w-11/12 mx-auto p-4 rounded-lg lg:rounded-none mt-6 lg:mt-0"
          style={{ background: "#d7805c" }}
        >
          <div className="lg:w-[600px] lg:pl-48">
            <h1 className="capitalize font-bold text text-5xl py-4">1 Litre</h1>
            <p className="text-xl">
              For Those who wants to stay in shape, but also want the wholesome
              goodness of milk , A2 skimmed milk has come to your rescue !
            </p>
            <p className="text-2xl font-bold py-4 text-neutral-800">Rs. 110</p>
          </div>
        </div>
      </div>

      {/* Product-4 */}
      <div className="min-h-screen flex justify-center items-center relative bg-white text-black flex-col lg:flex-row pt-28 lg:pt-0 lg:pb-0">
        {/* Left Side */}
        <div
          className="lg:w-1/2 flex justify-center items-center lg:min-h-screen w-11/12 mx-auto mb-6 lg:mb-0 rounded-md lg:rounded-none"
          style={{ background: "#a999cf" }}
        >
          <div className="lg:w-fit lg:pr-12">
            <h1 className="capitalize font-bold text text-5xl py-6 border-b-2 text-center lg:text-left">
              A2 Skimmed milk
            </h1>
            <p className="text-7xl font-bold py-6 border-b-2 text-center lg:text-left">
              100 %{" "}
            </p>
            <p className="text-2xl font-bold py-6 text-center lg:text-left">
              Natural & Unadultrated
            </p>
          </div>
        </div>

        {/* image */}
        <img
          src={Dtm}
          alt="Product Image"
          className="lg:absolute w-72"
          style={{ filter: "drop-shadow(0 16px 22px rgba(0, 0, 0))" }}
        />

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center items-center lg:min-h-screen w-11/12 mx-auto p-4 rounded-lg lg:rounded-none mt-6 lg:mt-0">
          <div className="lg:w-[600px] lg:pl-48">
            <h1 className="capitalize font-bold text text-5xl py-4">1 Litre</h1>
            <p className="text-xl">
              For Those who wants to stay in shape, but also want the wholesome
              goodness of milk , A2 skimmed milk has come to your rescue !
            </p>
            <p className="text-2xl font-bold py-4 text-neutral-800">Rs. 110</p>
          </div>
        </div>
      </div>

      {/* Product-5 */}
      <div className="min-h-screen flex justify-center items-center relative bg-white text-black flex-col lg:flex-row pt-28 md:pt-36 lg:pt-0 pb-6 lg:pb-0">
        {/* Left Side */}
        <div className="lg:w-1/2 flex justify-center items-center lg:min-h-screen w-11/12 mx-auto">
          <div className="lg:w-fit lg:pr-12">
            <h1 className="capitalize font-bold text text-5xl py-6 border-b-2 text-center lg:text-left">
              A2 Skimmed milk
            </h1>
            <p className="text-7xl font-bold py-6 border-b-2 text-center lg:text-left">
              100 %{" "}
            </p>
            <p className="text-2xl font-bold py-6 text-center lg:text-left">
              Natural & Unadultrated
            </p>
          </div>
        </div>

        {/* image */}
        <img
          src={paneer}
          alt="Product Image"
          className="lg:absolute w-72"
          style={{ filter: "drop-shadow(0 16px 22px rgba(0, 0, 0))" }}
        />

        {/* Right Side */}
        <div
          className="lg:w-1/2 flex justify-center items-center lg:min-h-screen w-11/12 mx-auto p-4 rounded-lg lg:rounded-none mt-6 lg:mt-0"
          style={{ background: "#d38787" }}
        >
          <div className="lg:w-[600px] lg:pl-48">
            <h1 className="capitalize font-bold text text-5xl py-4">1 Litre</h1>
            <p className="text-xl">
              For Those who wants to stay in shape, but also want the wholesome
              goodness of milk , A2 skimmed milk has come to your rescue !
            </p>
            <p className="text-2xl font-bold py-4 text-neutral-800">Rs. 110</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Products;
