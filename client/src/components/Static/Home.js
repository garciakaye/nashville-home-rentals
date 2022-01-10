import React from "react";
import HomeListingCard from "./HomeListingCard"
import { Container } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

function Home({ listings }) {
    const [id, name, price, images] = listings

    // const showListings = listings.map((listing) => {
    //     return <HomeListingCard key={listing.id} listing={listing} />
    // })
    
   

    return (
        <div>
            <h1>Nash Home Rentals</h1>
        
        <HomeListingCard key={listings.id} listings={listings} /> 
        
        </div>
    );
}

export default Home;