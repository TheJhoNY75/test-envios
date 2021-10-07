import React from "react";
import { Link } from "react-router-dom";
import { NavBarCont } from "../styles/components/NavBar.styled";
import { ReactComponent as Logo } from "../assets/white-logo.svg";
import { BsCartFill } from "react-icons/bs";

const NavBar = (props) => {
  return (
    <NavBarCont>
      <div className="nav">
        <Logo />
        <div className="links">
          <Link to="/" className="link">
            <span>Ordenes</span>
          </Link>
          <div className="car">
            <span className="n-items">2</span>
            <BsCartFill />
          </div>
        </div>
      </div>
    </NavBarCont>
  );
};

export default NavBar;
