import React from "react";
import SelectProductComponent from "../SelectProductComponent/SelectProductComponent";
import { Link } from "react-router-dom";

function ProductDetails({ data }) {
  return (
    <div className="text-black flex gap-6 pb-12 flex-col md:flex-row">
      <div className="md:w-1/2 relative">
        <Link to="/">
          <i className="fa-solid fa-arrow-left text-2xl absolute text-white px-4 py-2 rounded-lg bg-neutral-500 cursor-pointer hover:scale-95 transition"></i>
        </Link>
        <img src={data.img} alt="" className="mx-auto w-4/5" />
      </div>

      <div className="md:w-1/2 flex flex-col gap-6 ">
        <div className="flex justify-between order-1">
          <p
            className="px-4 py-2 rounded-full w-fit h-fit text-white font-bold"
            style={{ backgroundColor: `${data.color}` }}
          >
            {data.category}
          </p>
          <SelectProductComponent />
        </div>
        <h1
          className="text-4xl font-bold order-2"
          style={{ color: `${data.color}` }}
        >
          {data.heading}
        </h1>
        <p className="order-3">{data.info}</p>
        <div className="flex flex-col gap-4 order-5">
          <p className="font-bold" style={{ color: `${data.color}` }}>
            Available in:
          </p>

          <div className="flex gap-2">
            {data.availableIn.map((value) => (
              <div
                key={value}
                className="px-4 py-2 rounded-md shadow-md w-fit border"
              >
                {value}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-100 p-4 flex flex-col gap-4 text-sm w-full sm:w-[350px] order-4">
          <div className="flex justify-between">
            <p>Nutritional Facts</p>
            <p>{`Per (100) ${data.measurmentUnit}`}</p>
          </div>

          <span className="border border-black"></span>

          <div className="px-2 py-1 flex flex-col gap-2">
            <div className="grow flex justify-between">
              <span>Energy (kcal)</span>
              <span>{data.nutritionalFact["Energy"]}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Total Fat (g)</span>
              <span>{data.nutritionalFact["totalFat"]}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Saturated Fat (g)</span>
              <span>{data.nutritionalFact["saturatedFat"]}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Trans Fat (g)</span>
              <span>{data.nutritionalFact["transFat"]}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Cholestrol (mg)</span>
              <span>{data.nutritionalFact["cholestrol"]}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Carbohydrates (g)</span>
              <span>{data.nutritionalFact["carbohydrates"]}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Total Sugar (g)</span>
              <span>{data.nutritionalFact["totalSugar"]}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Added Sugar (g)</span>
              <span>{data.nutritionalFact["addedSugar"]}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Protein (g)</span>
              <span>{data.nutritionalFact["protein"]}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Sodium (mg)</span>
              <span>{data.nutritionalFact["sodium"]}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Calcium (mg)</span>
              <span>{data.nutritionalFact["calcium"]}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
