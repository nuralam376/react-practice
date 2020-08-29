import React, { useState, useEffect } from "react";
import News from "../News";

const TopHeadline = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const url =
			"https://newsapi.org/v2/top-headlines?country=us&apiKey=efd128fcf6b3481696736974345b3381";

		fetch(url)
			.then((response) => response.json())
			.then((data) => setArticles(data.articles));
	}, []);

	return (
		<div>
			<h2>Top Headline - {articles.length}</h2>

			{articles.map((article) => (
				<News article={article}></News>
			))}
		</div>
	);
};

export default TopHeadline;
