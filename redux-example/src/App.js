import React from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import PatientReducer from "./components/PatientReducer/PatientReducer";
import ReducerCount from "./components/ReducerCount/ReducerCount";
import Shop from "./components/Shop/Shop";

function App() {
	return (
		<div className="App">
			<Cart />
			<Shop />
			<ReducerCount />
			<PatientReducer />
		</div>
	);
}

export default App;
