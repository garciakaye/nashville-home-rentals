import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from "react-bootstrap";
import NewReviewForm from './NewReviewForm';


function ListingCard({ listing, onAddReviewToListing, onDeleteReviewFromListing }) {
  const [showForm, setShowForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const {id, name, price, reviews, images} = listing
  

  function handleNewReviewClick() {
    setShowForm((showForm) => !showForm);
  }

  const displayComments = reviews.map((review) => (
    <ul key={review.id} >
      {review.comment}
      <button className="delete-btn" onClick={() => onDeleteReviewFromListing(id, review)}>🗑️</button>
    </ul>
  ))
    
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
        </Card.Text>
        { showForm ? <NewReviewForm listingId={listing.id} reviews={reviews} onAddReviewToListing={onAddReviewToListing} /> : null }
          <button className="add-review-btn" onClick={handleNewReviewClick}>Add A Review</button>
      {displayComments}
    </Card>
  )
}

export default ListingCard;

