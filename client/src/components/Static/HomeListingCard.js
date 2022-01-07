import React from 'react';


function HomeListingCard({ listing }) {
  const {id, name, image, price} = listing

  return (
		<div>
			{name}
      
		</div>
  )
}

export default HomeListingCard;