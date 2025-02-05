import React from "react";
import aboutUsHome from "../../img/fullCream.png";

function Blog4() {
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
            <p className="text-green-600 font-bold">December 1, 2024</p>
          </div>

          {/* for admin */}
          <div className="flex  items-center gap-2">
            <i className="fa-solid fa-user"></i>
            <p className="text-green-600 font-bold">Admin</p>
          </div>
        </div>

        <h1 className="text-4xl font-bold hover:text-green-600 duration-300">
        Light and Tasty: Double Toned Milk
        </h1>

        <div className="text-neutral-700 text-lg flex flex-col gap-4">
          <p>
          Double Toned Milk is a lighter choice that does not compromise on taste. Here's why double toned milk is a great option for you and your family:
          </p>
          <h3 className="text-3xl font-bold text-green-600">Low in Fat, High in Nutrition</h3>
          <p>
          Double toned milk is lower in fat compared to regular milk, but it still retains essential nutrients like calcium, protein, and vitamins. This makes it a healthier option for those looking to reduce fat intake while maintaining good nutrition.
          </p>
          <h3 className="text-3xl font-bold text-green-600">Easier to Digest</h3>
          <p>
          Many people find double toned milk easier to digest. The reduced fat content makes it gentler on the stomach, making it a good choice for those with digestive sensitivities.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
            Perfect for Daily Use
          </h3>
          <p>
          Double toned milk is versatile and can be used in your daily diet. Whether you add it to your tea or coffee, use it in smoothies, or include it in cooking, double toned milk adds a touch of health to your everyday routine.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
            Supports Local Farmers
          </h3>
          <p>
          Choosing double toned milk from local sources supports local farmers and promotes sustainable farming practices. By opting for locally-sourced milk, you are contributing to the well-being of your community and the environment.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
            Good for Weight Management
          </h3>
          <p>
          Double toned milk is a good choice for those looking to manage their weight. It provides the necessary nutrients while being lower in calories and fat, helping you maintain a healthy weight.
          </p>
          <div className="p-4 px-6 border-l border-l-green-600 bg-slate-100 flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-green-600">Conclusion</h3>
            <p>
            In conclusion, double toned milk is a light and tasty addition to your daily diet. It is low in fat, high in nutrition, easy to digest, and supports local farmers. Try double toned milk today and enjoy its benefits.
            </p>
          </div>
        </div>

        <div className="border-t border-green-600 py-12 mt-6 flex gap-6 flex-col md:flex-row crbs:flex-col">
          {/* for tags */}
          <div className="flex gap-2 grow sm:items-center flex-col sm:flex-row crbs:flex-col crbs:items-start">
            <h1 className="text-xl font-bold">Tags: </h1>
            <div className="sm:flex gap-2 grid grid-cols-2">
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
               DoubleTonedMilk
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                LowFat
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                Digestible
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

export default Blog4;