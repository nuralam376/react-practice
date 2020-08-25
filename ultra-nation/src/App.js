import React, { useState, useEffect } from "react";
import "./App.css";
import Country from "../src/components/Country/Country";
import Population from "./components/Population/Population";

function App() {
	const [countries, setCountries] = useState([]);
	const [newCountries, setNewCountries] = useState([]);

	useEffect(() => {
		fetch("https://restcountries.eu/rest/v2/all")
			.then((data) => data.json())
			.then((countries) => setCountries(countries))
			.catch((error) => console.log(error));
	}, []);

	const handleAddCountry = (country) => {
		const newCountry = [...newCountries, country];
		setNewCountries(newCountry);
	};

	return (
		<div className="App">
			<div className="country">
				<h1>Total Countries - {countries.length}</h1>
				<Population newCountries={newCountries}></Population>
			</div>

			{countries.map((country) => (
				<Country
					key={country.alpha3Code}
					country={country}
					handleAddCountry={handleAddCountry}
				></Country>
			))}
		</div>
	);
}

export default App;
