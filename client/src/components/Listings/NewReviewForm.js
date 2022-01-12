import React, { useState } from 'react';
import { baseUrl } from '../../Globals';

function NewReviewForm({ listingId, reviews }) {
	const [ newReview, setNewReview ] = useState({
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
				name: newReview.comment,
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
						onAddItemToList(listingId, newlyAddedReview)
						setNewReview(initialValues)
				})
}


  return (
		<div>
			<form className="add-new-review-form" onSubmit={handleSubmit}>
				<input
				type="text"
				name="name"
				value={newReview.comment}
				className="new-item-input-text"
				onChange={handleChange}
				/>
				<br/>
				<button className="add-new-item-btn" type="submit">Add</button>
		</form>
		</div>
	)
}

export default NewReviewForm
