import React from 'react'
import { useParams } from 'react-router-dom';
import ProductDetails from '../../Components/ProductDetails/ProductDetails.jsx';
import allProductsDetail from '../../Components/ProductDetails/AllProductDetail.js';
import { Helmet } from 'react-helmet-async';

function ProductPage({totalPaddingToGive, returnPage}) {

  const {name} = useParams();

  return (
    <div style={{paddingTop:`${totalPaddingToGive}px`}} className="bg-white">
      <Helmet>
        <title>{allProductsDetail[name].seoData.title}</title>
        <meta name="description" content={allProductsDetail[name].seoData.description}/>
        <meta name="keyword" content={allProductsDetail[name].seoData.keywords}/>
        <meta property="og:title" content={allProductsDetail[name].seoData.og.title}/>
        <meta property="og:description" content={allProductsDetail[name].seoData.og.description}/>
        <meta property="og:image" content={allProductsDetail[name].seoData.og.image}/>
        <meta property="og:url" content={allProductsDetail[name].seoData.og.url}/>
        <meta name="twitter:card" content={allProductsDetail[name].seoData.twitter.card}/>
        <meta name="twitter:title" content={allProductsDetail[name].seoData.twitter.title}/>
        <meta name="twitter:description" content={allProductsDetail[name].seoData.twitter.description}/>
        <meta name="twitter:image" content={allProductsDetail[name].seoData.twitter.image}/>
        <link rel="canonical" href={allProductsDetail[name].seoData.canonical} />
      </Helmet>
      <div className="min-h-screen bg-white mt-12 mx-auto max-w-[1400px] lg:w-3/4 md:w-11/12 px-4 md:px-0 relative">
         <ProductDetails data={allProductsDetail[name]} returnPage={returnPage}/>
      </div>
    </div>
  )
}

export default ProductPage;