import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SelectProductComponent() {
  const { name } = useParams();
  const navigatee = useNavigate();

  function selectFromParams(name) {
    if (name === "a2DesiCowMilk") {
      return "A2 Desi Cow Milk";
    } else if (name === "fullCream") {
      return "Full Cream";
    } else if (name === "tonedMilk") {
      return "Toned Milk";
    } else if (name === "doubleTonedMilk") {
      return "Double Toned Milk";
    } else if (name === "naturalCowMilk") {
      return "Natural Cow Milk";
    } else if (name === "buffaloMilk") {
      return "Buffalo Milk";
    } else if (name === "familyPack") {
      return "Family Pack";
    } else if (name === "butterMilk") {
      return "Butter Milk";
    } else if (name === "masalaChach") {
      return "Masala Chach";
    } else if (name === "slimCurd") {
      return "Slim Curd";
    } else {
      return "Curd";
    }
  }
  
  function convertToString(a){
    let s="";
    for(let i=0;i<a.length;i++){
      if(a[i]!=" "){
        s=s+a[i];
      }
    }
    return s;
  }

  function navigate(e){
    let str = e.target.value;
    let f = str[0];
    let newStr=[];
    f=f.toLowerCase();
    newStr[0]=f;
    for(let i=1;i<str.length;i++){
      newStr[i]=str[i]
    }
    str=convertToString(newStr);
    navigatee(`/product/${str}`, {replace:true});
  }

  let paramsValue = selectFromParams(name);

  useEffect(() => {
    document.getElementById("selectProduct").value = paramsValue;
  }, [paramsValue]);

  return (
    <select
      className="outline-none px-4 py-2 rounded-lg right-4 md:right-0 shadow-md cursor-pointer font-bold bg-slate-100"
      id="selectProduct"
      onClick={navigate}
    >
      <option value="A2 Desi Cow Milk">
        A2 Desi Cow Milk
      </option>
      <option value="Full Cream">
        Full Cream
      </option>
      <option value="Toned Milk">
        Toned Milk
      </option>
      <option value="Double Toned Milk">
        Double Toned Milk
      </option>
      <option value="Natural Cow Milk">
        Natural Cow Milk
      </option>
      <option value="Buffalo Milk">
        Buffalo Milk
      </option>
      <option value="Family Pack">
        Family Pack
      </option>
      <option value="Butter Milk">
        Butter Milk
      </option>
      <option value="Masala Chach">
        Masala Chach
      </option>
      <option value="Slim Curd">
        Slim Curd
      </option>
      <option value="Curd">
        Curd
      </option>
      <option value="A2 Desi Cow Ghee">
        A2 Desi Cow Ghee
      </option>
      <option value="Buffalo Ghee">
        Buffalo Ghee
      </option>
    </select>
  );
}

export default SelectProductComponent;
