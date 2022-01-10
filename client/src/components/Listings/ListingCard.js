import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card, Row, Col } from "react-bootstrap";

function ListingCard({ listing }) {
    const {id, name, price, images} = listing

  
    
		return (
		<Row className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <Col>
      <Card>
        <Card.Header>{name}</Card.Header>
        <Carousel fade >
          {images.map((image, index) => {
            return <Carousel.Item key={index}>
              <Card.Img variant="top" src={image.image_url} alt={name}></Card.Img>
            </Carousel.Item>
          })}
        </Carousel>
        <Card.Text>${price} / night</Card.Text>
      </Card>
      </Col>
		</Row>
  )
}

export default ListingCard;

