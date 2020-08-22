import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
	// const names = ["Def", "Lorem", "Ipsum", "Amet"];
	const persons = [
		{ name: "Abc", age: 23 },
		{ name: "Def", age: 29 },
		{ name: "Ghi", age: 39 },
	];
	return (
		<div className="App">
			<Counter></Counter>
			{persons.map((person) => (
				<Person name={person.name} age={person.age}></Person>
			))}

			<User></User>
			{/* <Person name="Abc" age="29"></Person>
			<Person name={names[2]}></Person> */}
		</div>
	);
}

function Person(props) {
	const personStyle = {
		border: "2px solid red",
		width: "80%",
		margin: "10px auto",
		backgroundColor: "cyan",
	};
	return (
		<div style={personStyle}>
			<h1>{props.name}</h1>
			<p>{props.age || 20}</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, sint!
			</p>
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(10);

	const handleClick = () => setCount(count + 1);
	return (
		<div>
			<button onClick={handleClick}>Add Person</button>
			<PersonCounter personCount={count}></PersonCounter>
		</div>
	);
}

function PersonCounter(props) {
	return (
		<div>
			<h1>Number of Persons: {props.personCount}</h1>
		</div>
	);
}

function User() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);

	return (
		<div>
			{users.map((user) => (
				<h1>{user.name}</h1>
			))}
		</div>
	);
}
export default App;
