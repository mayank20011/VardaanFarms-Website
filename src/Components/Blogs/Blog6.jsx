import React from "react";
import aboutUsHome from "../../img/fullCream.png";

function Blog6() {
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
            <p className="text-green-600 font-bold">February 4, 2024</p>
          </div>

          {/* for admin */}
          <div className="flex  items-center gap-2">
            <i className="fa-solid fa-user"></i>
            <p className="text-green-600 font-bold">Admin</p>
          </div>
        </div>

        <h1 className="text-4xl font-bold hover:text-green-600 duration-300">
        Sustainability On A Dairy Farm
        </h1>

        <div className="text-neutral-700 text-lg flex flex-col gap-4">
          <p>
          Sustainability is a crucial aspect of modern dairy farming. Here’s how dairy farms can adopt sustainable practices to benefit the environment, the community, and the dairy industry:
          </p>
          <h3 className="text-3xl font-bold text-green-600">Efficient Resource Management</h3>
          <p>
          One of the key aspects of sustainable dairy farming is the efficient use of resources like water, feed, and energy. By implementing practices such as water recycling and using energy-efficient equipment, farmers can significantly reduce their environmental footprint.
          </p>
          <h3 className="text-3xl font-bold text-green-600">Animal Welfare</h3>
          <p>
          Ensuring the well-being of dairy cows is essential for a sustainable farm. Healthy cows produce high-quality milk, and adopting humane practices like providing comfortable living conditions, proper nutrition, and regular veterinary care ensures their welfare.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
          Waste Management
          </h3>
          <p>
          Proper waste management is vital for sustainability. Dairy farms can implement systems to convert cow manure into biogas or organic fertilizer. This not only reduces waste but also provides an additional source of energy or revenue for the farm.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
          Biodiversity Conservation
          </h3>
          <p>
          Maintaining biodiversity on and around the farm is another important aspect. By preserving natural habitats and planting diverse crops, dairy farms can support local wildlife and enhance the resilience of the ecosystem.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
          Local and Sustainable Sourcing
          </h3>
          <p>
          Using locally-sourced feed and other inputs can reduce the carbon footprint of the farm. Additionally, sourcing sustainably-produced feed supports other environmentally-friendly agricultural practices.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
          Renewable Energy
          </h3>
          <p>
          Investing in renewable energy sources such as solar panels or wind turbines can help dairy farms reduce their dependence on fossil fuels. This not only cuts down on greenhouse gas emissions but also lowers energy costs in the long run.
          </p>
          <h3 className="text-3xl font-bold text-green-600">
          Community Engagement
          </h3>
          <p>
          Engaging with the local community and promoting sustainable practices helps build a supportive network. Education and outreach programs can raise awareness about the importance of sustainability and encourage others to adopt eco-friendly practices.
          </p>
          <div className="p-4 px-6 border-l border-l-green-600 bg-slate-100 flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-green-600">Conclusion</h3>
            <p>
            In conclusion, sustainability on a dairy farm involves a holistic approach that includes efficient resource management, animal welfare, waste management, biodiversity conservation, local sourcing, renewable energy, and community engagement. By adopting these practices, dairy farms can contribute to a healthier planet and a thriving agricultural industry.
            </p>
          </div>
        </div>

        <div className="border-t border-green-600 py-12 mt-6 flex gap-6 flex-col md:flex-row">
          {/* for tags */}
          <div className="flex gap-2 grow sm:items-center flex-col sm:flex-row">
            <h1 className="text-xl font-bold">Tags: </h1>
            <div className="sm:flex gap-2 grid grid-cols-2">
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
               Sustainable
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                Dairy
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                Resource
              </span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-md font-bold text-center h-fit">
                Animal
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

export default Blog6;