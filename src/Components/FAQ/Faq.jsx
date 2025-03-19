import React, { useState } from "react";

const Faq = () => {
  const arr = [
    {
      q: "What makes Vardaan Farms’ milk the best organic milk?",
      ans: "Our best organic milk comes from grass-fed cows, free from artificial hormones and preservatives. It’s 100% natural, ensuring maximum nutrition and purity for your family.",
    },
    {
      q: "Is Vardaan Farms' fresh milk pasteurized?",
      ans: "Yes, our fresh milk is gently pasteurized to maintain safety while preserving its natural taste and nutrients—no preservatives, no chemicals, just pure dairy goodness.",
    },
    {
      q: "Who should drink high-protein milk?",
      ans: "Our high-protein milk is ideal for athletes, gym-goers, growing children, and health-conscious individuals. It provides essential proteins & nutrients to support an active lifestyle.",
    },
    {
      q: "What are the benefits of cultured milk?",
      ans: "Our cultured milk is rich in probiotics, which help with digestion, gut health, and immunity. It’s a great choice for anyone looking for a natural source of healthy bacteria.",
    },
    {
      q: "Do you offer bulk orders for businesses?",
      ans: "Yes, we specialize in bulk dairy supply for retailers, distributors, and businesses. Contact us for customized pricing and delivery options.",
    },
    {
      q: "How is your paneer different from store-bought paneer?",
      ans: "Our paneer is made from fresh, high-quality milk without preservatives, ensuring better taste, texture, and nutritional value compared to mass-produced options.",
    },
    {
      q: "What makes Vardaan Farms' ghee special?",
      ans: "Our ghee is traditionally made using pure farm-fresh milk, ensuring rich flavor and authentic quality. It’s free from artificial additives and preservatives.",
    },
    {
      q: "Where can I buy Vardaan Farms dairy products?",
      ans: "Our dairy products are available through local distributors and retail partners across Gurgaon, Jhajjar, Dadri, and Delhi. Contact us to find a supplier near you!",
    },
  ];

  const [indexId, setIndexId] = useState(null);

  function openClose(index) {
    setIndexId(index === indexId ? null : index);
  }

  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full">
      <h1 className="text-3xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <p className="text-xl text-center">
        Everything You Need to Know About Our Fresh & Organic Dairy
      </p>
      {arr.map((obj, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 bg-white w-full p-6 rounded-lg cursor-pointer shadow-lg"
          onClick={() => {
            openClose(index);
          }}
        >
          <div className="flex gap-4 text-xl items-center">
            <span
              className="cursor-pointer select-none border-2 px-2 border-black"
            >
              {index === indexId ? "-" : "+"}
            </span>
            <h1>{obj.q}</h1>
          </div>
          <p
            className={`overflow-hidden w-full md:w-4/5 transition-all duration-300 text-slate-600 ${
              index === indexId ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            {obj.ans}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
