import React, { useState, useEffect } from 'react';
import { baseUrl, headers } from '../../Globals';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function Signup({ loginUser, loggedIn }) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const history = useHistory();

	useEffect(() => {
		if( loggedIn ) {
			history.push("/listings")
		}
	}, [loggedIn, history])

function handleSubmit(e){
	e.preventDefault();

	const strongParams = {
		user: {
			first_name: firstName,
			last_name: lastName,
			email,
			username,
			password
		}
	}

	fetch(baseUrl + '/users', {
		method: "POST",
		headers,
		body: JSON.stringify(strongParams)
	})
		.then(resp => resp.json())
		.then(data => {
			//login user
			loginUser(data.user);
			localStorage.setItem('jwt', data.token)
		})
}


return (
  <div>
		<h1 className="signup-h1">Create Account</h1>
		<p className="signup-p">Signup to make bookings, leave reviews, and more!</p>
    <Form className="signup-form" onSubmit={ handleSubmit }>
			<Form.Group className="form-label">
				<Form.Label htmlFor="firstName"></Form.Label>
					<input type="text" name="firstName" id="firstName" placeholder="First Name" value={ firstName } onChange={ e => setFirstName(e.target.value)}/>
			</Form.Group>
			<Form.Group className="form-label">
				<Form.Label htmlFor="lastName"></Form.Label>
					<input type="text" name="lastName" id="lastName" placeholder="Last Name" value={ lastName } onChange={ e => setLastName(e.target.value)}/>
			</Form.Group>
			<Form.Group className="form-label">
				<Form.Label htmlFor="email"></Form.Label>
					<input type="text" name="email" id="email" placeholder="Email" value={ email } onChange={ e => setEmail(e.target.value)}/>
			</Form.Group>
			<Form.Group className="form-label">
				<Form.Label htmlFor="username"></Form.Label>
					<input type="text" name="username" id="username" placeholder="Username" value={ username } onChange={ e => setUsername(e.target.value)}/>
			</Form.Group>
			<Form.Group className="form-label">
				<Form.Label htmlFor="password"></Form.Label>
					<input type="password" name="password" id="password" placeholder="Password" value={ password } onChange={ e => setPassword(e.target.value)} />
			</Form.Group>
			<input className="input-submit" type="submit" value="Create Account" />
    </Form>
  </div>
  )
}

export default Signup;
