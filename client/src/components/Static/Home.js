import React from "react";
import HomeListingCard from "./HomeListingCard"
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

function Home({ listings }) {
    
    const showListings = listings.map((listing) => {
        return <HomeListingCard key={listing.id} listing={listing} />
    })
    
    

    return (
        <div>
            <h1>Nash Home Rentals</h1>
        {/* <Container> */}
            {showListings} 
        {/* </Container> */}
        </div>
    );
}

export default Home;