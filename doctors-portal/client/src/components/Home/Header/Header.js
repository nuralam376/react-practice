import React from "react";
import HeaderMain from "../HeaderMain/HeaderMain";
import BusinessInfo from "../BusinessInfo/BusinessInfo";
import Navbar from "../../Shared/Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar color="white" />
      <HeaderMain />
      <BusinessInfo />
    </div>
  );
};

export default Header;
