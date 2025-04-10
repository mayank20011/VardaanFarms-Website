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
import Faq from "../../Components/FAQ/Faq";
import { aboutUsFaq } from "../../Components/FAQ/Faqdata";
const AboutUs = ({ totalPaddingToGive }) => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes Vardaan Farms different from other dairy brands?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms focuses on natural, sustainable, and ethical dairy farming. Our cows graze freely, and we ensure fresh, high-quality dairy without artificial preservatives or hormones.",
        },
      },
      {
        "@type": "Question",
        name: "How does Vardaan Farms ensure the purity of its milk?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We follow strict hygiene and safety protocols, from milking to packaging. Our advanced processing retains the milk’s natural nutrients while ensuring it meets the highest quality standards.",
        },
      },
      {
        "@type": "Question",
        name: "Where does Vardaan Farms source its milk from?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We produce milk from our own farms, where cows are raised in a natural, stress-free environment and fed a balanced diet, ensuring superior taste and nutrition.",
        },
      },
      {
        "@type": "Question",
        name: "Is Vardaan Farms milk suitable for children and elderly individuals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our milk is rich in essential vitamins and minerals, making it an excellent choice for all age groups, including children and seniors.",
        },
      },
      {
        "@type": "Question",
        name: "Does Vardaan Farms offer dairy products in bulk for businesses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we supply bulk dairy products to retailers, distributors, and businesses. Contact us for customized pricing and supply options.",
        },
      },
      {
        "@type": "Question",
        name: "How does Vardaan Farms practice sustainability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We implement eco-friendly farming techniques, responsible waste management, and water conservation to minimize our environmental impact while ensuring high-quality dairy production.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I buy Vardaan Farms dairy products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our dairy products are available through distributors and retail partners across Gurgaon, Jhajjar, Dadri, and Delhi. Contact us to find the nearest supplier!",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vardaan Farms - Ethical And Grass Fed Dairy Farming In India",
    description:
      "We Deliver Pure, high-quality Dairy Products From Grass-fed Cows That Freely Roam In Sunlight. Our Dairy Products are Natural, and Artificial Additives Free.",
    image: "https://vardaanfarms.com/assets/ourFarmCowMilking-DkrKgpGU.jpg",
    author: {
      "@type": "Person",
      name: "Mayank Behl",
    },
    publisher: {
      "@type": "Organization",
      name: "Vardaan Farms",
      logo: {
        "@type": "ImageObject",
        url: "https://vardaanfarms.com/assets/ourFarmCowMilking-DkrKgpGU.jpg",
      },
    },
    datePublished: "2025-03-26",
    dateModified: "2025-03-26",
  };

  useEffect(() => {
    const numberNodelist = document.querySelectorAll(".number");
    numberNodelist.forEach((numberSpan) => {
      let start = 1;
      let end = numberSpan.attributes[`data-val`].value;
      gsap.to(
        { val: start },
        {
          scrollTrigger: {
            trigger: numberSpan,
            scrollber: "body",
            start: "top 80%",
          },
          duration: 1.7,
          val: end,
          roundProps: "val",
          onUpdate: function () {
            numberSpan.innerHTML = this.targets()[0].val;
          },
          ease: "power1.inOut",
        }
      );
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Vardaan Farms - Ethical And Grass Fed Dairy Farming In India
        </title>
        <meta
          name="description"
          content="We Deliver Pure, high-quality Dairy Products From Grass-fed Cows That Freely Roam In Sunlight. Our Dairy Products are Natural, and Artificial Additives Free."
        />
        <meta name="keywords" content="Grass Fed" />
        <meta
          property="og:title"
          content="Vardaan Farms - Ethical And Grass Fed Dairy Farming In India"
        />
        <meta
          property="og:description"
          content="We Deliver Pure, high-quality Dairy Products From Grass-fed Cows That Freely Roam In Sunlight. Our Dairy Products are Natural, and Artificial Additives Free."
        />
        <meta
          property="og:image"
          content="https://vardaanfarms.com/assets/ourVission-BnlmFmqI.jpg"
        />
        <meta property="og:url" content="https://vardaanfarms.com/aboutUs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Vardaan Farms - Ethical And Grass Fed Dairy Farming In India"
        />
        <meta
          name="twitter:description"
          content="We Deliver Pure, high-quality Dairy Products From Grass-fed Cows That Freely Roam In Sunlight. Our Dairy Products are Natural, and Artificial Additives Free."
        />
        <meta
          name="twitter:image"
          content="https://vardaanfarms.com/assets/ourVission-BnlmFmqI.jpg"
        />
        <link rel="canonical" href="https://www.vardaanfarms.com/aboutUs" />
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
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
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl">Reliable Dairy Supply</h1>
                <p className="text-sm">
                  We ensure a steady supply of grass-fed milk commercial through
                  trusted retailers, delivering pure, fresh, and high-quality
                  dairy always.
                </p>
              </div>
            </div>

            <div className="text-center shadow-2xl p-4 rounded-lg bg-white border">
              <img
                src={healthy}
                alt="love Sign"
                className="mx-auto"
                style={{ width: "100px", height: "100px" }}
                loading="lazy"
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl">Healthy & Nutritious</h1>
                <p className="text-sm">
                  With a seamless supply chain, we guarantee uninterrupted
                  access to grass-fed milk commercial, ensuring freshness and
                  premium quality.
                </p>
              </div>
            </div>

            <div className="text-center shadow-2xl p-4 rounded-lg bg-white border">
              <img
                src={tag}
                alt="tag"
                className="mx-auto"
                loading="lazy"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl">99% Uptime Guarantee</h1>
                <p className="text-sm">
                  With a seamless supply chain, we ensure grass-fed milk
                  commercial is always available, fresh, and of the highest
                  quality—whenever you need it.
                </p>
              </div>
            </div>

            <div className="text-center shadow-2xl p-4 rounded-lg bg-white border">
              <img
                src={support}
                alt="customer Support"
                className="mx-auto"
                loading="lazy"
                style={{ width: "100px", height: "100px" }}
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-xl">24/7 Customer Support</h1>
                <p className="text-sm">
                  Our expert team is available 24/7 to assist you with grass-fed
                  milk commercial inquiries, ensuring a smooth experience.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-24 flex gap-12 flex-col lg:flex-row">
            <div className="lg:w-1/2 flex flex-col gap-6 lg:pr-6">
              <span className="text-left text-2xl text-green-600 font-bold ">
                About Vardaan Farms
              </span>
              <h1 className="text-left text-4xl capitalize font-bold">
                Crafting Dairy Excellence
              </h1>
              <div className="text-left text-black text-lg text-md flex flex-col gap-3">
                <span>
                  At Vardaan Farms, we are committed to producing grass-fed milk
                  commercial that blends ethical farming with innovation,
                  ensuring pure, natural dairy for consumers who demand only the
                  best.
                </span>
                <span>
                  From our farms to your table, we follow strict quality control
                  processes to ensure freshness, hygiene, and sustainability.
                  Our cows graze on lush green pastures, producing
                  nutrient-rich, grass-fed milk commercial that supports a
                  healthy lifestyle.
                </span>
                <span>
                  With an emphasis on tradition and transparency, we deliver
                  dairy products that retain authentic flavor, essential
                  nutrients, and uncompromised quality. Whether for personal use
                  or commercial needs, Vardaan Farms is your trusted partner for
                  premium dairy excellence.
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
              At Vardaan Farms, we bring high-quality grass-fed milk commercial
              straight from our ethically managed farms. With a focus on purity,
              sustainability, and freshness, our dairy products stand out in
              both taste and health benefits.
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
                  We use advanced cooling techniques to lock in the freshness
                  and nutrition of grass-fed milk commercial, preserving its
                  rich taste and essential nutrients.
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
                  Our modern dairy facilities ensure efficient production of
                  grass-fed milk commercial, meeting demand while maintaining
                  superior quality and freshness.
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
                  Enhance your cooking with grass-fed milk commercial—perfect
                  for creamy sauces, desserts, and smoothies, adding rich flavor
                  and health benefits.
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
                  Our grass-fed milk commercial is packed with essential
                  vitamins, making it a safe, nutritious choice for infants and
                  young children.
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
                  We follow sustainable farming practices to produce grass-fed
                  milk commercial, ensuring purity while protecting nature and
                  reducing environmental impact.
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
                  Our pasteurization process preserves the natural goodness of
                  grass-fed milk commercial, removing harmful bacteria while
                  keeping it fresh and safe.
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
                    <span className="number" data-val="20000">
                      00000
                    </span>
                    <span className="text-blue-600">+</span>
                  </h1>
                  <h2 className="text-xl mx-auto">Happy Houses</h2>
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
                    <span className="number" data-val="170">
                      00
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
                    <span className="number" data-val="5">
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
                    <span className="number" data-val="103">
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
                  className="text-lg flex flex-col gap-2"
                  style={{ filter: "drop-shadow(2px 2px 2px white)" }}
                >
                  At Vardaan Farms, our mission is to produce grass-fed milk
                  commercial that prioritizes health, sustainability, and
                  ethical farming. We ensure pure, nutrient-rich dairy by
                  raising our cows in natural, stress-free environments,
                  preserving both flavor and nutrition.
                  <span>
                    By bridging tradition and technology, we deliver
                    uncompromised quality, making grass-fed milk commercial
                    accessible to homes and businesses. Our goal is to create
                    sustainable dairy solutions while maintaining the highest
                    standards of excellence.
                  </span>
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
                <p className="text-lg flex flex-col gap-2">
                  We strive to set new standards in grass-fed milk commercial,
                  ensuring purity, sustainability, and premium quality. Our
                  vision is to revolutionize dairy farming, making natural,
                  grass-fed milk commercial a global benchmark.
                  <span>
                    With cutting-edge practices and transparency, we aim to
                    educate consumers, build trust, and promote ethical dairy
                    choices. Through continuous innovation and commitment, we
                    envision a future where every home enjoys the healthiest,
                    freshest dairy possible.
                  </span>
                </p>
              </div>
            </div>

            <img
              src={aboutUsBanner}
              alt="VardaanFarms Description Banner"
              className="rounded-3xl"
              loading="lazy"
            />

            <Faq data={aboutUsFaq} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
