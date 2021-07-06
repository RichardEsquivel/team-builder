import React from 'react';


//Card component can take in props from App in order to build the card
//we will need a name an email and a role. We will get the person object used to build this card out of our props
const Card = (props) => {
	//Deconstruction of person property out of props
	const { person } = props;
	return (
		<div>
			<div>{person.name}</div>
			<div>{person.email}</div>
			<div>{person.role}</div>
		</div>
	);

};

export default Card;