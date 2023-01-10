import React, { useState } from "react";

import ChartMethod from "./ChartMethod";

import { SORT_TYPES } from "./utils";

const MakeSortButton = (ButtonText, onclickFunction) => {
	return (
		// <button key={"sort-button-" + ButtonText.toLowerCase().replace(" ", "-")} onClick={() => {SortMethods(ButtonText)}}>{ButtonText}</button>
		<button
			key={"sort-button-" + ButtonText.toLowerCase().replace(" ", "-")}
			onClick={() => {
				onclickFunction(ButtonText);
			}}
		>
			{ButtonText}
		</button>
	);
};

const MakeSortButtons = (TextArray, onclickFunction) => {
	let returnJSX = [];

	TextArray.forEach((text) => {
		const newButton = MakeSortButton(text, onclickFunction);
		returnJSX.push(newButton);
	});

	return returnJSX;
};

function ChartMethodContainer() {
	function SortMethods(sortType) {
		if (!Object.keys(SORT_TYPES).includes(sortType)) {
			alert(`Invalid sort type given: ${sortType}`);
			return false;
		} else {
			const sortedArray = methodsToRender.slice().sort(SORT_TYPES[sortType]);
			setMethodsToRender(sortedArray);
		}
	}

	const testMethodAttribs = {
		method_id: 1,
		title: "Silly Love COOL STRAT THAT I FOUND ON THE INTERNET",
		score: 69,
		difficulty: 1,
		body: "yeah u just readi t slow idk what else there is to say very simple this chart is a fkn 10 anyawy. Please like and subscribe to theory.tools.",
		author: "your(e) mother 😳",
		timestamp: 1672550428000,
	};

	const testMethodAttribs2 = {
		method_id: 2,
		title: "Gape Horn",
		score: 600,
		difficulty: 5,
		body: "you must quit iidx and have sex (impossible)",
		author: "allah",
		timestamp: 1672550429001,
	};

	const testMethodAttribs3 = {
		method_id: 3,
		title: "Silly Love COOL STRAT THAT I FOUND ON THE INTERNET",
		score: 70,
		difficulty: 1,
		body: "Watch out for the song **abruptly changing to 124BPM**. The small break before the BPM change is a good warning that its coming up. Memorise where it speeds up again and this chart shouldn't give you any problems.",
		timestamp: 2472550428000,
	};

	const testMethodAttribs4 = {
		method_id: 4,
		title: "im going to kill myself",
		score: 69,
		difficulty: 1,
		body: "Watch out for the song **abruptly changing to 124BPM**. The small break before the BPM change is a good warning that its coming up. Memorise where it speeds up again and this chart shouldn't give you any problems.",
		timestamp: 2472550428000,
	};

	// const [currentSortType, setCurrentSortType] = useState("None");
	const testMethods = [
		testMethodAttribs,
		testMethodAttribs2,
		testMethodAttribs3,
		testMethodAttribs4,
	];
	const [methodsToRender, setMethodsToRender] = useState(testMethods);

	return (
		<div className="chart-method-container">
			<div id="method-sorting-buttons">
				{MakeSortButtons(Object.keys(SORT_TYPES), SortMethods)}
			</div>
			{methodsToRender.map((method) => {
				return <ChartMethod attribs={method} />;
			})}
		</div>
	);
}

export default ChartMethodContainer;
