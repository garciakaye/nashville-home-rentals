import React, { useEffect } from 'react';
import ListingCard from './ListingCard';
import { useHistory } from "react-router-dom";

function Listings({ listings, loggedIn, onAddReviewToListing, onDeleteReviewFromListing }) {
	// const {id, name, price, reviews, images} = listings
	

const history = useHistory();

	useEffect(() => {
		if( !loggedIn ) {
				history.push("/login")
		}
	}, [loggedIn, history])


  const showListings = listings.map((listing) => {
    return <ListingCard 
						key={listing.id} 
						listing={listing} 
						onAddReviewToListing={onAddReviewToListing} 
						onDeleteReviewFromListing={onDeleteReviewFromListing} 
						/>
  })
    

return (
  <div id="listing-collection">
  {showListings}
  </div>
  );
}

export default Listings
