import React from "react";
import SelectProductComponent from "../SelectProductComponent/SelectProductComponent";

function ProductDetails({ data }) {

  return (
    <div className="text-black flex gap-6 pb-12 flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={data.img} alt="" className="mx-auto w-4/5"/>
      </div>

      <div
        className="md:w-1/2 flex flex-col gap-6"
        style={{ scrollbarColor: "green white", scrollbarWidth: "thin" }}
      >
        <div className="flex justify-between">
          <p className="px-4 py-2 rounded-full w-fit h-fit text-white font-bold" style={{backgroundColor:`${data.color}`}}>
            {data.category}
          </p>
          <SelectProductComponent/>
        </div>
        <h1 className="text-4xl font-bold" style={{color:`${data.color}`}}>{data.heading}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rerum
          tempore eius et natus in dolore architecto ea, eos reiciendis aut
          placeat voluptas soluta deserunt explicabo distinctio, repellat quod
          autem consequatur numquam magni atque ullam magnam eum. Sapiente odit
          eum expedita corporis architecto labore et ratione amet aspernatur,
          magnam porro.
        </p>
        <div className="flex flex-col gap-4">
          <p className="font-bold" style={{color:`${data.color}`}}>Available in:</p>

          {data.availableIn.map((value) => (
            <div key={value} className="px-4 py-2 rounded-md shadow-md w-fit border">
              {value}
            </div>
          ))}
        </div>

        <div
          className="bg-slate-100 p-4 flex flex-col gap-4"
          style={{ width: "400px"}}
        >
          <div className="flex justify-between">
          <p>Nutritional Facts</p>
          <p>{`Per (100) ${data.measurmentUnit}`}</p>
          </div>

          <span className="border border-black"></span>

          <div className="px-2 py-1 flex flex-col gap-2">
            <div className="grow flex justify-between">
              <span>Energy (kcal)</span>
              <span>{data.nutritionalFact['Energy']}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Total Fat (g)</span>
              <span>{data.nutritionalFact['totalFat']}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Saturated Fat (g)</span>
              <span>{data.nutritionalFact['saturatedFat']}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Trans Fat (g)</span>
              <span>{data.nutritionalFact['transFat']}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Cholestrol (mg)</span>
              <span>{data.nutritionalFact['cholestrol']}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Carbohydrates (g)</span>
              <span>{data.nutritionalFact['carbohydrates']}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Total Sugar (g)</span>
              <span>{data.nutritionalFact['totalSugar']}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Added Sugar (g)</span>
              <span>{data.nutritionalFact['addedSugar']}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Protein (g)</span>
              <span>{data.nutritionalFact['protein']}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Sodium (mg)</span>
              <span>{data.nutritionalFact['sodium']}</span>
            </div>
            <div className="grow flex justify-between">
              <span>Calcium (mg)</span>
              <span>{data.nutritionalFact['calcium']}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
