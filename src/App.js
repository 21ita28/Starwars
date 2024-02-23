import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Planets from "./components/Planets";
import People from "./components/People";
import Starships from "./components/Starships";

function App() {
	const [selectedComponent, setSelectedComponent] = useState("Main");

	return (
		<>
			<nav>
				<button onClick={() => setSelectedComponent("Main")}>Main Page</button>
				<button onClick={() => setSelectedComponent("Planets")}>Planets</button>
				<button onClick={() => setSelectedComponent("Starships")}>Starships</button>
				<button onClick={() => setSelectedComponent("People")}>People</button>
			</nav>
			<div id="ctn-main">
				{selectedComponent === "Main" && <Main />}
				{selectedComponent === "Planets" && <Planets />}
				{selectedComponent === "Starships" && <Starships />}
				{selectedComponent === "People" && <People />}
			</div>
		</>
	);
}

export default App;