import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



function HomeListingCard({ listings }) {
  
  return (
    <Carousel>
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
        src="https://a0.muscache.com/im/pictures/e58ecea4-720c-4371-98e0-c71c26990e7d.jpg?im_w=1200"
        alt="Second slide"
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://a0.muscache.com/im/pictures/miso/Hosting-51086566/original/7b9674c0-43fd-4a8b-b95e-5b40b2b32b45.jpeg?im_w=1200"
        alt="Third slide"
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://a0.muscache.com/im/pictures/8eded2b8-a6c8-45d3-b49b-9ecf7a8890c3.jpg?im_w=1200"
        alt="Fourth slide"
      />
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://a0.muscache.com/im/pictures/miso/Hosting-49726684/original/0ca703c5-a08d-4d84-ad44-b49596c16bfc.jpeg?im_w=1200"
        alt="Fifth slide"
      />
      </Carousel.Item>
  </Carousel>
  )
}

export default HomeListingCard;


