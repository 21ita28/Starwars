import React, { useState, useEffect } from "react";
import axios from "axios";

function Starships() {
	const [isLoading, setLoading] = useState(true);
	const [starWarsDataStarships, setStarWarsDataStarships] = useState();
	const [urlStarships, setUrlStarships] = useState(
		`https://swapi.py4e.com/api/starships/?page=1`
	);

	useEffect(() => {
		axios.get(urlStarships).then((response) => {
			setStarWarsDataStarships(response.data);
			setLoading(false);
		});
	}, [urlStarships]);

	if (isLoading) {
		return (
			<div>
				<div>
					<h1 className="txt-shadow-red">Starships</h1>
					<button
						disabled={true}
					>
						⏪ Previous Page
					</button>
					<button
						disabled={true}
					>
						Next Page⏩
					</button>
				</div>
				<div className="overlay">
					Loading...
				</div>
			</div>
		);
	}

	const allStarshipsOnPage = starWarsDataStarships.results.map((Starship) => {
		console.log(Starship);

		return (
			<div className="card card-starships">
				<h2 key={Starship.name}>{Starship.name}</h2>
				<p>Manufacturer: {Starship.manufacturer}</p>
				<p>Cost in credits: {Starship.cost_in_credits}</p>
				<p>Length: {Starship.length}</p>
				<p>Max atmosphering speed: {Starship.max_atmosphering_speed}</p>
				<p>Crew: {Starship.crew}</p>
				<p>Passengers: {Starship.passengers}</p>
				<p>Cargo capacity: {Starship.cargo_capacity}</p>
				<br />
			</div>
		);
	});

	return (
		<div>
			<h1 className="txt-shadow-red">Starships</h1>
			<button
				onClick={previousPage}
				disabled={starWarsDataStarships.previous ? false : true}
			>
				⏪ Previous Page
			</button>
			<button
				onClick={nextStarshipsPage}
				disabled={starWarsDataStarships.next ? false : true}
			>
				Next Page⏩
			</button>

			<main>{allStarshipsOnPage}</main>
		</div>
	);

	function nextStarshipsPage() {
		setLoading(true);
		setUrlStarships(starWarsDataStarships.next);
	}

	function previousPage() {
		setLoading(true);
		setUrlStarships(starWarsDataStarships.previous);
	}
}

export default Starships;
