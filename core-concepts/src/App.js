import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
	var person = {
		name: "Lorem",
		age: 29,
	};

	var person2 = {
		name: "Ipsum",
		age: 30,
	};

	var style = {
		color: "red",
		backgroundColor: "blue",
	};

	const persons = ["Abc", "Def", "GHI"];
	const products = [
		{ name: "Illustrator", price: "$60.99" },
		{
			name: "IDM",
			price: "$209.99",
		},
	];
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Editing <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>React Paragraph</p>
				<p>
					React - {2 + 3} {2 + 3 + (3 - 2)}{" "}
				</p>
				<p style={style}>
					Hello {person.name} {person.age}
				</p>
				<h1 style={{ color: "blue", backgroundColor: "yellow" }}>
					Hello {person2.name} {person2.age}
				</h1>
			</header>
			<div>
				<Counter></Counter>
				<ul>
					{persons.map((person, index) => (
						<li key={index}>{person}</li>
					))}
				</ul>
				<ul>
					{products.map((product, index) => (
						<li key={index}>{product.name + " - " + product.price}</li>
					))}
				</ul>
				<Person name="Lorem" age="29"></Person>
				<Person name="Ipsum" age="35"></Person>
				<Person name="Dolor" age="37"></Person>
				<Person name={persons[0]}></Person>
				{products.map((product, index) => (
					<Product key={index} product={product}></Product>
				))}
			</div>
			<div>
				<User></User>
			</div>
		</div>
	);
}

function Product(props) {
	const productStyle = {
		width: "200px",
		height: "200px",
		backgroundColor: "gray",
		padding: "10px",
		margin: "20px",
		float: "left",
	};
	const { name, price } = props.product;
	return (
		<div style={productStyle}>
			<h2>{name}</h2>
			<p>{price}</p>
			<button>Buy Now</button>
		</div>
	);
}

function Person(props) {
	const personStyle = {
		border: "2px solid red",
		margin: "10px",
	};
	return (
		<div style={personStyle}>
			<h1>Hello {props.name}</h1>
			<p>Age : {props.age}</p>
		</div>
	);
}

function Counter() {
	const [count, setCount] = useState(0);
	const handleIncrease = () => setCount(count + 1);
	return (
		<div>
			<h1>Count : {count}</h1>
			<button onClick={handleIncrease}>Increase</button>
			<button onClick={() => setCount(count - 1)}>Decrease</button>
		</div>
	);
}

function User() {
	const [users, setUser] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((users) => setUser(users));
	}, []);

	return (
		<div>
			<h2>Dynamic Users - {users.length}</h2>
			<ul>
				{users.map((user, index) => (
					<li key={index}>{user.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
