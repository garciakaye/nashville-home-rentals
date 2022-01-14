import React, {  useState } from 'react';
import EditProfileForm from './EditProfileForm';
import { Card } from "react-bootstrap";


function Profile({ currentUser, onDeleteProfile }) {
	const {id, first_name, last_name, email, username} = currentUser
	const [showForm, setShowForm] = useState(false);


	function handleEditClick() {
		setShowForm((showForm) => !showForm);
}


	return (
		<Card className="profile-card">
			<button 
			onClick={() => onDeleteProfile(id)}>Delete Account</button>
			<Card.Body >
				First Name: {first_name}
				<br></br>
				Last Name: {last_name}
				<br></br>
				Email: {email}
				<br></br>
				Username: {username}
				{ showForm ? 
				<EditProfileForm userId={id} firstName={first_name} username={username} /> 
				: 
				null 
				}
				<div className="add-item">
            <button 
						className="add-item-btn" 
						onClick={handleEditClick}>
							<span role="img" aria-label="edit">
              ✏️
            </span></button>
        </div>
				<br></br>
			</Card.Body>
		</Card>
	)
}

export default Profile
