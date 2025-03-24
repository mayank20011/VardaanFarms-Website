import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SelectProductComponent() {
  const { name } = useParams();
  const navigatee = useNavigate();
  const[paramsValue, setParamsValue] = useState(selectFromParams(name));

  function selectFromParams(name) {
    if (name === "a2-desi-cow-milk") {
      return "A2 Desi Cow Milk";
    } else if (name === "full-cream") {
      return "Full Cream";
    } else if (name === "toned-milk") {
      return "Toned Milk";
    } else if (name === "double-toned-milk") {
      return "Double Toned Milk";
    } else if (name === "natural-cow-milk") {
      return "Natural Cow Milk";
    } else if (name === "buffalo-milk") {
      return "Buffalo Milk";
    } else if (name === "family-pack") {
      return "Family Pack";
    } else if (name === "butter-milk") {
      return "Butter Milk";
    } else if (name === "masala-chach") {
      return "Masala Chach";
    } else if (name === "slim-curd") {
      return "Slim Curd";
    } else if (name === "curd") {
      return "Curd";
    } else if (name == "a2-desi-cow-ghee") {
      return "A2 Desi Cow Ghee";
    } else if (name === "buffalo-ghee") {
      return "Buffalo Ghee";
    }
  }

  function navigate(e) {
    let str = e.target.value;
    navigatee(`/product/${str}`, { replace: true });
  }

  useEffect(() => {
    setParamsValue(name);
    document.getElementById("selectProduct").value = paramsValue;
  }, [paramsValue]);

  return (
    <select
      className="outline-none px-4 py-2 rounded-lg right-4 md:right-0 shadow-md cursor-pointer font-bold bg-slate-100"
      id="selectProduct"
      onChange={navigate}
    >
      <option value="a2-desi-cow-milk">A2 Desi Cow Milk</option>
      <option value="full-cream">Full Cream</option>
      <option value="toned-milk">Toned Milk</option>
      <option value="double-toned-milk">Double Toned Milk</option>
      <option value="natural-cow-milk">Natural Cow Milk</option>
      <option value="buffalo-milk">Buffalo Milk</option>
      <option value="family-pack">Family Pack</option>
      <option value="butter-milk">Butter Milk</option>
      <option value="masala-chach">Masala Chach</option>
      <option value="slim-curd">Slim Curd</option>
      <option value="curd">Curd</option>
      <option value="a2-desi-cow-ghee">A2 Desi Cow Ghee</option>
      <option value="buffalo-ghee">Buffalo Ghee</option>
    </select>
  );
}

export default SelectProductComponent;
