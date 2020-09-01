import React from "react";
import { Link, useHistory } from "react-router-dom";

const Country = (props) => {
	const { name, region, alpha3Code, flag } = props.country;
	const history = useHistory();
	const countryStyle = {
		border: "1px solid coral",
		padding: "20px",
		margin: "20px auto",
		borderRadius: "20px",
		width: "50%",
	};

	const showCountryInfo = (code) => {
		history.push(`/country/${code}`);
	};

	return (
		<div style={countryStyle}>
			<h1>
				<Link to={`/country/${alpha3Code.toLowerCase()}`}>{name}</Link>
			</h1>
			<h4>Region : {region}</h4>
			<p>
				<img src={flag} alt={name} style={{ height: "150px" }} />
			</p>
			<button onClick={() => showCountryInfo(alpha3Code.toLowerCase())}>
				Show Details
			</button>
		</div>
	);
};

export default Country;
