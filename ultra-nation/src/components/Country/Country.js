import React from "react";

const Country = (props) => {
	const { name, flag, population, region } = props.country;
	const flagStyle = {
		width: "100px",
		height: "50px",
	};

	const countryStyle = {
		border: "1px  solid black",
		margin: "10px",
		padding: "10px",
	};

	const buttonStyle = {
		padding: "10px",
		backgroundColor: "coral",
		border: "1px solid coral",
		borderRadius: "5px",
		color: "white",
		cursor: "pointer",
	};

	const handleAddCountry = props.handleAddCountry;

	return (
		<div style={countryStyle}>
			<h4>{name}</h4>
			<img style={flagStyle} src={flag} alt={name} />
			<p>Population : {population}</p>
			<p>Region : {region}</p>
			<button
				style={buttonStyle}
				onClick={() => handleAddCountry(props.country)}
			>
				Add Country
			</button>
		</div>
	);
};

export default Country;
