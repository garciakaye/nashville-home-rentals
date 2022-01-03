import React, { useState } from 'react';
import { baseUrl, headers } from '../../Globals';

function Signup() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

function handleSubmit(e){
	e.preventDefault();

	const strongParams = {
		user: {
			username,
			password
		}
	}

	fetch(baseUrl + '/users', {
		method: "POST",
		headers,
		body: JSON.stringify(strongParams)
	})
}


  return (
    <div>
			<h1>Create Account</h1>
      <form onSubmit={ handleSubmit }>
				<div>
					<label htmlFor="username">Username: </label>
					<input type="text" name="username" id="username" value={ username } onChange={ e => setUsername(e.target.value)}/>
				</div>
				<div>
					<label htmlFor="password">Password: </label>
					<input type="password" name="password" id="password" value={ password } onChange={ e => setPassword(e.target.value)} />
				</div>
				<input type="submit" value="Create Account" />
      </form>
  	</div>
  )
}

export default Signup
