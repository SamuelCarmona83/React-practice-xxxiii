import React, { useState } from "react";


//create your first component
const Home = () => {

	const [ description , setDescription ] = useState("David ama el Jumbotron!");

	return (
		<div className="text-center container-fluid">
			<h1 className="">
				{description}
			</h1>
			<input type="text" onChange={ (event) => { setDescription( event.target.value); console.log(event) }}/>
			{/* <button className="" onClick={ () => { setCounter( counter+1 ) }} >
				sumar
			</button>
			<button className="" onClick={ () => { setCounter( counter-1 ) }} >
				restar
			</button> */}
		</div>
	);
};

export default Home;
