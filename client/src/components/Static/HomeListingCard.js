import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Row, Col, Button } from "react-bootstrap";



function HomeListingCard({ listing }) {
  const [index, setIndex] = useState(0)
  const {id, name, image, price} = listing

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
		<Row className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <Col>
      <Card>
        <Card.Header>{name}</Card.Header>
        <Carousel interval={1000000}>
          <Carousel.Item>
          <Card.Img variant="top" src={image} alt={name}/>
          </Carousel.Item>
          <Carousel.Item>
          <Card.Img variant="top" src={image} alt={name}/>
          </Carousel.Item>
        </Carousel>
        <Card.Text>${price} / night</Card.Text>
      </Card>
      </Col>
      
		</Row>
  )
}

export default HomeListingCard;