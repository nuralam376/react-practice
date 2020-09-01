import React, { useState } from "react";
import { useEffect } from "react";
import Country from "../Country/Country";

const Countries = () => {
	const [countries, setCounties] = useState([]);

	useEffect(() => {
		const url = "https://restcountries.eu/rest/v2/all";
		fetch(url)
			.then((response) => response.json())
			.then((data) => setCounties(data));
	}, []);

	return (
		<div>
			<h1>Countries : {countries.length}</h1>
			{countries.map((country) => (
				<Country key={country.alpha3Code} country={country} />
			))}
		</div>
	);
};

export default Countries;
