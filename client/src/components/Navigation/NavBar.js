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

function NavBar({ loggedIn, logoutUser }) {

  function loggedOutLinks(){
    return (
      <div>
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
        <NavLink 
        to="/signup"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
          color: "white"
        }}
        >
        Signup
        </NavLink>
        <NavLink 
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
          color: "white"
        }}
        >
        Login
        </NavLink>
      </div>
    )
  }


  function handleLogout(e){
    e.preventDefault();
    logoutUser();
  }

  function loggedInLinks(){
    return (
      <div>
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
        <a href="#home" onClick={ handleLogout }>Logout</a>
      </div>
    )
  }

  return (
    <div className="navbar">
      { loggedIn ? loggedInLinks() : loggedOutLinks() }
    </div>
    );
  }

export default NavBar;