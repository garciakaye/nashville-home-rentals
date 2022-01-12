import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Card } from "react-bootstrap";
import NewReviewForm from './NewReviewForm';


function ListingCard({ listing, onAddComment }) {
  const [showForm, setShowForm] = useState(false);
  const {id, name, price, reviews, images} = listing
  const [comment, setComment] = useState({
    id: reviews.id,
    comment: reviews.comment
  })

  function handleAddComment(newComment) {
    setComment({...comment, newComment})
  }

  function handleNewReviewClick() {
    setShowForm((showForm) => !showForm);
  }

  const displayComments = reviews.map((review) => (
    <ul key={review.id} >
      {review.comment}
      {/* <button>Delete</button> */}
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
        { showForm ? <NewReviewForm listingId={listing.id} reviews={reviews} /> : null }
          <button className="add-item-btn" onClick={handleNewReviewClick}>➕</button>
        {/* {reviews.map((review, index) => {
        return <span key={index}>
          {review.comment}
        </span>
      })} */}
      {displayComments}
    </Card>
  )
}

export default ListingCard;

