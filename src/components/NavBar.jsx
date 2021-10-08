import React from "react";
import { Link } from "react-router-dom";
import { NavBarCont } from "../styles/components/NavBar.styled";
import { ReactComponent as Logo } from "../assets/white-logo.svg";

const NavBar = () => {
  return (
    <NavBarCont>
      <div className="nav">
        <Logo />
        <div className="links">
          <Link to="/" className="link">
            <span>Orders</span>
          </Link>
          <Link to="/products" className="link">
            <span>Products</span>
          </Link>
        </div>
      </div>
    </NavBarCont>
  );
};

export default NavBar;
