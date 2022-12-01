import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import useStyle from "../../cryptohunting/components/style";
import GoToTop from "../../coreComponents/GoToTop";

const Homepage = () => {
  const style = useStyle();
  return (
    <>
      <div className={style.App}>
        <Banner />
        <CoinsTable />
      </div>
      <GoToTop />
    </>
  );
};

export default Homepage;
