import React from "react";
import SelectProductComponent from "../SelectProductComponent/SelectProductComponent";
import { useNavigate } from "react-router-dom";
import arrowLeft from "../../img/arrowLeft.svg";

function ProductDetails({ data, returnPage }) {
  const navigate = useNavigate();
  function navigateBack() {
    if (returnPage == "Home") {
      navigate("/");
    } else {
      navigate("/products");
    }
  }
  return (
    <div className="text-black flex gap-6 pb-12 flex-col md:flex-row">
      <div className="md:w-1/2 relative">
        <img src={arrowLeft} alt="arrow-left" onClick={navigateBack} className="w-10 bg-white rounded-md cursor-pointer"/>
        <div className="aspect-[16/9]">
          <img
            src={data.img}
            alt=""
            className="mx-auto w-4/5"
            style={{ filter: "drop-shadow(5px 5px 10px black)" }}
          />
        </div>
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

          <div className="flex gap-2 flex-wrap">
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

          {data.category !== "Ghee" ? (
            <div className="px-2 py-1 flex flex-col gap-2">
              <div className="grow flex justify-between">
                <span>Energy (kcal)</span>
                <span>{data.nutritionalFact["Energy"]}</span>
              </div>
              <div className="grow flex justify-between">
                <span>Total Fat (g)</span>
                <span>{data.nutritionalFact["TotalFat"]}</span>
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
                <span>{data.nutritionalFact["carbohydrate"]}</span>
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
          ) : (
            <div className="px-2 py-1 flex flex-col gap-2">
              <div className="grow flex justify-between">
                <span>Energy (kcal)</span>
                <span>{data.nutritionalFact["Energy"]}</span>
              </div>
              <div className="grow flex justify-between">
                <span>Calories From Fat (kcal)</span>
                <span>{data.nutritionalFact["caloriesFromFat"]}</span>
              </div>
              <div className="grow flex justify-between">
                <span>Total Fat (g)</span>
                <span>{data.nutritionalFact["totalFat"]}</span>
              </div>
              <div className="grow flex justify-between">
                <span>Saturated Faty Acid (g)</span>
                <span>{data.nutritionalFact["saturatedFatyAcid"]}</span>
              </div>
              <div className="grow flex justify-between">
                <span>MUFA (g)</span>
                <span>{data.nutritionalFact["mufa"]}</span>
              </div>
              <div className="grow flex justify-between">
                <span>PUFA (g)</span>
                <span>{data.nutritionalFact["pufa"]}</span>
              </div>
              <div className="grow flex justify-between">
                <span>Cholestrol (mg)</span>
                <span>{data.nutritionalFact["cholestrol"]}</span>
              </div>
              <div className="grow flex justify-between">
                <span>Carbohydrate (g)</span>
                <span>{data.nutritionalFact["carbohydrate"]}</span>
              </div>
              <div className="grow flex justify-between">
                <span>Sugar (g)</span>
                <span>{data.nutritionalFact["totalSugar"]}</span>
              </div>
              <div className="grow flex justify-between">
                <span>Protein (g)</span>
                <span>{data.nutritionalFact["protein"]}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
