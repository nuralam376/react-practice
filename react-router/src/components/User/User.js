import React from "react";
import { Link, useHistory } from "react-router-dom";

const User = (props) => {
	const { id, name, email } = props.user;
	const history = useHistory();

	const userStyle = {
		border: "1px solid purple",
		margin: "20px auto",
		padding: "20px",
		borderRadius: "20px",
		width: "50%",
	};

	const showUser = (id) => {
		history.push(`/user/${id}`);
	};

	return (
		<div style={userStyle}>
			<h1>Id : {id}</h1>
			<h2>
				<Link to={`/user/${id}`}>{name}</Link>
			</h2>
			<p>{email}</p>
			<button onClick={() => showUser(id)}>Show Details</button>
		</div>
	);
};

export default User;
