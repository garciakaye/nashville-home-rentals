import React from 'react';
import ListingCard from './ListingCard';

function Listings({ listings }) {
    const showListings = listings.map((listing) => {
        return <ListingCard key={listing.id} listing={listing} />
    })
    

    return (
        <div>
        {showListings}
        </div>
    );
}

export default Listings
