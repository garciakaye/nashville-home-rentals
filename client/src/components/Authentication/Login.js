import React, { useState, useEffect } from 'react';
import { baseUrl, headers } from '../../Globals';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function Login({ loginUser, loggedIn, }) {
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
		username,
		password	
	}

	fetch(baseUrl + '/login', {
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
		<h1 className="login-h1">Login</h1>
    <Form className="login-form" onSubmit={ handleSubmit }>
			<Form.Group>
				<Form.Label htmlFor="username"> </Form.Label>
					<input 
					type="text" 
					name="username" 
					id="username" 
					value={ username }
					placeholder="username"
					onChange={ e => setUsername(e.target.value)}/>
			</Form.Group>
			<Form.Group>
				<Form.Label htmlFor="password"></Form.Label>
					<input 
					type="password" 
					name="password" 
					id="password" 
					value={ password }
					placeholder="password" 
					onChange={ e => setPassword(e.target.value)} />
			</Form.Group>
				<input className="login-btn" type="submit" value="Login" />
    </Form>
  </div>
  )
}

export default Login;
