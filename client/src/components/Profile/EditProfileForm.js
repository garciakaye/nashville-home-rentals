import React, { useState } from 'react';
import { baseUrl } from '../../Globals';

function EditProfileForm({ username, userId }) {
  const [newUsername, setNewUsername] = useState(username);

function handleSubmit(){
	// e.preventDefault();
	
	fetch(baseUrl + `/users/${userId}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: newUsername,
		}),
	})
		.then((r) => r.json())
		.then((newName) => setNewUsername(newName.username))
		// setNewUsername("")
}

  return (
		<form onSubmit={handleSubmit}>
			<input
			type="text"
			value={newUsername}
			className="new-username-input"
			onChange={(e) => setNewUsername(e.target.value)}
			>
			</input>
			<button className="save-btn" type="submit">💾</button>
		</form>
	)
}

export default EditProfileForm
