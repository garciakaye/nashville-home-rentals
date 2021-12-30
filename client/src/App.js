import React, { useEffect, useState } from "react";
// import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Home from "./components/static/Home";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";


function App() {
  const [listings, setListings] = useState([])
    
  useEffect(() => {
    fetch("/listings")
    .then((r) => r.json())
    .then((listing) => setListings(listing))
  }, [])

  return (
    <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home listings={listings}/>
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
