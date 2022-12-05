import React from "react";
import { Outlet } from "react-router-dom";
import Banner from "../../Pages/Home/Banner/Banner";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = (props) => {
  return (
    <div>
      <Banner/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
