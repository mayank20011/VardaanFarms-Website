import React from "react";
import truck from "../../img/truck.png";
import healthy from "../../img/healthy2.png";
import tag from "../../img/Tag.png";
import support from "../../img/Support.png";
import Pipeline from "../../img/Pipeline.png";
import growth from "../../img/growth.png";
import recipee from "../../img/recipee.png";
import house from "../../img/house.png";
import ef from "../../img/ef.png";
import pasturization from "../../img/pasturization.png";
import aboutUsBanner from "../../img/aboutUsBanner.png";
import ourMission from "../../img/ourMission.jpg";
import ourVission from "../../img/ourVission.jpg";
import ourFarmCowMilking from "../../img/ourFarmCowMilking.jpg";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const AboutUs = ({ totalPaddingToGive }) => {
  useEffect(() => {
    const numberNodelist = document.querySelectorAll(".number");
    numberNodelist.forEach((numberSpan) => {
      let start = 1;
      let end = numberSpan.attributes[`data-val`].value;
      gsap.to({val:start}, {
        scrollTrigger:{
          trigger: numberSpan,
          scrollber:"body",
          start:"top 80%"
        },
        duration:1.7,
        val:end,
        roundProps:"val",
        onUpdate: function (){
          numberSpan.innerHTML = this.targets()[0].val;
        },
        ease:"power1.inOut"
      });
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Vardaan Farms</title>
        <meta
          name="description"
          content="Learn about the history and values of Vardaan Farms. Blending tradition and modernity in dairy farming, we provide organic, sustainable dairy products."
        />
        <meta
          name="keywords"
          content="Vardaan Farms, about Vardaan Farms, dairy farm history, sustainable dairy farming, organic dairy products, farm history, dairy industry"
        />
        <meta property="og:title" content="About Us - Vardaan Farms" />
        <meta
          property="og:description"
          content="Learn about the history and values of Vardaan Farms. Blending tradition and modernity in dairy farming, we provide organic, sustainable dairy products."
        />
        <meta property="og:image" content={ourMission} />
        <meta
          property="og:url"
          content="https://vardaanfarms.com/aboutUs"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Vardaan Farms" />
        <meta
          name="twitter:description"
          content="Learn about the history and values of Vardaan Farms. Blending tradition and modernity in dairy farming, we provide organic, sustainable dairy products."
        />
        <meta name="twitter:image" content={ourMission} />
        <link rel="canonical" href="https://www.vardaanfarms.com/aboutUs" />
      </Helmet>
      <div
        className="min-h-screen w-full bg-slate-100"
        style={{ paddingTop: `${totalPaddingToGive}px` }}
      >
        <div className="pt-14 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 border-2 border-slate-100 min-h-screen text-black pb-24">
          <div className="w-full grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="text-center shadow-2xl p-4 rounded-lg bg-white border">
              <img
                src={truck}
                alt="truck"
                className="mx-auto"
                loading="lazy"
                style={{ width: "100px", height: "100px" }}
              />

              <h1 className="font-bold text-xl">Deliver to your Door</h1>
              <p className="text-sm">
                We bring fresh and pure dairy products straight to your
                doorstep. Enjoy the convenience of farm-fresh milk and more
                delivered daily.
              </p>
            </div>

            <div className="text-center shadow-2xl p-4 rounded-lg bg-white border">
              <img
                src={healthy}
                alt="love Sign"
                className="mx-auto"
                style={{ width: "100px", height: "100px" }}
                loading="lazy"
              />
              <h1 className="font-bold text-xl">Healthy & Nutritious</h1>
              <p className="text-sm">
                Our dairy products are packed with essential nutrients, ensuring
                your family stays healthy and strong every day.
              </p>
            </div>

            <div className="text-center shadow-2xl p-4 rounded-lg bg-white border">
              <img
                src={tag}
                alt="tag"
                className="mx-auto"
                loading="lazy"
                style={{ width: "100px", height: "100px" }}
              />
              <h1 className="font-bold text-xl">99% Uptime Guarantee</h1>
              <p className="text-sm">
                We promise reliable service and timely delivery, so you always
                have the dairy products you need.
              </p>
            </div>

            <div className="text-center shadow-2xl p-4 rounded-lg bg-white border">
              <img
                src={support}
                alt="customer Support"
                className="mx-auto"
                loading="lazy"
                style={{ width: "100px", height: "100px" }}
              />
              <h1 className="font-bold text-xl">24/7 Customer Support</h1>
              <p className="text-sm">
                Our friendly customer support team is available around the clock
                to help with any questions or issues.
              </p>
            </div>
          </div>

          <div className="pt-24 flex gap-12 flex-col lg:flex-row">
            <div className="lg:w-1/2 flex flex-col gap-6 lg:pr-6">
              <span className="text-left text-2xl text-green-600 font-bold ">
                About VardaanFarms
              </span>
              <h1 className="text-left text-4xl capitalize font-bold">
                Crafting Dairy Excellence
              </h1>
              <div className="text-left text-black text-lg text-md flex flex-col gap-3">
                <span>
                  Welcome to Vardaan Farms! We are more than just a dairy
                  product company; we are the custodians of tradition, quality,
                  and innovation in every delectable morsel we offer.
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

            <div
              className="lg:w-1/2 flex justify-center items-center rounded-2xl shadow-2xl shadow-black overflow-hidden h-fit aspect-[16/9]"
              style={{ border: "3px solid #d1d5db" }}
            >
              <img
                src={ourFarmCowMilking}
                alt="cow standing in field"
                className="hover:scale-110 transition w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="bg-white py-24">
          <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 text-black flex flex-col gap-12">
            <h1 className="sm:text-center font-bold text-4xl md:text-5xl">
              Our Best Vardaan Service
            </h1>

            <p className="sm:text-center text-xl">
              At VardaanFarms, we are dedicated to providing top-quality dairy
              products directly from our farm to your doorstep. Our commitment
              ensures that you receive fresh, natural, and delicious dairy
              products every day. With our reliable service, you can trust the
              quality and care that goes into each product we deliver.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="hover:shadow-lg hover:shadow-black p-8 bg-slate-100 rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
                <img
                  src={Pipeline}
                  alt="Milk Preservation"
                  className="w-[100px]"
                  loading="lazy"
                />
                <h1 className="text-xl font-bold">Milk Preservation</h1>
                <p className="text-neutral-700">
                  We use the best techniques to keep our milk fresh and pure.
                  From the moment it leaves our cows to the time it reaches your
                  home, our milk is handled with utmost care to preserve its
                  natural taste and nutrients.
                </p>
              </div>

              <div className="p-8 bg-slate-100 hover:shadow-lg hover:shadow-black rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
                <img
                  src={growth}
                  alt="growth"
                  className="w-[100px]"
                  loading="lazy"
                />
                <h1 className="text-xl font-bold">High Production</h1>
                <p className="text-neutral-700">
                  Our farm is equipped with modern facilities that help us
                  produce high-quality dairy products in large quantities. This
                  ensures that we meet all your needs, providing fresh supplies
                  daily without compromising on quality.
                </p>
              </div>

              <div className="p-8 bg-slate-100 hover:shadow-lg hover:shadow-black rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
                <img
                  src={recipee}
                  alt="Recipe"
                  className="w-[100px]"
                  loading="lazy"
                />
                <h1 className="text-xl font-bold">Featured Recipe</h1>
                <p className="text-neutral-700">
                  Discover mouth-watering recipes made with VardaanFarms' dairy
                  products. From creamy curries to delicious desserts, our dairy
                  adds a special touch to every dish. Perfect for making every
                  meal a celebration.
                </p>
              </div>

              <div className="p-8 bg-slate-100 hover:shadow-lg hover:shadow-black rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
                <img
                  src={house}
                  alt="House"
                  className="w-[100px]"
                  loading="lazy"
                />
                <h1 className="text-xl font-bold">Recomended For Babies</h1>
                <p className="text-neutral-700">
                  Our dairy products are safe and packed with essential
                  nutrients, making them a great choice for your little ones.
                  They provide the necessary vitamins and minerals to support
                  healthy growth and development.
                </p>
              </div>

              <div className="p-8 hover:shadow-lg hover:shadow-black bg-slate-100 rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
                <img
                  src={ef}
                  alt="Environmet Friendly"
                  className="w-[100px]"
                  loading="lazy"
                />
                <h1 className="text-xl font-bold">Environmentally Friendly</h1>
                <p className="text-neutral-700">
                  We believe in eco-friendly farming practices that protect
                  nature. Our methods ensure that we produce pure, natural
                  products while caring for the environment. This way, you get
                  the best of both worlds.
                </p>
              </div>

              <div className="p-8 bg-slate-100  hover:shadow-lg hover:shadow-black rounded-md flex gap-4 flex-col sm:hover:-translate-y-3 transition shadow-lg shadow-black sm:shadow-none">
                <img
                  src={pasturization}
                  alt="Pasturization"
                  className="w-[100px]"
                  loading="lazy"
                />
                <h1 className="text-xl font-bold">Reliable pasturization</h1>
                <p className="text-neutral-700">
                  Our pasteurization process is reliable and keeps your milk
                  safe and delicious. It ensures that all harmful bacteria are
                  removed while preserving the natural goodness of the milk, so
                  you can enjoy it with peace of mind.
                </p>
              </div>
            </div>

            <div className="p-8 bg-green-200 grid sm:grid-cols-2 lg:grid-cols-4 shadow-lg shadow-slate-200">
              <div className="flex flex-row gap-4 sm:gap-0 sm:flex-col p-4 w-fit mx-auto items-start">
                <img
                  src="https://img.icons8.com/?size=100&id=22122&format=png&color=000000"
                  alt="clients Icon"
                  className="w-20"
                />
                <div>
                  <h1 className="text-3xl sm:text-5xl">
                    <span className="number" data-val="2452">
                      0000
                    </span>
                    <span className="text-blue-600">+</span>
                  </h1>
                  <h2 className="text-xl mx-auto">Happy Clients</h2>
                </div>
              </div>

              <div className="flex flex-row gap-4 sm:gap-0 sm:flex-col p-4 w-fit mx-auto items-start">
                <img
                  src="https://img.icons8.com/?size=100&id=13010&format=png&color=000000"
                  alt="Shop"
                  className="w-20"
                />
                <div>
                  <h1 className="text-3xl sm:text-5xl">
                    <span className="number" data-val="162">
                      000
                    </span>
                    <span className="text-orange-600">+</span>
                  </h1>
                  <h2 className="text-xl">Kind Of Dairy</h2>
                </div>
              </div>

              <div className="flex flex-row gap-4 sm:gap-0 sm:flex-col p-4 w-fit mx-auto items-start">
                <img
                  src="https://img.icons8.com/?size=100&id=aREqE_6a_Aq0&format=png&color=000000"
                  alt="map"
                  className="w-20"
                />
                <div>
                  <h1 className="text-4xl sm:text-5xl">
                    <span className="number" data-val="15">
                      00
                    </span>
                    <span className="text-orange-600">+</span>
                  </h1>
                  <h2 className="text-xl">States Covered</h2>
                </div>
              </div>

              <div className="flex flex-row gap-4 sm:gap-0 sm:flex-col p-4 w-fit mx-auto items-start">
                <img
                  src="https://img.icons8.com/?size=100&id=hlk4Wa3wyoi9&format=png&color=000000"
                  alt="Team"
                  className="w-20"
                />
                <div>
                  <h1 className="text-4xl sm:text-5xl">
                    <span className="number" data-val="72">
                      00
                    </span>
                    <span className="text-blue-600">+</span>
                  </h1>
                  <h2 className="text-xl">Team Members</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 w-full">
          <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 text-black flex flex-col gap-12 py-12">
            <div className="flex gap-6 flex-col md:flex-row justify-evenly items-center tab:flex-col">
              <div className="md:w-2/5 flex flex-col gap-6 tab:w-full">
                <div className="flex gap-4 text-5xl md:text-center">
                  <i className="fa-solid fa-check text-green-600"></i>
                  <h1 className="text-green-600">Our Mission</h1>
                </div>
                <p
                  className="text-xl"
                  style={{ filter: "drop-shadow(2px 2px 2px white)" }}
                >
                  At Vardaan Farms, we blend the best of tradition and
                  innovation to deliver premium dairy delights. With our
                  contented cows, every sip and bite is a testament to purity
                  and joy. From velvety milk to delectable cheeses, we’re
                  dedicated to excellence and sustainability, making every dairy
                  experience memorable.
                </p>
              </div>
              <img
                src={ourMission}
                alt="sleeping Calf"
                className="md:w-2/5 rounded-3xl shadow-2xl shadow-black tab:w-full"
                loading="lazy"
                style={{ border: "3px solid #d1d5db" }}
              />
            </div>

            <div className="flex gap-6 flex-col md:flex-row justify-evenly items-center tab:flex-col">
              <img
                src={ourVission}
                alt="calf staring"
                className="md:w-2/5 rounded-3xl shadow-2xl shadow-black tab:w-full"
                loading="lazy"
                style={{ border: "3px solid #d1d5db" }}
              />
              <div className="md:w-2/5 flex flex-col gap-6 tab:w-full">
                <div className="flex gap-4 text-5xl md:text-center">
                  <i className="fa-solid fa-check text-green-600"></i>
                  <h1 className="text-green-600">Our Vission</h1>
                </div>
                <p className="text-xl">
                  At Vardaan Farms, we aim to set the standard in premium dairy,
                  renowned for its quality, sustainability, and customer
                  delight. We envision a future where our legacy flourishes,
                  bridging communities with the pure goodness of nature.
                  Grounded in tradition yet propelled by innovation, we strive
                  to enrich lives globally with our exceptional dairy offerings.
                </p>
              </div>
            </div>

            <img
              src={aboutUsBanner}
              alt="VardaanFarms Description Banner"
              className="rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
