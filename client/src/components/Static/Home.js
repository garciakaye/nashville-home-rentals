import React from "react";
import HomeListingCard from "./HomeListingCard"
import { Container } from "react-bootstrap";

function Home({ listings }) {
    
    const showListings = listings.map((listing) => {
        return <HomeListingCard key={listing.id} listing={listing} />
    })
    
    

    return (
        <Container>
            <h1>Nash Home Rentals</h1>
            {showListings} 
        </Container>
    );
}

export default Home;