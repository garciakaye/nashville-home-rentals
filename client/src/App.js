import React, { useEffect, useState } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";
import Home from "./components/Static/Home";
import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import Listings from "./components/Listings/Listings";
import { baseUrl, headers, getToken } from "./Globals"


function App() {
  const [listings, setListings] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function loginUser(user) {
    setCurrentUser(user);
    setLoggedIn(user);
  }

  function logoutUser(){
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.removeItem('jwt');
  }

    useEffect(() => {
      const token = localStorage.getItem('jwt')
      if(token && !loggedIn) {
        // fetch to rails backend
        fetch(baseUrl + 'get-current-user', {
          method: "GET",
          headers: {
            ...headers,
            ...getToken()
          }
        })
          .then(resp => resp.json())
          .then(user => loginUser(user))
        // setLoggedIn(true);
      }
    }, [loggedIn])


  useEffect(() => {
    fetch(baseUrl + '/listings')
    .then((r) => r.json())
    .then((listing) => setListings(listing))
  }, [])

  return (
    <div>
      {/* { loggedIn ? <h1>Hey we're loggedin!</h1> : null } */}
    <NavBar loggedIn={ loggedIn } logoutUser={ logoutUser } />
    <Switch>
      <Route exact path="/">
        <Home listings={listings}/>
      </Route>
      <Route exact path="/signup">
        <Signup loginUser={ loginUser } loggedIn={ loggedIn }/>
      </Route>
      <Route exact path="/login">
        <Login loggedIn={ loggedIn } loginUser={ loginUser }/>
      </Route>
      <Route exact path="/listings">
        <Listings listings={listings}/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
