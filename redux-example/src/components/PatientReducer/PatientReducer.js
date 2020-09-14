import React, { useReducer, useRef } from "react";
import { patientReducer, patientState } from "../../reducers/PatientReducer";

const PatientReducer = () => {
	const [state, dispatch] = useReducer(patientReducer, patientState);
	const nameRef = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch({
			type: "ADD_PATIENT",
			id: state.patients.length + 1,
			name: nameRef.current.value,
		});

		nameRef.current.value = "";
	};

	return (
		<div>
			<h1>PatientReducer : {state.patients.length}</h1>

			<form onSubmit={handleSubmit}>
				<input type="text" ref={nameRef} />
			</form>
			<ul>
				{state.patients.map((patient) => (
					<li
						key={patient.id}
						onClick={() => dispatch({ type: "REMOVE_PATIENT", id: patient.id })}
					>
						{patient.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default PatientReducer;
