import React from "react";
import Body from "../../Components/Body/Body.jsx";
import { Helmet } from "react-helmet-async";
function HomePage({totalPaddingToGive}) {
  return (
    <>
      <Helmet>
        
      </Helmet>
      <Body totalPaddingToGive={totalPaddingToGive}/>
    </>
  );
}

export default HomePage;
