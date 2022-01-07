import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Row, Col, Button } from "react-bootstrap";



function HomeListingCard({ listing }) {
  const {id, name, image, price} = listing

  return (
		<Row className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <Col>
      <Card>
        <Card.Header>{name}</Card.Header>
        <Carousel>
        <Card.Img vairant="top" src={image} alt={name}/>
        
        </Carousel>
      </Card>
      </Col>
      
		</Row>
  )
}

export default HomeListingCard;