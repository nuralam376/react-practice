import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const UserDetails = () => {
	const { userId } = useParams();
	const [user, setUser] = useState({});
	const { id, name, email, phone, website } = user;

	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
		fetch(url)
			.then((response) => response.json())
			.then((json) => setUser(json))
			.catch((error) => console.log(error));
	}, [userId]);

	return (
		<div>
			<h1>Id : {id}</h1>
			<h2>Name : {name}</h2>
			<h2>Email : {email}</h2>
			<h3>Phone : {phone}</h3>
			<h4>Website : {website}</h4>
			<Link to="/users">Show All Users</Link>
		</div>
	);
};

export default UserDetails;
