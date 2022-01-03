import React from "react";
import ListingContainer from "./ListingContainer"

function Home({ listings }) {
    
    const showListings = listings.map((listing) => {
        return <ListingContainer key={listing.id} listing={listing} />
    })
    
    

    return (
        <div>
            {showListings} 
        </div>
    );
}

export default Home;