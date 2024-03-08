import React, { useState, useEffect } from "react";
import axios from "axios";

function People() {
	const [isLoading, setLoading] = useState(true);
	const [starWarsDataPeople, setStarWarsDataPeople] = useState();
	const [urlPeople, setUrlPeople] = useState(
		`https://swapi.py4e.com/api/people/?page=1`
	);

	useEffect(() => {
		axios.get(urlPeople).then((response) => {
			setStarWarsDataPeople(response.data);
			setLoading(false);
		});
	}, [urlPeople]);

	if (isLoading) {
		return (
			<div>
				<div>
					<h1 className="txt-shadow-blue">People</h1>
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

	const allPeopleOnPage = starWarsDataPeople.results.map((people) => {
		console.log(people);

		return (
			<div className="card card-people">
				<h2 key={people.name}>{people.name}</h2>
				<p>Gender: {people.gender}</p>
				<p>Birth Year: {people.birth_year}</p>
				<p>Height: {people.height}</p>
				<p>Hair Color: {people.hair_color}</p>
				<p>Skin Color: {people.skin_color}</p>
				<p>Eye Color: {people.eye_color}</p>
				<br />
			</div>
		);
	});

	return (
		<div>
			<h1 className="txt-shadow-blue">People</h1>
			<button
				onClick={previousPage}
				disabled={starWarsDataPeople.previous ? false : true}
			>
				⏪ Previous Page
			</button>
			<button
				onClick={nextPeoplePage}
				disabled={starWarsDataPeople.next ? false : true}
			>
				Next Page⏩
			</button>

			<main>{allPeopleOnPage}</main>
		</div>
	);

	function nextPeoplePage() {
		setLoading(true);
		setUrlPeople(starWarsDataPeople.next);
	}

	function previousPage() {
		setLoading(true);
		setUrlPeople(starWarsDataPeople.previous);
	}
}

export default People;
