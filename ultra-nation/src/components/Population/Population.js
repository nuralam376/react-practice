import React from "react";

const Population = (props) => {
	const newCountries = props.newCountries;

	const totalPopulation = newCountries.reduce(
		(total, country) => total + country.population,
		0
	);
	return (
		<div>
			<h3>Total Countries Added - {newCountries.length}</h3>
			<p>Total Population : {totalPopulation}</p>
		</div>
	);
};

export default Population;
