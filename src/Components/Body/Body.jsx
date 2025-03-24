import React from "react";
import TestimonialSwiper from "../TestimonialSwiper/TestimonialSwiper";
import ShowcaseSwiper from "../showcaseSwiper/ShowcaseSwiper";
import { Link } from "react-router-dom";
import farmer1 from "../../img/farmer1.jpeg";
import farmer2 from "../../img/farmer2.jpg";
import farmer3 from "../../img/farmer3.jpg";
import farmer5 from "../../img/farmer5.jpg";
import FarmCards from "../FarmCards/FarmCards";
import clientCow2 from "../../img/clientCow2.jpg";
import gfoFarm from "../../img/gfoFarm.png";
import AllProductSwiper from "../AllProductSwiper/AllProductSwiper";
import { Helmet } from "react-helmet-async";
import WhyUsCards from "../whyUsCrads/WhyUsCards";
import Faq from "../FAQ/Faq";
import CategoryContainer from "../categoryContainer/CategoryContainer";
import { productCategory } from "../categoryContainer/productCategoryDetail.js";

const Body = ({ totalPaddingToGive, setReturnPage }) => {
  
  return (
    <>
      <Helmet>
        <title>Vardaan Farms - Farm Fresh Best Organic Milk In Gurgaon</title>
        <meta name="description" content="At Vardaan Farms We Sell Fresh, Hight-Protein, Organic & Cultured Milk For Healthy Living, 100% Natural & Chemical-Free"/>
        <meta
          property="og:title"
          content="Vardaan Farms - Farm Fresh Best Organic Milk In Gurgaon"
        />
        <meta
          property="og:description"
          content="At Vardaan Farms We Sell Fresh, Hight-Protein, Organic & Cultured Milk For Healthy Living, 100% Natural & Chemical-Free"
        />
        <meta property="og:image" content={clientCow2} />
        <meta property="og:url" content="https://www.vardaanfarms.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vardaan Farms - Farm Fresh Best Organic Milk In Gurgaon"
        />
        <meta
          name="twitter:description"
          content="Discover Vardaan Farms - blending tradition and modernity in dairy farming. Enjoy our sustainable, organic dairy products including milk, paneer, curd, and ghee."
        />
        <meta name="twitter:image" content={clientCow2} />
        <link rel="canonical" href="https://www.vardaanfarms.com/" />
        <meta name="keywords" content="high protein milk, fresh milk, best organic milk, cultured milk" />
      </Helmet>

      <section
        className="w-full bg-slate-100"
        style={
          window.innerWidth > 768
            ? { paddingTop: `${totalPaddingToGive}px` }
            : {}
        }
      >
        <ShowcaseSwiper />
      </section>

      <section className="w-full bg-slate-100 pt-12 md:pt-16 overflow-hidden pb-16">
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
          <section className="flex gap-12 flex-col md:flex-row tab:flex-col">
            <div className="md:w-1/2 flex flex-col gap-8 tab:w-full">
              <span className="text-green-600 text-2xl font-bold" id="aboutUs">
                About Us
              </span>
              <h1
                className="text-3xl md:text-4xl font-bold text-black"
                id="knowAbout"
              >
                Farm-Fresh Dairy, Trusted by Families & Businesses
              </h1>
              <p className="text-black text-xl" id="aboutUsP">
                At Vardaan Farms, we bring you the best organic milk and fresh
                milk, sourced from healthy, grass-fed cows. With no
                preservatives or additives, our fresh milk retains its natural
                purity and nutrition—just as nature intended. Whether you're
                looking for a nutritious choice for your family or a reliable
                supplier for your business, we ensure quality in every drop. Our
                high-protein milk and cultured milk provide additional health
                benefits for all ages.
              </p>
            </div>

            <div className="md:w-1/2 md:h-[400px] flex justify-center md:flex-row-reverse order-1 md:order-2 spacing-6 rounded-3xl shadow-2xl shadow-black tab:w-full aspect-[16/9]">
              <img
                src={gfoFarm}
                alt="cow Image"
                className="w-full rounded-3xl filter brightness-75 h-auto"
                id="sinceImg"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">
          <section className="flex flex-col gap-12 py-8 text-black">
            <span
              className="text-green-600 text-2xl font-bold text-center"
              id="serviceSpan"
            >
              Product Categories
            </span>
            <p className="text-2xl text-center leading-8 w-11/12 mx-auto">Experience the goodness of farm-fresh dairy products, crafted with care and delivered with love.</p>
            <CategoryContainer details={productCategory[0]}/>
            <CategoryContainer details={productCategory[1]}/>
          </section>
        </div>
      </section>

      <section className="bg-slate-100 py-12">
        <div className="mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0">

          <div className="flex flex-col md:flex-row gap-6 md:gap-12 pb-8">
            <div className="w-full md:w-2/5 flex flex-col justify-between gap-12">
              <span
                className="text-green-600 text-2xl font-bold "
                id="serviceSpan"
              >
                Why Vardaan Farms?
              </span>
              <h1
                className="text-black text-3xl font-bold"
                id="whatWeOffer"
              >
                Quality & Purity in Every Drop
              </h1>

              <div className="w-full aspect-[16/12] border-2 rounded-md shadow-md">
              <img src="" alt="" className="w-full"/>
              </div>
            </div>
            <div className="w-full md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 self-center">
                <WhyUsCards number={"01"} heading={"Fresh Milk, Delivered Daily"} pera={"No preservatives, no compromise"}/>
                <WhyUsCards number={"02"} heading={"High-Protein Milk"} pera={"Packed with essential nutrients, great for fitness & active lifestyles"}/>
                <WhyUsCards number={"03"} heading={"Best Organic Milk"} pera={"Farm-to-table purity, no artificial processing"}/>
                <WhyUsCards number={"04"} heading={"Probiotic-Rich Cultured Milk"} pera={"Supports digestion & gut health naturally"}/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-my-background bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-50"></div>
        <section className="w-full flex flex-col gap-12 relative z-10 px-4">
          <span
            className="text-green-600 text-center text-2xl font-bold"
            id="organicDairyServices"
            style={{ filter: "drop-shadow(2px 2px 1px white)" }}
          >
            Organic Dairy Services
          </span>
          <h1
            className="text-5xl text-center font-bold text-white md:w-4/5 mx-auto vs:text-2xl"
            id="organicDairyServicesH"
          >
            Delivering organic integrity to everyone, everywhere.
          </h1>
          <Link
            id="organicDairyServicesB"
            className="mx-auto w-fit px-4 py-2 text-sm md:text-lg md:px-8 md:py-4 border-2 rounded-md hover:scale-90 transition hover:shadow-xl hover:shadow-white"
            to={"/contactUs"}
          >
            Contact Us
          </Link>
        </section>
      </section>

      <section className="bg-white pb-12 overflow-x-hidden">
        <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-10 mx-auto flex flex-col gap-6 md:gap-8">
          {/* heading */}
          <h1 className="text-green-600 text-center text-2xl font-bold">
            Shop
          </h1>

          <h1 className="text-center text-black text-5xl font-bold">
            Our Products
          </h1>

          <AllProductSwiper setReturnPage={setReturnPage} />
        </div>
      </section>

      <section className="bg-slate-100 py-12 pb-24">
        <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-10 mx-auto flex justify-center items-center flex-col gap-8">
          <span className="text-green-600 text-2xl font-bold text-center">
            Team
          </span>
          <h1 className="text-5xl font-bold text-black">Our Farmers</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 justify-between">
            {/* card-1 */}
            <FarmCards
              img={farmer1}
              name={"Ramkishan Verma"}
              info={"Caretaker"}
            />
            <FarmCards img={farmer2} name={"Raju Kashyap"} info={"Milkman"} />
            <FarmCards img={farmer3} name={"Summitra Devi"} info={"Milkmaid"} />
            <FarmCards
              img={farmer5}
              name={"Narayan Singh"}
              info={"Caretaker"}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-24 mx-auto flex justify-center items-center flex-col gap-8 text-black">
          <div className="flex gap-12 flex-col md:flex-row w-full tab:flex-col">
            <div className="md:w-1/2 rounded-lg tab:w-full">
              <div className="aspect-[16/9]">
                <img
                  src={clientCow2}
                  alt="cows Grazing"
                  loading="lazy"
                  className="rounded-lg shadow-lg shadow-black w-full"
                  style={{
                    border: "10px solid white",
                    width: "100%",
                    height: "fit",
                  }}
                />
              </div>
            </div>

            <div className="flex flex-col gap-8 w-full md:w-1/2 lg:items-start tab:w-full">
              <span className="text-green-600 text-2xl font-bold ">Review</span>
              <h1 className="text-4xl sm:text-5xl font-bold">
                What Client's Say
              </h1>
              <div className="border-red-600 flex justify-start w-full">
                <TestimonialSwiper />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-slate-100">
        <div className="max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 py-24 mx-auto flex justify-center items-center flex-col gap-8 text-black">
          <Faq/>
        </div>
      </section>

    </>
  );
};

export default Body;
