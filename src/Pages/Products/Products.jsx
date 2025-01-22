import React from "react";
import buffaloGhee from "../../img/buffaloGhee.png";
import Footer from "../../Components/Footer/Footer.jsx";
function Products() {
  return (
    <div className="min-h-screen">
      {/* Product-1 */}
      <div className="min-h-screen flex justify-center items-center relative border-2 bg-white text-black flex-col lg:flex-row pt-28 md:pt-36 lg:pt-0 pb-6 lg:pb-0">

        {/* Left Side */}
        <div className="lg:w-1/2 flex justify-center items-center lg:min-h-screen order-2 w-11/12 mx-auto">
          <div className="lg:w-fit lg:pr-12">
            <h1 className="capitalize font-bold text text-5xl py-6 border-b-2 text-center lg:text-left">
              A2 Skimmed milk
            </h1>
            <p className="text-7xl font-bold py-6 border-b-2 text-center lg:text-left">100 % </p>
            <p className="text-2xl font-bold py-6 text-center lg:text-left">Natural & Unadultrated</p>
          </div>
        </div>

        {/* image */}
        <img src={buffaloGhee} alt="Product Image" className="lg:absolute order-1" style={{filter:"drop-shadow(0 16px 22px rgba(0, 0, 0))"}}/>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center items-center lg:min-h-screen order-3 w-11/12 mx-auto p-4 rounded-lg lg:rounded-none" style={{background:"#f2eecb"}}>
          <div className="lg:w-[600px] lg:pl-48">
            <h1 className="capitalize font-bold text text-5xl py-4">
              1 Litre
            </h1>
            <p className="text-xl">For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !</p>
            <p className="text-2xl font-bold py-4 text-neutral-800">Rs.  110</p>
          </div>
        </div>

      </div>


      {/* Product-2 */}

      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Products;
