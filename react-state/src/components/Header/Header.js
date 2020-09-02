import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const Header = () => {
	const [count, setCount, category, setCategory] = useContext(CategoryContext);
	return (
		<div>
			<h1>This is header : {count}</h1>
			<h2>Category : {category}</h2>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<br />
			<br />
			<button onClick={() => setCategory("laptop")}>Laptop</button>
			<button onClick={() => setCategory("mobile")}>Mobile</button>
			<button onClick={() => setCategory("camera")}>Camera</button>
		</div>
	);
};

export default Header;
