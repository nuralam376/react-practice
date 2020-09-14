import React from "react";

const Product = ({ product, addToCart }) => {
	const { id, name } = product;

	return (
		<div
			style={{
				border: "1px solid tomato",
				margin: "10px auto",
				padding: "10px 20px",
				width: "30%",
				borderRadius: "20px",
			}}
		>
			<h2>{name}</h2>
			<button onClick={() => addToCart(id, name)}>Add to Cart</button>
		</div>
	);
};

export default Product;
