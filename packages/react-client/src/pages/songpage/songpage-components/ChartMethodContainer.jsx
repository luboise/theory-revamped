import React, { useState } from "react";

import ChartMethod from "./ChartMethod";
import TextageEmbed from "./TextageEmbed";

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

function ChartMethodContainer({ apiReturn }) {
	function SortMethods(sortType) {
		if (!Object.keys(SORT_TYPES).includes(sortType)) {
			alert(`Invalid sort type given: ${sortType}`);
			return false;
		} else {
			const sortedArray = methodsToRender.slice().sort(SORT_TYPES[sortType]);
			setMethodsToRender(sortedArray);
		}
	}

	const [methodsToRender, setMethodsToRender] = useState(
		apiReturn.methods || []
	);

	if (apiReturn.errorStatus) {
		return (
			<p>
				<span className="error-text">
					<b>An error has occured.</b>
				</span>
			</p>
		);
	} else {
		return (
			<div className="chart-method-container">
				<TextageEmbed
					url={"https://textage.cc/score/22/_sennen.html?1N600"}
				/>
				{methodsToRender.length ? (
					((
						<div id="method-sorting-buttons">
							{MakeSortButtons(Object.keys(SORT_TYPES), SortMethods)}
						</div>
					),
					methodsToRender.map((methodObject, index) => {
						return (
							<ChartMethod
								methodObject={methodObject}
								listIndex={index}
							/>
						);
					}))
				) : (
					<div className="info-box">
						<p>There are currently no methods for this chart.</p>
					</div>
				)}
			</div>
		);
	}
}

export default ChartMethodContainer;
