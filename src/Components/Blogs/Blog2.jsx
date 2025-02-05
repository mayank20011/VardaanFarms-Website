import React from "react";
import aboutUsHome from "../../img/fullCream.png";

function Blog2() {
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
            <p className="text-green-600 font-bold">17 August, 2024</p>
          </div>

          {/* for admin */}
          <div className="flex  items-center gap-2">
            <i className="fa-solid fa-user"></i>
            <p className="text-green-600 font-bold">Admin</p>
          </div>
        </div>

        <h1 className="text-4xl font-bold hover:text-green-600 duration-300">
          Enjoy Full Cream Milk Daily
        </h1>

        <div className="text-neutral-700 text-lg flex flex-col gap-4">
          <p>
            Full cream milk is a rich and creamy type of milk that is perfect
            for your daily diet. Here's why full cream milk is a great choice
            for you and your family:
          </p>
          <h3 className="text-3xl font-bold text-green-600">Nutrient-Packed</h3>
          <p>
            Full cream milk is packed with essential nutrients. It contains
            calcium, which is important for strong bones and teeth. It also has
            vitamins like A, D, and B12, which are essential for overall health.
            The natural creaminess ensures you get the best quality.
          </p>
          <h3 className="text-3xl font-bold text-green-600">Energy Boost</h3>
          <p>
            Full cream milk provides a good source of energy. The natural fats
            in the milk help keep you full and satisfied, making it a great
            option for breakfast or a mid-day snack.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
            Versatile in Cooking
          </h3>
          <p>
            Full cream milk is perfect for all your cooking needs. Whether you
            use it in your tea or coffee, for baking, or in savory dishes, it
            adds a rich and creamy texture to your recipes. It's a versatile
            ingredient that enhances the flavor of your meals.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
            Supports Local Farmers
          </h3>
          <p>
            Choosing full cream milk from local sources supports local farmers
            and promotes sustainable farming practices. By opting for
            locally-sourced milk, you are contributing to the well-being of your
            community and the environment.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
            Good for Growing Kids
          </h3>
          <p>
            Full cream milk is an excellent choice for growing kids. It provides
            the necessary nutrients for their development and helps in building
            strong bones and teeth. The creamy taste is also loved by children,
            making it easier to include in their diet.
          </p>
          <div className="p-4 px-6 border-l border-l-green-600 bg-slate-100 flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-green-600">Conclusion</h3>
            <p>
              In conclusion, full cream milk is a delicious and nutritious
              addition to your daily diet. It is packed with essential
              nutrients, provides energy, supports local farmers, and is perfect
              for cooking. Try full cream milk today and enjoy its rich and
              creamy goodness.
            </p>
          </div>
        </div>

        <div className="border-t border-green-600 py-12 mt-6 flex gap-6 flex-col md:flex-row crbs:flex-col">
          {/* for tags */}
          <div className="flex gap-2 grow sm:items-center flex-col sm:flex-row crbs:flex-col crbs:items-start">
            <h1 className="text-xl font-bold">Tags: </h1>
            <div className="sm:flex gap-2 grid grid-cols-2">
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                FullCreamMilk
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                Nutrients
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                Energizer
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

export default Blog2;
