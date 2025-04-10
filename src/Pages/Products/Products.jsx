import React from "react";
import a2DesiCowMilk from "../../img/a2DesiCowMilk.png";
import fullCream from "../../img/fullCream.png";
import toned from "../../img/tonedMilk.png";
import dtm from "../../img/DTM2.png";
import cowMilk from "../../img/cowMilk.png";
import buffaloMilk from "../../img/buffaloMilk.png";
import familyPack from "../../img/familyPack.png";
import dtmBacha from "../../img/dtmBacha.png";
import plainChach from "../../img/plainChach.png";
import masalaChach from "../../img/masalaChach.png";
import dahiLight from "../../img/dahiLight.png";
import freshDahi from "../../img/freshDahi.png";
import a2CowGhee from "../../img/a2CowGhee.png";
import buffaloGhee from "../../img/buffaloGhee.png";
import Product from "../../Components/Product/Product.jsx";
import { Helmet } from "react-helmet-async";
import { productsFaq } from "../../Components/FAQ/Faqdata.js";
import Faq from "../../Components/FAQ/Faq.jsx";
const Products = ({ totalPaddingToGive, setReturnPage }) => {
  
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Our Products",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "A2 Desi Cow Milk",
        url: "https://vardaanfarms.com/product/a2-desi-cow-milk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Full Cream Milk",
        url: "https://vardaanfarms.com/product/full-cream",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Toned Milk",
        url: "https://vardaanfarms.com/product/toned-milk",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Double Toned Milk",
        url: "https://vardaanfarms.com/product/double-toned-milk",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Natural Cow Milk",
        url: "https://vardaanfarms.com/product/natural-cow-milk",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Buffalo Milk",
        url: "https://vardaanfarms.com/product/buffalo-milk",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Family Pack",
        url: "https://vardaanfarms.com/product/family-pack",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Butter Milk",
        url: "https://vardaanfarms.com/product/butter-milk",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Chach Masala",
        url: "https://vardaanfarms.com/product/masala-chach",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Slim Curd",
        url: "https://vardaanfarms.com/product/slim-curd",
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "Curd",
        url: "https://vardaanfarms.com/product/curd",
      },
      {
        "@type": "ListItem",
        position: 12,
        name: "A2 Desi Cow Ghee",
        url: "https://vardaanfarms.com/product/a2-desi-cow-ghee",
      },
      {
        "@type": "ListItem",
        position: 13,
        name: "Buffalo Ghee",
        url: "https://vardaanfarms.com/product/buffalo-ghee",
      },
    ],
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What dairy products are available on Vardaan Farms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms offer a wide range of premium dairy products, including A2 Desi Cow Milk, Buffalo Milk, Full Cream Milk, Paneer, Ghee, and more, all sourced from our ethical farms.",
        },
      },
      {
        "@type": "Question",
        name: "Is Vardaan Farms ghee made using the traditional Bilona method?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Vardaan Farms A2 Desi Cow Ghee is prepared using the Bilona method, ensuring superior taste, aroma, and nutritional value.",
        },
      },
      {
        "@type": "Question",
        name: "How is Vardaan Farms paneer different from store-bought paneer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms farm-fresh paneer is made without preservatives, ensuring better taste, texture, and higher protein content compared to mass-produced options.",
        },
      },
      {
        "@type": "Question",
        name: "Do you use any preservatives in your dairy products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, all Vardaan Farms dairy products are 100% natural, free from artificial preservatives, chemicals, and additives.",
        },
      },
      {
        "@type": "Question",
        name: "Do Vardaan Farms offer lactose-free or plant-based alternatives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Currently, Vardaan Farms specialize in fresh dairy products",
        },
      },
      {
        "@type": "Question",
        name: "Are your dairy products suitable for children and elderly individuals?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Vardaan Farms dairy products are rich in essential vitamins, calcium, and proteins, making them ideal for all age groups.",
        },
      },
      {
        "@type": "Question",
        name: "How do I place an order for bulk dairy products?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms offer bulk purchasing for businesses, hotels, and retailers. You can contact through whatsapp or e-mail",
        },
      },
      {
        "@type": "Question",
        name: "What makes Vardaan Farms’ dairy products better than store-bought alternatives?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vardaan Farms dairy products are Fresh & organic, Preservative-free, Nutrient-rich, Ethically sourced from happy, healthy animals",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Fresh, 100% Natural and Chemical Free Dairy products",
    description:
      "Explore our range of 100% pure and fresh dairy products, including A2 Desi Cow Milk, Buffalo Milk, Curd, and more. No preservatives, farm-fresh quality with pure Love.",
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

  return (
    <>
      <Helmet>
        <title>Best Fresh, 100% Natural and Chemical Free Dairy products</title>
        <meta
          name="description"
          content="Explore Our Range Of 100% Pure, Farm-Fresh Dairy Products, Including A2 Cow Milk, Buffalo Milk, Curd, and more. No Preservatives Just Natural Goodness!."
        />
        <meta name="keywords" content="Milk, Paneer, Ghee, Curd, Chach" />

        <meta
          property="og:title"
          content="Vardaan Farms: Best Fresh, 100% Natural and Chemical Free Dairy products"
        />
        <meta
          property="og:description"
          content="Explore Our Range Of 100% Pure, Farm-Fresh Dairy Products, Including A2 Cow Milk, Buffalo Milk, Curd, and more. No Preservatives Just Natural Goodness!."
        />
        <meta
          property="og:image"
          content="https://vardaanfarms.com/assets/ourVission-BnlmFmqI.jpg"
        />
        <meta property="og:url" content="https://vardaanfarms.com/products" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vardaan Farms" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twiter:title"
          content="Best Fresh, 100% Natural and Chemical Free Dairy products"
        />
        <meta
          name="twitter:description"
          content="Explore Our Range Of 100% Pure, Farm-Fresh Dairy Products, Including A2 Cow Milk, Buffalo Milk, Curd, and more. No Preservatives Just Natural Goodness!."
        />
        <meta
          name="twitter:image"
          content="https://vardaanfarms.com/assets/clientCow2-BOVJgFh3.jpg"
        />
        <meta name="twitter:url" content="https://vardaanfarms.com/products" />

        <meta />
        <link rel="canonical" href="https://vardaanfarms.com/products" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqData)}</script>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <section
        className="flex flex-col lg:space-y-0 space-y-8 md:pt-36 bg-white lg:pt-0"
        style={{ paddingTop: `${totalPaddingToGive}px` }}
      >
        <Product
          name={"A2 Desi Cow Milk"}
          info={"Natural & Clean"}
          img={a2DesiCowMilk}
          descriptionColor={"#ffffff"}
          availabilityColor={"#ffffff"}
          description={
            "Our A2 Desi Cow Milk comes from local cows, making it easy to digest and tasty. Perfect for daily use and full of good nutrients."
          }
          availability={"Available in 500ml"}
          bgColor={"#b1998c"}
          colorSide={"right"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/a2-desi-cow-milk"}
          setReturnPage={setReturnPage}
          lazyLoading={false}
        />

        <Product
          name={"Full Cream Milk"}
          info={"Natural & Fresh"}
          img={fullCream}
          description={
            "Enjoy the rich taste of our Full Cream Milk, perfect for your morning tea, coffee, or cereal. Full of nutrients and very creamy."
          }
          availability={"Available in 500ml, 450ml, 6l"}
          bgColor={"#f9b3b3"}
          colorSide={"left"}
          descriptionColor={"#4f4f4f"}
          availabilityColor={"#4f4f4f"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/full-cream"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Toned Milk"}
          info={"Balanced, Natural & Healthy"}
          img={toned}
          description={
            "Our Toned Milk offers a good taste, great for those who want a healthy option without losing flavor."
          }
          availability={"Available 500ml, 400ml"}
          bgColor={"#8cd8d7"}
          colorSide={"right"}
          descriptionColor={"#ffffff"}
          availabilityColor={"#ffffff"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/toned-milk"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Double Toned Milk"}
          info={"Light, Natural & Healthy"}
          img={dtm}
          description={
            "Enjoy a lighter option with our Double Toned Milk, great for those looking to cut down on fat without losing taste."
          }
          availability={"Available in 400ml, 500ml"}
          bgColor={"#a999cf"}
          colorSide={"left"}
          descriptionColor={"#4f4f4f"}
          availabilityColor={"#4f4f4f"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/double-toned-milk"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Natural Cow Milk"}
          info={"Pure, Natural & Fresh"}
          img={cowMilk}
          description={
            "Savor the natural taste and goodness of our Cow Milk. Perfect for drinking or cooking every day."
          }
          availability={"Available in 500ml, 350ml"}
          bgColor={"#8cbfe0"}
          colorSide={"right"}
          descriptionColor={"#1a1a2e"}
          availabilityColor={"#1a1a2e"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/natural-cow-milk"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Buffalo Milk"}
          info={"Rich, Natural & Nutritious"}
          img={buffaloMilk}
          description={
            "Our Buffalo Milk is rich and creamy, great for making sweets and other dairy dishes. Full of nutrients."
          }
          availability={"Available in 500ml, 1l"}
          bgColor={"#6b6972"}
          colorSide={"left"}
          descriptionColor={"#4f4f4f"}
          availabilityColor={"#4f4f4f"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/buffalo-milk"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Family Pack"}
          info={"Convenient, Natural & Fresh"}
          img={familyPack}
          description={
            "Our Family Pack offers 450ml of fresh, homogenized milk. Perfect for small families, it ensures everyone enjoys pure and nutritious milk every day."
          }
          availability={"Available in 450ml"}
          bgColor={"#f28d92"}
          colorSide={"right"}
          descriptionColor={"#3B2F2F"}
          availabilityColor={"#3B2F2F"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/family-pack"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Double Toned Milk"}
          info={"Light, Natural & Healthy"}
          img={dtmBacha}
          description={
            "Enjoy a lighter option with our Double Toned Milk, great for those looking to cut down on fat without losing taste."
          }
          availability={"Available 170ml"}
          bgColor={"#a999cf"}
          colorSide={"left"}
          descriptionColor={"#4f4f4f"}
          availabilityColor={"#4f4f4f"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/double-toned-milk"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Butter Milk"}
          info={"Refreshing, Natural & Healthy"}
          img={plainChach}
          description={
            "Refresh yourself with our Plain Chach, a traditional buttermilk drink that’s cool and healthy. Perfect for a hot day."
          }
          availability={"Available in 500 ml"}
          bgColor={"#6b957c"}
          colorSide={"right"}
          descriptionColor={"#ffffff"}
          availabilityColor={"#ffffff"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/butter-milk"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Masala Chach"}
          info={"Spicy, Natural & Refreshing"}
          img={masalaChach}
          description={
            "Spice up your day with our Masala Chach, a tasty blend of buttermilk and spices. A refreshing and healthy drink."
          }
          availability={"Available in 500ml"}
          bgColor={"#a8d980"}
          colorSide={"left"}
          descriptionColor={"#4f4f4f"}
          availabilityColor={"#4f4f4f"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/masala-chach"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Slim Curd"}
          info={"Light Natural & Fresh"}
          img={dahiLight}
          description={
            "Our Dahi Light offers all the goodness of yogurt with less fat. Perfect for those looking for a lighter option."
          }
          availability={"Available in 400gm"}
          bgColor={"#a4d8e3"}
          colorSide={"right"}
          descriptionColor={"#1a1a2e"}
          availabilityColor={"#1a1a2e"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/slim-curd"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Curd"}
          info={"Creamy, Natural & Pure"}
          img={freshDahi}
          description={
            "Made from pure milk, our Fresh Dahi is thick, creamy, and perfect for daily use in all your meals and snacks."
          }
          availability={"Available in 400gm"}
          bgColor={"#f49b80"}
          colorSide={"left"}
          descriptionColor={"#4f4f4f"}
          availabilityColor={"#4f4f4f"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/curd"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"A2 Desi Cow Ghee"}
          info={"Pure, Natural & Traditional"}
          img={a2CowGhee}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in 500ml"}
          bgColor={"#f8e89c"}
          colorSide={"right"}
          descriptionColor={"#4f4f4f"}
          availabilityColor={"#4f4f4f"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/a2-desi-cow-ghee"}
          setReturnPage={setReturnPage}
        />

        <Product
          name={"Buffalo Ghee"}
          info={"Rich, Natural & Flavorful"}
          img={buffaloGhee}
          description={
            "Our Buffalo Ghee is rich and flavorful, ideal for enhancing the taste of your dishes and making them more nutritious."
          }
          availability={"Available in 500ml, 1l"}
          bgColor={"#f7f4d8"}
          colorSide={"left"}
          descriptionColor={"#4f4f4f"}
          availabilityColor={"#4f4f4f"}
          totalPaddingToGive={totalPaddingToGive}
          pageUrl={"product/buffalo-ghee"}
          setReturnPage={setReturnPage}
        />
        <div className="py-12 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 text-black">
          <Faq data={productsFaq} />
        </div>
      </section>
    </>
  );
};

export default Products;
