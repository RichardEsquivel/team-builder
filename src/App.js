import React, { useState } from 'react';
import './App.css';
import Card from './components/Card.js';
import DataForm from './components/DataForm.js';

function App() {
	//mock data to map out initial state
	const [people, setPeople] = useState([
		{ name: "Richard", email: "nope@dope", role: "Student" },
		{ name: "Steve", email: "stevey@steve", role: "TL" },
	])
	//creating variable addPerson which will house value of props setPeople and that will then be passed to DataForm
	const addPerson = person => {
		setPeople([...people, person]);
	};
	return (
		<div className="App">
			<DataForm submitPerson={addPerson} />
			{people.map(person => <Card person={person} />)}
		</div>
	);
}

export default App;
