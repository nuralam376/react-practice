import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TopHeadline from "./components/TopHeadline/TopHeadline";
import FragmentEx from "./components/FragmenEx/FragmentEx";

function App() {
	return (
		<div className="App">
			<h1 className="text-white bg-dark p-2 w-50 mx-auto">React Bootstrap</h1>
			<Header></Header>
			<FragmentEx></FragmentEx>
			<TopHeadline></TopHeadline>
		</div>
	);
}
export default App;
