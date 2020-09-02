import React, { useContext } from "react";
import { CategoryContext } from "../../App";

const CategoryDetail = (props) => {
	const { name, category } = props.product;
	return (
		<div
			style={{
				marginRight: "50px",
				borderRight: "2px solid red",
				padding: "20px",
			}}
		>
			<h3>
				{name} - {category}
			</h3>
		</div>
	);
};

export default CategoryDetail;
