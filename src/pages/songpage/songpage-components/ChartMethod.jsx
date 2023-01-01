import React from "react";



import { SVG_THUMBS_UP, SVG_THUMBS_DOWN, SVG_STAR_FILLED, SVG_STAR_HOLLOW, STAR_MAX_DIFFICULTY} from "./utils";

const ChartDifficulty = (methodDifficulty) => {
	let SVGArray = [];

	for (let i = 0; i < methodDifficulty; i++) SVGArray.push(SVG_STAR_FILLED)
	for (let i = 0; i < STAR_MAX_DIFFICULTY - methodDifficulty; i++) SVGArray.push(SVG_STAR_HOLLOW)

	return SVGArray.flat();

}

const ChartMethod = ( { attribs }) => {
	if (!(attribs.title && attribs.score && attribs.difficulty && attribs.timestamp)) return;
	
	return (	
	<div className="chart-method">
		<div className="chart-method-header">
			<div className="chart-method-rating-container">
				<button className="btn-vote">{SVG_THUMBS_DOWN}</button>
				<p>attribs.score</p>
				<button className="btn-vote">{SVG_THUMBS_UP}</button>
			</div>
			<h2>{attribs.title}</h2>
			{ChartDifficulty(attribs.difficulty)}
			<div className=""></div>
		</div>
		

	</div>
	)
};

export default ChartMethod;
