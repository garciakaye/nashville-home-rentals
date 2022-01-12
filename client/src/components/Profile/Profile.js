import React, { useState } from 'react';
import EditProfileForm from './EditProfileForm';

function Profile({ currentUser }) {
	const [newUsername, setNewUsername] = useState(currentUser.username);
	const [showForm, setShowForm] = useState(false);
	const [isEditing, setIsEditing] = useState(false)

console.log(currentUser)

function handleUpdateUsername(updatedUserNameobj) {
	const updatedUsername = newUsername.map((username) => {
		if (username.username === updatedUserNameobj.username) {
			return updatedUsername
		}
		else {
			return username
		}
	});
	setNewUsername(updatedUsername)
}

	return (
		<div>
			<label>First Name: {currentUser.first_name} </label>
			<label>Last Name: {currentUser.last_name} </label>
			<label>Email: {currentUser.email} </label>
			<label>Username: {currentUser.username} </label>
			<label>Password: {currentUser.password} </label>
			{showForm ? <EditProfileForm onClick={() => setIsEditing((isEditing) => !isEditing)} /> : null}
                    <div className="add-item">
                        <button className="edit-btn" >✏️</button>
                        
                    </div>
			
		</div>
	)
}

export default Profile
