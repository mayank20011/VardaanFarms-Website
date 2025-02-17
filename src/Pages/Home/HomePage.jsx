import React from "react";
import Body from "../../Components/Body/Body.jsx";

const HomePage = ({ totalPaddingToGive, setReturnPage }) => {
  return (
    <>
      <Body
        totalPaddingToGive={totalPaddingToGive}
        setReturnPage={setReturnPage}
      />
    </>
  );
};

export default HomePage;
