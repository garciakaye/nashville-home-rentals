import React from "react";
import HomeListingCard from "./HomeListingCard"

function Home({ listings }) {
    
    const showListings = listings.map((listing) => {
        return <HomeListingCard key={listing.id} listing={listing} />
    })
    
    

    return (
        <div>
            <h1>Nash Home Rentals</h1>
            {showListings} 
        </div>
    );
}

export default Home;