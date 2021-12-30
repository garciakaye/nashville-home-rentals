import React from "react";


function Home({ listings }) {
    
    const showListings = listings.map((listing) => (
        <ul key={listing.id}>
            {listing.name}
        </ul>
    ))
    
    

    return (
        <div>
            <h2>Nashville Luxury Home Rentals</h2>
           {showListings}
            
        </div>
      );
}

export default Home;