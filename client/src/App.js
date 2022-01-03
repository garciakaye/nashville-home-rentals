import React, { useEffect, useState } from "react";
// import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Home from "./components/static/Home";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";


function App() {
  const [listings, setListings] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function loginUser(user) {
    setCurrentUser(user);
    setLoggedIn(true);
  }
    useEffect(() => {
      const token = localStorage.getItem('jwt')
      if(token && !loggedIn) {
        // fetch to rails backend
        setLoggedIn(true);
      }
    }, [])
  // useEffect(() => {
  //   fetch("/listings")
  //   .then((r) => r.json())
  //   .then((listing) => setListings(listing))
  // }, [])

  return (
    <div>
      { loggedIn ? <h1>Hey we're loggedin!</h1> : null }
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home listings={listings}/>
      </Route>
      <Route exact path="/signup">
        <Signup loginUser={ loginUser }/>
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
