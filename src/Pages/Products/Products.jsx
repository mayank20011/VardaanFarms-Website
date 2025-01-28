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

function Products() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#059669" />
        <title>Fresh Dairy Products - VardaanFarms</title>
        <meta
          name="description"
          content="Explore a wide range of fresh dairy products including milk, chach, dahi, ghee, paneer and more from vardaanFarms. Quality you can trust!"
        />
        <meta
          name="keywords"
          content="dairy products, fresh milk, dahi, chach, ghee, paneer, dairy company, a2 desi cow milk, full Cream, toned, DTM, Cow Milk, Buffalo Milk, Family Pack, Dtm Bacha, Masala Chach, Dahi Light, Fresh Dahi, a2 Cow Ghee, Buffalo Ghee, Dahi Matka, vardaanFarms"
        />
        <meta
          property="og:title"
          content="Fresh Dairy Products - VardaanFarms"
        />
        <meta
          property="og:description"
          content="Explore a wide range of fresh dairy products including milk, chach, dahi, ghee, paneer and more from vardaanFarms. Quality you can trust!"
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
        <meta property="og:url" content="[URL to your products page]" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Fresh Dairy Products - vardaanFarms"
        />
        <meta
          name="twitter:description"
          content="Explore a wide range of fresh dairy products including milk, chach, dahi, ghee, paneer and more from vardaanFarms. Quality you can trust!"
        />
        <link rel="canonical" href="/products" />
      </Helmet>

      <section className="min-h-screen pt-24 flex flex-col lg:space-y-0 space-y-8 md:pt-36 bg-white lg:pt-0">
        {/* Product-1 */}
        <Product
          name={"A2 Desi Cow Milk"}
          info={"Natural & Unadultrated"}
          img={a2DesiCowMilk}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#b1998c"}
          colorSide={"right"}
        />

        {/* Product-2 */}
        <Product
          name={"Full Cream Milk"}
          info={"Natural & Unadultrated"}
          img={fullCream}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#f9b3b3"}
          colorSide={"left"}
        />

        {/* Product-3 */}
        <Product
          name={"Toned Milk"}
          info={"Natural & Unadultrated"}
          img={toned}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#8cd8d7"}
          colorSide={"right"}
        />

        {/* Product-4 */}
        <Product
          name={"Double Toned Milk"}
          info={"Natural & Unadultrated"}
          img={dtm}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#a999cf"}
          colorSide={"left"}
        />

        {/* Product-5 */}
        <Product
          name={"Natural Cow Milk"}
          info={"Natural & Unadultrated"}
          img={cowMilk}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#8cbfe0"}
          colorSide={"right"}
        />

        {/* Product-6 */}
        <Product
          name={"Buffalo Milk"}
          info={"Natural & Unadultrated"}
          img={buffaloMilk}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#6b6972"}
          colorSide={"left"}
        />

        {/* Product-7 */}
        <Product
          name={"Family Pack"}
          info={"Natural & Unadultrated"}
          img={familyPack}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#f28d92"}
          colorSide={"right"}
        />

        {/* Product-8 */}
        <Product
          name={"Double Toned Milk"}
          info={"Natural & Unadultrated"}
          img={dtmBacha}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#a999cf"}
          colorSide={"left"}
        />

        {/* Product-9 */}
        <Product
          name={"Butter Milk"}
          info={"Natural & Unadultrated"}
          img={plainChach}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#6b957c"}
          colorSide={"right"}
        />

        {/* Product-10 */}
        <Product
          name={"Masala Chach"}
          info={"Natural & Unadultrated"}
          img={masalaChach}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#a8d980"}
          colorSide={"left"}
        />

        {/* Product-11 */}
        <Product
          name={"Slim Curd"}
          info={"Natural & Unadultrated"}
          img={dahiLight}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#a4d8e3"}
          colorSide={"right"}
        />

        {/* Product-12 */}
        <Product
          name={"Curd"}
          info={"Natural & Unadultrated"}
          img={freshDahi}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#f49b80"}
          colorSide={"left"}
        />

        {/* Product-13 */}
        <Product
          name={"A2 Desi Cow Ghee"}
          info={"Natural & Unadultrated"}
          img={a2CowGhee}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#f8e89c"}
          colorSide={"right"}
        />

        {/* Product-14 */}
        <Product
          name={"Buffalo Ghee"}
          info={"Natural & Unadultrated"}
          img={buffaloGhee}
          description={
            "For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"
          }
          availability={"Available in x, y,z quantity"}
          bgColor={"#f7f4d8"}
          colorSide={"left"}
        />

        {/* Footer */}
        <Footer />
      </section>
    </>
  );
}

export default Products;
