import React, { useState } from 'react';
import { baseUrl } from '../../Globals';

function NewReviewForm({ listingId, onAddReviewToListing }) {
	const [newReview, setNewReview] = useState({
		comment: ""
	})

	const initialValues = {
		comment: ""
	}

	function handleChange(e) {
		setNewReview({
			...newReview,
			[e.target.name]: e.target.value
		})
	}

	function handleSubmit(e) {
		e.preventDefault();
		const addedReview = {
				comment: newReview.comment,
				listing_id: listingId
		};
		fetch(baseUrl + '/reviews', {
				method: "POST",
				headers: {
						"Content-Type": "application/json",
				},
				body: JSON.stringify(addedReview),
		})
				.then((r) => r.json())
				.then((newlyAddedReview) => {
					onAddReviewToListing(listingId, newlyAddedReview)
					setNewReview(initialValues)
				})
}


return (
	<form className="add-new-review-form" onSubmit={handleSubmit}>
		<input
		type="text"
		name="comment"
		value={newReview.comment}
		className="new-item-input-text"
		onChange={handleChange}
		/>
		<br/>
		<button className="add-new-item-btn" type="submit">Add</button>
	</form>
	)
}

export default NewReviewForm
