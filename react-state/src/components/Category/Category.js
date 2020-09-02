import React, { useContext, useState, useEffect } from "react";
import CategoryDetail from "../CategoryDetail/CategoryDetail";
import { CategoryContext } from "../../App";

const Category = () => {
	const [count, setCount, category] = useContext(CategoryContext);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const allProducts = [
			{ id: 1, name: "HP", category: "Laptop" },
			{ id: 2, name: "Asus", category: "Laptop" },
			{ id: 3, name: "Lenovo", category: "Laptop" },

			{ id: 4, name: "Samsung", category: "Mobile" },
			{ id: 5, name: "Nokia", category: "Mobile" },
			{ id: 6, name: "Apple", category: "Mobile" },

			{ id: 7, name: "Canon", category: "Camera" },
			{ id: 8, name: "Nikkon", category: "Camera" },
			{ id: 9, name: "Sony", category: "Camera" },
		];

		const filteredProducts = allProducts.filter(
			(product) => product.category.toLowerCase() === category.toLowerCase()
		);
		setProducts(filteredProducts);
	}, [category]);

	return (
		<div>
			<h1>This is category : {category}</h1>
			<div style={{ display: "flex" }}>
				{products.map((product) => (
					<CategoryDetail key={product.id} product={product}></CategoryDetail>
				))}
			</div>
		</div>
	);
};

export default Category;
