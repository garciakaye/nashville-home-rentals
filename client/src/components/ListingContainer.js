import React from 'react';


function ListingContainer({ listing }) {
   const {id, name, image, price} = listing

   return (
       <div>
           {image}
       </div>
   )
}

export default ListingContainer;