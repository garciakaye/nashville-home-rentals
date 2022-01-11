import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from "react-bootstrap";
import NewReviewForm from './NewReviewForm';


function ListingCard({ listing }) {
    const [showForm, setShowForm] = useState(false);
    
    const {id, name, price, reviews, images} = listing

  function handleNewReviewClick() {
    setShowForm((showForm) => !showForm);
  }
    
		return (
      <Card>
        <Card.Header>{name}</Card.Header>
        <Carousel fade >
          {images.map((image, index) => {
            return <Carousel.Item key={index}>
              <Card.Img variant="top" src={image.image_url} alt={name}></Card.Img>
            </Carousel.Item>
          })}
        </Carousel>
        <Card.Title>${price} / night</Card.Title>
        <Card.Text>
          { showForm ? <NewReviewForm listingId={listing.id} /> : null }
            <button className="add-item-btn" onClick={handleNewReviewClick}>➕</button>
          </Card.Text>
        {reviews.map((review, index) => {
          return <Card.Text key={index}>
            {review.comment}
          </Card.Text>
        })}
      </Card>
  )
}

export default ListingCard;

