import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Shipment from "./components/Shipment/Shipment";

export const CategoryContext = createContext();

function App() {
	const [count, setCount] = useState(0);
	const [category, setCategory] = useState("");
	return (
		<CategoryContext.Provider value={[count, setCount, category, setCategory]}>
			<h1>This is App : {count}</h1>
			<Header></Header>
			<Home></Home>
			<Shipment></Shipment>
		</CategoryContext.Provider>
	);
}

export default App;
