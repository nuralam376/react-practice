import React, { useContext } from "react";
import Category from "../Category/Category";
import { CategoryContext } from "../../App";

const Home = () => {
	const [count, setCount] = useContext(CategoryContext);

	return (
		<div style={{ border: "1px solid purple" }}>
			<h1>This is home : {count}</h1>
			<Category></Category>
		</div>
	);
};

export default Home;
