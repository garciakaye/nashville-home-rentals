import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-flex",
    font: "Montserrat",
    padding: "8px",
    margin: "0 7px 7px",
    background: "white",
    textDecoration: "none",
    color: "Black",
  };
  
  function NavBar() {
    return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
          color: "white"
        }} 
      >
        Home
      </NavLink>
    </div>
    );
  }

export default NavBar;