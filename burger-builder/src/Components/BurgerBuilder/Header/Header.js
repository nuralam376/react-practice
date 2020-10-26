import "./Header.css";
import React from "react";
import { Nav, Navbar, NavbarBrand, NavItem } from "reactstrap";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Navigation">
      <Navbar style={{ backgroundColor: "#D70F64", height: "70px" }}>
        <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
          <img src={logo} alt="" width="80px" />
        </NavbarBrand>
        <Nav className="mr-md-5">
          <NavItem>
            <Link to="/" className="NavLink">
              Home
            </Link>
            <Link className="NavLink" to="/orders">
              Orders
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
