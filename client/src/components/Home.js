import { useEffect, useState } from "react";

function Home() {
    const [listings, setListings] = useState([])
    
    useEffect(() => {
        fetch("/listings")
        .then((r) => r.json())
        .then((listing) => console.log(listing))
    }, [])
    
    const listingToDisplay = listings.map((listing) => (
        <ul key={listing.id}> 
            {listing.name}
        </ul>
    ))

    return (
        <div>
            <h2>Listings</h2>
            <li>
                {listingToDisplay}
            </li>
        </div>
      );
}

export default Home;