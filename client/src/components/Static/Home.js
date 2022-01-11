import React from "react";
import HomeListingCard from "./HomeListingCard"
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


function Home({ listings }) {
    
  return (
    <Container className="home-container">
      <h1 className="home-h1">Nashville Home Rentals</h1>
        <HomeListingCard key={listings.id} listings={listings} /> 
    </Container>
    );
}

export default Home;