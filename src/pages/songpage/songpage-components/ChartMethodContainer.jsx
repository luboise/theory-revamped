import React from "react";

import ChartMethod from "./ChartMethod"

import {SORT_TYPES} from "./utils"

const SortMethods = (sortType) => {
	alert(`Implement soon. Sorttype expected: ${sortType}`)
}

const MakeSortButton = (ButtonText) => {
	return (
		// <button key={"sort-button-" + ButtonText.toLowerCase().replace(" ", "-")} onClick={() => {SortMethods(ButtonText)}}>{ButtonText}</button>
		<button key={"sort-button-" + ButtonText.toLowerCase().replace(" ", "-")} onClick={() => {SortMethods(ButtonText)}}>{ButtonText}</button>
	)
}

const MakeSortButtons = (TextArray) => {
	let returnJSX = [];

	TextArray.forEach( (text) => {
		const newButton = MakeSortButton(text);
		returnJSX.push(newButton)
	})
	
	return returnJSX
}

const testMethodAttribs = {
	"title": "Silly Love COOL STRAT THAT I FOUND ON THE INTERNET",
	"score": 69,
	"difficulty": 1,
	"body": "yeah u just readi t slow idk what else there is to say very simple this chart is a fkn 10 anyawy. Please like and subscribe to theory.tools.",
	"author": "your(e) mother 😳",
	"timestamp": 1672550428000
}

const testMethodAttribs2 = {
	"title": "Gape Horn",
	"score": 600,
	"difficulty": 5,
	"body": "you must quit iidx and have sex (impossible)",
	"author": "allah",
	"timestamp": 1672550429001
}

const testMethodAttribs3 = {
	"title": "Silly Love COOL STRAT THAT I FOUND ON THE INTERNET",
	"score": 69,
	"difficulty": 1,
	"body": "Watch out for the song **abruptly changing to 124BPM**. The small break before the BPM change is a good warning that its coming up. Memorise where it speeds up again and this chart shouldn't give you any problems.",
	"timestamp": 2472550428000
}

const ChartMethodContainer = ({ attribs }) => {
	return (
		<div className="chart-method-container">
			<div id="method-sorting-buttons">
				{MakeSortButtons(SORT_TYPES)}
			</div>
			<ChartMethod attribs={testMethodAttribs}/>
			<ChartMethod attribs={testMethodAttribs2}/>
			<ChartMethod attribs={testMethodAttribs3}/>
		</div>
	);
};


export default ChartMethodContainer;
