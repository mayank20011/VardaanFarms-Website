import React from "react";
import aboutUsHome from "../../img/fullCream.png";

function Blog5() {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <img
        src={aboutUsHome}
        alt="blog-1"
        className="border-4 border-white rounded-lg mx-auto w-80"
      />
      <div className="flex flex-col gap-6 p-8">
        <div className="flex gap-8">
          {/* for date */}
          <div className="flex  items-center gap-2">
            <i className="fa-solid fa-clock"></i>
            <p className="text-green-600 font-bold">13 January, 2025</p>
          </div>

          {/* for admin */}
          <div className="flex  items-center gap-2">
            <i className="fa-solid fa-user"></i>
            <p className="text-green-600 font-bold">Admin</p>
          </div>
        </div>

        <h1 className="text-4xl font-bold hover:text-green-600 duration-300">
          Buffalo Milk: Rich & Nutritious
        </h1>

        <div className="text-neutral-700 text-lg flex flex-col gap-4">
          <p>
          Buffalo Milk is known for its rich and creamy texture. Here's why you should consider adding buffalo milk to your diet:
          </p>
          <h3 className="text-3xl font-bold text-green-600">High Nutritional Value</h3>
          <p>
          Buffalo milk is packed with essential nutrients. It contains higher levels of calcium, protein, and vitamins compared to cow's milk. This makes it an excellent choice for those seeking a nutrient-rich option.
          </p>
          <h3 className="text-3xl font-bold text-green-600">Rich in Fat</h3>
          <p>
          Buffalo milk has a higher fat content, which gives it a creamy texture and makes it a great option for making dairy products like cheese, butter, and yogurt. The rich taste is loved by many.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
          Good for Bone Health
          </h3>
          <p>
          The high calcium content in buffalo milk helps in maintaining strong bones and teeth. It is especially beneficial for growing children and elderly individuals.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
          Boosts Immune System
          </h3>
          <p>
          Buffalo milk is rich in vitamins like A and D, which are important for a healthy immune system. Regular consumption can help in keeping illnesses at bay.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
          Versatile in Cooking
          </h3>
          <p>
          Buffalo milk can be used in a variety of recipes. Whether you add it to your tea or coffee, use it in desserts, or include it in savory dishes, it enhances the flavor and provides a creamy texture.
          </p>
          <div className="p-4 px-6 border-l border-l-green-600 bg-slate-100 flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-green-600">Conclusion</h3>
            <p>
            In conclusion, buffalo milk is a rich and nutritious addition to your daily diet. It is high in essential nutrients, supports bone health, boosts the immune system, and is versatile in cooking. Try buffalo milk today and enjoy its creamy goodness.
            </p>
          </div>
        </div>

        <div className="border-t border-green-600 py-12 mt-6 flex gap-6 flex-col md:flex-row crbs:flex-col ">
          {/* for tags */}
          <div className="flex gap-2 grow sm:items-center flex-col sm:flex-row crbs:flex-col crbs:items-start">
            <h1 className="text-xl font-bold">Tags: </h1>
            <div className="sm:flex gap-2 grid grid-cols-2">
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                BuffaloMilk
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                Nutrients
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                Creamy
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                Local
              </span>
            </div>
          </div>
          {/* for links */}
          <div className="flex gap-4 items-center text-xl">
            {/* Facebook */}
            <i className="fa-brands fa-facebook-f cursor-pointer hover:text-slate-500 transition"></i>
            {/* Twitter */}
            <i className="fa-brands fa-twitter cursor-pointer hover:text-slate-500 transition"></i>
            {/* instagram */}
            <i className="fa-brands fa-instagram cursor-pointer hover:text-slate-500 transition"></i>
            {/* linkedin */}
            <i className="fa-brands fa-linkedin-in cursor-pointer hover:text-slate-500 transition"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog5;