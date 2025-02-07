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

import Footer from "../../Components/Footer/Footer.jsx";

function Products({ totalPaddingToGive }) {
  return (
    <>
      <Helmet>
        <meta
          name="title"
          content="Natural & Clean A2 Desi Cow Milk | Full Cream, Toned, Double Toned, Natural Cow Milk | Buffalo Milk & Ghee | Family Pack & Refreshing Chach | Fresh, Nutritious & Healthy Milk Products"
        />
        <meta
          name="description"
          content="Explore our wide range of 100% natural and clean milk products: A2 Desi Cow Milk, Full Cream Milk, Toned Milk, Double Toned Milk, Natural Cow Milk, Buffalo Milk, Family Pack, Butter Milk, Masala Chach, Slim Curd, Fresh Curd, A2 Desi Cow Ghee, Buffalo Ghee. Available in various sizes."
        />
        <meta
          name="keywords"
          content="A2 Desi Cow Milk, Full Cream Milk, Toned Milk, Double Toned Milk, Natural Cow Milk, Buffalo Milk, Family Pack, Butter Milk, Masala Chach, Slim Curd, Fresh Curd, A2 Desi Cow Ghee, Buffalo Ghee, 100% Natural, Nutritious, Healthy Milk Products"
        />
        <meta name="author" content="VardaanFarms" />
        <meta
          property="og:title"
          content="Natural & Clean A2 Desi Cow Milk | Full Cream, Toned, Double Toned, Natural Cow Milk | Buffalo Milk & Ghee | Family Pack & Refreshing Chach | Fresh, Nutritious & Healthy Milk Products"
        />
        <meta
          property="og:description"
          content="Explore our wide range of 100% natural and clean milk products: A2 Desi Cow Milk, Full Cream Milk, Toned Milk, Double Toned Milk, Natural Cow Milk, Buffalo Milk, Family Pack, Butter Milk, Masala Chach, Slim Curd, Fresh Curd, A2 Desi Cow Ghee, Buffalo Ghee. Available in various sizes."
        />
        <meta property="og:image" content={a2DesiCowMilk} />
        <meta property="og:image" content={fullCream} />
        <meta property="og:image" content={toned} />
        <meta property="og:image" content={dtm} />
        <meta property="og:image" content={cowMilk} />
        <meta property="og:image" content={buffaloMilk} />
        <meta property="og:image" content={familyPack} />
        <meta property="og:image" content={dtmBacha} />
        <meta property="og:image" content={plainChach} />
        <meta property="og:image" content={masalaChach} />
        <meta property="og:image" content={dahiLight} />
        <meta property="og:image" content={freshDahi} />
        <meta property="og:image" content={a2CowGhee} />
        <meta property="og:image" content={buffaloGhee} />
        <meta property="og:url" content="URL_of_your_product_page" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Natural & Clean A2 Desi Cow Milk | Full Cream, Toned, Double Toned, Natural Cow Milk | Buffalo Milk & Ghee | Family Pack & Refreshing Chach | Fresh, Nutritious & Healthy Milk Products"
        />
        <meta
          name="twitter:description"
          content="Explore our wide range of 100% natural and clean milk products: A2 Desi Cow Milk, Full Cream Milk, Toned Milk, Double Toned Milk, Natural Cow Milk, Buffalo Milk, Family Pack, Butter Milk, Masala Chach, Slim Curd, Fresh Curd, A2 Desi Cow Ghee, Buffalo Ghee. Available in various sizes."
        />
        <meta name="twitter:image" content={a2DesiCowMilk} />
        <meta name="twitter:image" content={fullCream} />
        <meta name="twitter:image" content={toned} />
        <meta name="twitter:image" content={dtm} />
        <meta name="twitter:image" content={cowMilk} />
        <meta name="twitter:image" content={buffaloMilk} />
        <meta name="twitter:image" content={familyPack} />
        <meta name="twitter:image" content={dtmBacha} />
        <meta name="twitter:image" content={plainChach} />
        <meta name="twitter:image" content={masalaChach} />
        <meta name="twitter:image" content={dahiLight} />
        <meta name="twitter:image" content={freshDahi} />
        <meta name="twitter:image" content={a2CowGhee} />
        <meta name="twitter:image" content={buffaloGhee} />

        <link rel="canonical" href="/products" />
      </Helmet>

      <section
        className="flex flex-col lg:space-y-0 space-y-8 md:pt-36 bg-white lg:pt-0"
        style={{ paddingTop: `${totalPaddingToGive}px` }}
      >
        {/* Product-1 */}
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
        />

        {/* Product-2 */}
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
        />

        {/* Product-3 */}
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
        />

        {/* Product-4 */}
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
        />

        {/* Product-5 */}
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
        />

        {/* Product-6 */}
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
        />

        {/* Product-7 */}
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
        />

        {/* Product-8 */}
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
        />

        {/* Product-9 */}
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
        />

        {/* Product-10 */}
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
        />

        {/* Product-11 */}
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
        />

        {/* Product-12 */}
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
        />

        {/* Product-13 */}
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
        />

        {/* Product-14 */}
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
        />
      </section>

    </>
  );
}

export default Products;
