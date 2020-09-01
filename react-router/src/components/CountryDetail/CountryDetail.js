import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";

const CountryDetail = () => {
	const { countryId } = useParams();
	const [country, setCountry] = useState({});

	const { name, region, population, flag } = country;

	useEffect(() => {
		const url = `https://restcountries.eu/rest/v2/alpha/${countryId}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setCountry(data))
			.catch((error) => console.log(error));
	}, [countryId]);

	return (
		<div>
			<h1>{name}</h1>
			<h2>Region : {region}</h2>
			<p>Population : {population}</p>
			<img src={flag} alt={name} style={{ height: "300px" }} />
			<br />
			<br />
			<Link to="/countries">Show All Countries</Link>
		</div>
	);
};

export default CountryDetail;
