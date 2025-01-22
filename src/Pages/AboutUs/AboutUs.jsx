import React from "react";
import truck from "../../img/truck.png";
import healthy from "../../img/healthy2.png";
import tag from "../../img/Tag.png";
import support from "../../img/Support.png";
import ourFarm from "../../img/farmR.jpg";
import Pipeline from "../../img/Pipeline.png";
import growth from "../../img/growth.png";
import recipee from "../../img/recipee.png";
import house from "../../img/house.png";
import ef from "../../img/ef.png";
import pasturization from "../../img/pasturization.png";
import aboutUsBanner from "../../img/aboutUsBanner.png";
import Footer from "../../Components/Footer/Footer.jsx";

function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-slate-100">
      <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 border-2 border-slate-100 min-h-screen text-black pb-24">
        {/* key points */}
        <div className="w-full mt-24 md:mt-48 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="text-center">
            <img src={truck} alt="" className="mx-auto" />
            <h1 className="font-bold text-xl">Deliver to your Door</h1>
            <p className="text-slate-500 font-bold text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
              corporis?
            </p>
          </div>

          <div className="text-center">
            <img
              src={healthy}
              alt=""
              className="mx-auto"
              style={{ width: "100px" }}
            />
            <h1 className="font-bold text-xl">Healthy & Nutritious</h1>
            <p className="text-slate-500 font-bold text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
              corporis?
            </p>
          </div>

          <div className="text-center">
            <img src={tag} alt="" className="mx-auto" />
            <h1 className="font-bold text-xl">99% Uptime Guarantee</h1>
            <p className="text-slate-500 font-bold text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
              corporis?
            </p>
          </div>

          <div className="text-center">
            <img src={support} alt="" className="mx-auto" />
            <h1 className="font-bold text-xl">24/7 Customer Support</h1>
            <p className="text-slate-500 font-bold text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
              corporis?
            </p>
          </div>
        </div>

        {/* About Us */}
        <div className="pt-24 flex gap-6 flex-col lg:flex-row">
          {/* Text */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <span className="text-left text-2xl text-green-600 font-bold ">
              About VardaanFarms
            </span>
            <h1 className="text-left text-4xl capitalize font-bold">
              Crafting Dairy Excellence
            </h1>
            <div className="text-left text-neutral-500 font-bold text-md flex flex-col gap-3">
              <span>
                Welcome to Vardaan Farms! We are more than just a dairy product
                company; we are the custodians of tradition, quality, and
                innovation in every delectable morsel we offer.
              </span>
              <span>
                Vardaan Farms' journey began with a vision to enrich lives
                through wholesome products sourced from nature's bounty. From
                field to table, we prioritize freshness and goodness.
              </span>
              <span>
                With unwavering commitment to perfection, we maintain rigorous
                standards of hygiene and safety, ensuring every Vardaan Farms
                product exceeds expectations and delights consumers.
              </span>
            </div>
          </div>

          {/* img */}
          <div className="lg:w-1/2 flex justify-center items-center">
            <img src={ourFarm} alt="" className="rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Our Best Services */}
      <div className="bg-white py-24">
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 text-black flex flex-col gap-12">
          <h1 className="sm:text-center font-bold text-5xl">
            Our Best Vardaan Service
          </h1>

          <p className="sm:text-center text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            alias nemo sed veritatis nobis nostrum minima eaque dignissimos ad
            vitae. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Facere quasi molestias laborum placeat. Ipsa rerum modi autem
            praesentium vel illo expedita magni maxime amet est suscipit,
            corporis accusantium quisquam dolor quas cumque tempore aspernatur!
            Magnam dolorem esse similique iure quod quidem rerum illum ipsum
            facilis autem cum laborum nam consectetur saepe ipsa accusamus harum
            porro tempore, iste cumque architecto! Tempore.
          </p>

          {/* for cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card-1 */}
            <div className="hover:shadow-lg hover:shadow-black p-8 bg-slate-100 rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
              <img src={Pipeline} alt="" className="w-[100px]" />
              <h1 className="text-xl font-bold">Milk Preservation</h1>
              <p className="text-neutral-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat explicabo totam odio quidem consequuntur fuga porro
                amet placeat, suscipit voluptatum nihil, hic molestiae est
                libero dolore! Itaque enim ut tempore?
              </p>
            </div>

            {/* card-2 */}
            <div className="p-8 bg-slate-100 hover:shadow-lg hover:shadow-black rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
              <img src={growth} alt="" className="w-[100px]" />
              <h1 className="text-xl font-bold">High Production</h1>
              <p className="text-neutral-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat explicabo totam odio quidem consequuntur fuga porro
                amet placeat, suscipit voluptatum nihil, hic molestiae est
                libero dolore! Itaque enim ut tempore?
              </p>
            </div>

            {/* card-3 */}
            <div className="p-8 bg-slate-100 hover:shadow-lg hover:shadow-black rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
              <img src={recipee} alt="" className="w-[100px]" />
              <h1 className="text-xl font-bold">Featured Recipe</h1>
              <p className="text-neutral-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat explicabo totam odio quidem consequuntur fuga porro
                amet placeat, suscipit voluptatum nihil, hic molestiae est
                libero dolore! Itaque enim ut tempore?
              </p>
            </div>

            {/* Card-4 */}
            <div className="p-8 bg-slate-100 hover:shadow-lg hover:shadow-black rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
              <img src={house} alt="" className="w-[100px]" />
              <h1 className="text-xl font-bold">Recomended For Babies</h1>
              <p className="text-neutral-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat explicabo totam odio quidem consequuntur fuga porro
                amet placeat, suscipit voluptatum nihil, hic molestiae est
                libero dolore! Itaque enim ut tempore?
              </p>
            </div>

            {/* Card-5 */}
            <div className="p-8 hover:shadow-lg hover:shadow-black bg-slate-100 rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
              <img src={ef} alt="" className="w-[100px]" />
              <h1 className="text-xl font-bold">Environmentally Friendly</h1>
              <p className="text-neutral-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat explicabo totam odio quidem consequuntur fuga porro
                amet placeat, suscipit voluptatum nihil, hic molestiae est
                libero dolore! Itaque enim ut tempore?
              </p>
            </div>

            {/* Card-6 */}
            <div className="p-8 bg-slate-100  hover:shadow-lg hover:shadow-black rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
              <img src={pasturization} alt="" className="w-[100px]" />
              <h1 className="text-xl font-bold">Reliable pasturization</h1>
              <p className="text-neutral-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat explicabo totam odio quidem consequuntur fuga porro
                amet placeat, suscipit voluptatum nihil, hic molestiae est
                libero dolore! Itaque enim ut tempore?
              </p>
            </div>
          </div>

          {/* For Numbers */}
          <div className="p-8 bg-green-200 grid sm:grid-cols-2 lg:grid-cols-4 shadow-lg shadow-slate-200">
            <div className="flex flex-col p-4 w-fit mx-auto">
              <h1 className="text-5xl text-center">
                2452 <span className="text-blue-600">+</span>
              </h1>
              <h3 className="text-xl text-center">Happy Clients</h3>
            </div>

            <div className="flex flex-col p-4 w-fit mx-auto">
              <h1 className="text-5xl text-center">
                162 <span className="text-orange-600">+</span>
              </h1>
              <h3 className="text-xl text-center">Kind Of Dairy</h3>
            </div>

            <div className="flex flex-col p-4 w-fit mx-auto">
              <h1 className="text-5xl text-center">
                15 <span className="text-orange-600">+</span>
              </h1>
              <h3 className="text-xl">Years Of Experience</h3>
            </div>

            <div className="flex flex-col p-4 w-fit mx-auto">
              <h1 className="text-5xl text-center">
                72 <span className="text-blue-600">+</span>
              </h1>
              <h3 className="text-xl">Team Members</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-100 w-full">
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 text-black flex flex-col gap-12 md:gap-24 py-12">
          {/* left */}
          <div className="flex gap-6">
            <div className="md:w-3/5 flex flex-col gap-6">
              <div className="md:w-fit md:mx-auto flex gap-4 text-5xl md:text-center">
                <i className="fa-solid fa-check text-green-600"></i>
                <h1 className="text-green-600">Our Mission</h1>
              </div>
              <p className="font-bold text-neutral-500 text-xl">
                At Vardaan Farms, we blend the best of tradition and innovation
                to deliver premium dairy delights. With our contented cows,
                every sip and bite is a testament to purity and joy. From
                velvety milk to delectable cheeses, we’re dedicated to
                excellence and sustainability, making every dairy experience
                memorable.
              </p>
            </div>
            <img src="" alt="" className="w-2/5" />
          </div>

          {/* Right */}
          <div className="flex gap-6">
            <img src="" alt="" className="w-2/5" />
            <div className="md:w-3/5 flex flex-col gap-6">
              <div className="md:w-fit md:mx-auto flex gap-4 text-5xl md:text-center">
                <i className="fa-solid fa-check text-green-600"></i>
                <h1 className="text-green-600">Our Mission</h1>
              </div>
              <p className="font-bold text-neutral-500 text-xl">
                At Vardaan Farms, we blend the best of tradition and innovation
                to deliver premium dairy delights. With our contented cows,
                every sip and bite is a testament to purity and joy. From
                velvety milk to delectable cheeses, we’re dedicated to
                excellence and sustainability, making every dairy experience
                memorable.
              </p>
            </div>
          </div>

          <img src={aboutUsBanner} alt="" className="rounded-3xl"/>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default AboutUs;
