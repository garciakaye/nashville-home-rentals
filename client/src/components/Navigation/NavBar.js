import React from "react";
import { NavLink } from "react-router-dom";


const linkStyles = {
  display: "inline-flex",
  font: "cursive",
  padding: "7px",
  margin: "0 12px 12px",
  background: "rgb(247,247,247)",
  textDecoration: "none",
  color: "Black",
};

function NavBar({ loggedIn, logoutUser, currentUser }) {

  function loggedOutLinks(){
    return (
      <div>
        <NavLink className="home-nav-link"
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          // background: "black",
          color: "grey",
          font: "cursive"
        }}
        >
        Home
        </NavLink>
        <NavLink 
        to="/signup"
        exact
        style={linkStyles}
        activeStyle={{
          // background: "black",
          color: "grey"
        }}
        >
        Signup
        </NavLink>
        <NavLink 
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          // background: "black",
          color: "grey"
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
      <div className="nav-links">
        <NavLink 
        to="/listings"
        exact
        style={linkStyles}
        activeStyle={{
          // background: "black",
          color: "grey"
        }}
        >
        Nash Home Rentals
        </NavLink>
        <NavLink 
        to="/profile"
        exact
        style={linkStyles}
        activeStyle={{
          // background: "black",
          color: "grey",
          
        }}
        >
        {currentUser.username}
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