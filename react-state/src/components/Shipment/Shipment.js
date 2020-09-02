import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const Shipment = () => {
	const [count, setCount] = useContext(CategoryContext);
	return (
		<div>
			<h1>This is shipment : {count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default Shipment;
