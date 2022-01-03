import React from "react";
import { Link } from "react-router-dom";


function NavBar({ loggedIn, logoutUser }) {

  function loggedOutLinks(){
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
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
        <Link to="/">Home</Link>
        <a href="#" onClick={ handleLogout }>Logout</a>
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