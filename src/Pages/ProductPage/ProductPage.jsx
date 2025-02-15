import React from 'react'
import { useParams } from 'react-router-dom';
import ProductDetails from '../../Components/ProductDetails/ProductDetails.jsx';
import allProductsDetail from '../../Components/ProductDetails/AllProductDetail.js';

function ProductPage({totalPaddingToGive}) {

  const {name} = useParams();

  return (
    <div style={{paddingTop:`${totalPaddingToGive}px`}} className="bg-white">
      <div className="min-h-screen bg-white mt-12 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 relative">
         <ProductDetails data={allProductsDetail[name]}/>
      </div>
    </div>
  )
}

export default ProductPage;