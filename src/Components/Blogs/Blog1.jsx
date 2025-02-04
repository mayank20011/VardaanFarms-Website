import React from "react";
import aboutUsHome from "../../img/aboutUsHome.png";

function Blog1() {
  return (
    <div className="w-full h-full flex flex-col gap-6">
      <img
        src={aboutUsHome}
        alt="blog-1"
        className="w-full border-4 border-white rounded-lg"
      />
      <div className="flex flex-col gap-6 p-8">
        <div className="flex gap-8">
          {/* for date */}
          <div className="flex  items-center gap-2">
            <i className="fa-solid fa-clock"></i>
            <p className="text-green-600 font-bold">28 July, 2024</p>
          </div>

          {/* for admin */}
          <div className="flex  items-center gap-2">
            <i className="fa-solid fa-user"></i>
            <p className="text-green-600 font-bold">Admin</p>
          </div>
        </div>

        <h1 className="text-4xl font-bold">Why A2 Desi Cow Milk Is Good</h1>
        
        <div className="text-neutral-700 text-lg flex flex-col gap-4">
          <p>A2 Desi Cow Milk is a type of milk that comes from desi cows, which are native to our region. This milk is different from regular milk because it contains A2 protein instead of A1 protein. Here's why A2 Desi Cow Milk is good for you:</p>
          <h3 className="text-3xl font-bold text-green-600">Easier to Digest</h3>
          <p>Many people find A2 milk easier to digest than regular milk. The A2 protein in this milk does not cause the same digestive issues as A1 protein. Scientific studies have shown that people who are sensitive to regular milk often have no problems with A2 milk. This is because A2 protein is similar to the protein found in human milk.</p>
          <h3 className="text-3xl font-bold text-green-600">Nutrient-Rich</h3>
          <p>A2 Desi Cow Milk is packed with essential nutrients. It contains calcium, which is important for strong bones and teeth. It also has vitamins like A, D, and B12, which are essential for overall health. The milk is natural and clean, ensuring you get the best quality.</p>
          <h3 className="text-3xl font-bold text-green-600">Local and Sustainable</h3>
          <p>Our A2 milk comes from local cows, which means it supports local farmers and promotes sustainable farming practices. By choosing A2 Desi Cow Milk, you are not only taking care of your health but also supporting the community and the environment.</p>
          <h3 className="text-3xl font-bold text-green-600">Good For Daily Use</h3>
          <p>A2 Desi Cow Milk is perfect for daily use. Whether you drink it straight, add it to your tea or coffee, or use it in cooking, this milk adds a touch of goodness to your everyday routine. It is natural and clean, making it an excellent choice for everyone in the family.</p>
          <h3 className="text-3xl font-bold text-green-600">Full of Good Nutrients</h3>
          <p>This milk is full of good nutrients that are essential for your body. It is rich in calcium, which helps in maintaining strong bones and teeth. It also contains vitamins like A and D, which are important for your immune system and overall health.</p>
          <h3 className="text-3xl font-bold text-green-600">Conclusion</h3>
          <p>In conclusion, A2 Desi Cow Milk is a healthier choice for you and your family. It is easier to digest, nutrient-rich, and supports local and sustainable farming practices. Try A2 Desi Cow Milk today and feel the difference it makes in your life.</p>
        </div>
      </div>
    </div>
  );
}

export default Blog1;
