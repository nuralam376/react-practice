import React, { useState, useEffect } from "react";
import "./App.css";
import News from "./components/News/News";
import Chart from "./components/Charts/Chart";
import axios from "axios";

function App() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const url =
			"https://newsapi.org/v2/top-headlines?country=us&apiKey=efd128fcf6b3481696736974345b3381";

		// fetch(url)
		// 	.then((response) => response.json())
		// 	.then((data) => setArticles(data.articles));
		axios(url).then((data) => setArticles(data.data.articles));
	}, []);
	return (
		<div className="container">
			<h1>Charts</h1>
			<Chart></Chart>
			<br />
			<br />
			<h1>Top Headlines : {articles.length}</h1>
			{articles.map((article, index) => (
				<News key={index} article={article}></News>
			))}
		</div>
	);
}

export default App;
