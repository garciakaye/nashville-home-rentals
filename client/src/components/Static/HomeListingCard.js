import React from 'react';
import Carousel from 'react-bootstrap/Carousel';




function HomeListingCard({ listings }) {
  const {id, name, images, price} = listings

  
  return (
  
    <Carousel >
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://a0.muscache.com/im/pictures/c7345789-a686-4bfd-a17b-41767f5bb054.jpg?im_w=1200"
        alt="First slide"
      />
        
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://a0.muscache.com/im/pictures/c7345789-a686-4bfd-a17b-41767f5bb054.jpg?im_w=1200"
        alt="First slide"
      />
        
      </Carousel.Item>
</Carousel>

		
  )
}

export default HomeListingCard;


