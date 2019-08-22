import React, { useState } from 'react';

const DataForm = (props) => {
	//Deconstructing setPeople out of props this will be used to add people to the end of the people array
	const { setPeople } = props;
	//creating state to hold person data created in form
	const [person, setPerson] = useState({ name: "", email: "", role: "" });

	const handleChange = event => {
		setPerson({ ...person, [event.target.name]: event.target.value })


	}
	const handleSubmit = event => {
		event.preventDefault();
		setPeople(people => [...people, person]);
		//This clears the values in the form after submitting
		setPerson({ name: "", email: "", role: "" });
	};
	return (
		<form onSubmit={handleSubmit}>
			<input placeholder="name"
				value={person.name}
				name="name"
				onChange={handleChange} />
			<input placeholder="email"
				value={person.email}
				type="email"
				name="email"
				onChange={handleChange} />
			<input placeholder="role"
				value={person.role}
				name="role"
				onChange={handleChange} />
			<button type="submit">Add Person</button>
		</form>
	)
}

export default DataForm;