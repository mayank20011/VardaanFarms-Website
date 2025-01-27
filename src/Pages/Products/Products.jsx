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

import Footer from "../../Components/Footer/Footer.jsx";

function Products() {
  return (
    <div className="min-h-screen pt-24 flex flex-col space-y-8 md:pt-36 bg-white lg:pt-0">
      {/* Product-1 */}
       <Product name={"A2 Desi Cow Milk"} info={"Natural & Unadultrated"} img={a2DesiCowMilk} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#b1998c"} colorSide={"right"}/>

       {/* Product-2 */}
       <Product name={"Full Cream Milk"} info={"Natural & Unadultrated"} img={fullCream} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#f9b3b3"} colorSide={"left"}/>

       {/* Product-3 */}
       <Product name={"Toned Milk"} info={"Natural & Unadultrated"} img={toned} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#8cd8d7"} colorSide={"right"}/>

       {/* Product-4 */}
       <Product name={"Double Toned Milk"} info={"Natural & Unadultrated"} img={dtm} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#a999cf"} colorSide={"left"}/>

       {/* Product-5 */}
       <Product name={"Natural Cow Milk"} info={"Natural & Unadultrated"} img={cowMilk} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#8cbfe0"} colorSide={"right"}/>

       {/* Product-6 */}
       <Product name={"Buffalo Milk"} info={"Natural & Unadultrated"} img={buffaloMilk} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#6b6972"} colorSide={"left"}/>

       {/* Product-7 */}
       <Product name={"Family Pack"} info={"Natural & Unadultrated"} img={familyPack} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#f28d92"} colorSide={"right"}/>

       {/* Product-8 */}
       <Product name={"Double Toned Milk"} info={"Natural & Unadultrated"} img={dtmBacha} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#a999cf"} colorSide={"left"}/>

       {/* Product-9 */}
       <Product name={"Butter Milk"} info={"Natural & Unadultrated"} img={plainChach} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#6b957c"} colorSide={"right"}/>

       {/* Product-10 */}
       <Product name={"Masala Chach"} info={"Natural & Unadultrated"} img={masalaChach} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#a8d980"} colorSide={"left"}/>

       {/* Product-11 */}
       <Product name={"Slim Curd"} info={"Natural & Unadultrated"} img={dahiLight} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#a4d8e3"} colorSide={"right"}/>

       {/* Product-12 */}
       <Product name={"Curd"} info={"Natural & Unadultrated"} img={freshDahi} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#f49b80"} colorSide={"left"}/>

       {/* Product-13 */}
       <Product name={"A2 Desi Cow Ghee"} info={"Natural & Unadultrated"} img={a2CowGhee} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#f8e89c"} colorSide={"right"}/>

       {/* Product-14 */}
       <Product name={"Buffalo Ghee"} info={"Natural & Unadultrated"} img={buffaloGhee} description={"For Those who wants to stay in shape, but also want the wholesome goodness of milk , A2 skimmed milk has come to your rescue !"} availability={"Available in x, y,z quantity"} bgColor={"#f7f4d8"} colorSide={"left"}/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Products;
