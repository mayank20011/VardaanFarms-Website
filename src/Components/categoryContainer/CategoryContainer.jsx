import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryContainer = ({details}) => {
  return (
    <div className="flex flex-col gap-6 md:gap-12">
      <div className="flex gap-2">
        <img
          src={details.headingIcon}
          alt={details.iconAlt}
          className="w-[50px] h-[50px]"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{details.heading}</h1>
          <p className="font-[300]">{details.pera}</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {details.card.map((card)=>(
          <CategoryCard src={card.src} alt={card.alt} heading={card.heading} pera={card.pera} buttonText={card.buttonText} navigateTo={card.navigateTo}/>
        ))}
      </div>
    </div>
  );
};

export default CategoryContainer;
