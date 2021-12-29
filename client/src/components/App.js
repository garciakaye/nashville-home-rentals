import React, { useEffect, useState } from "react";
// import './App.css';
// import NavBar from "./NavBar";
import Home from "./Home";


function App() {
  const [listings, setListings] = useState([])
    
    useEffect(() => {
        fetch("/listings")
        .then((r) => r.json())
        .then((listing) => console.log(listing))
    }, [])

  return (
    <div>
    <Home listings={listings}/>
    </div>
  );
}

export default App;
