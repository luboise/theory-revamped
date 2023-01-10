import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

import { SVG_THUMBS_UP, SVG_THUMBS_DOWN, SVG_STAR_FILLED, SVG_STAR_HOLLOW, STAR_MAX_DIFFICULTY} from "./utils";

const DateFromUNIXTimestamp = (timestamp) => {
	const dateObject = new Date(timestamp);
	return String(dateObject);
}

const ChartDifficulty = (methodDifficulty) => {
	let SVGArray = [];

	for (let i = 0; i < methodDifficulty; i++) SVGArray.push(SVG_STAR_FILLED)
	for (let i = 0; i < STAR_MAX_DIFFICULTY - methodDifficulty; i++) SVGArray.push(SVG_STAR_HOLLOW)

	return <div className="chart-method-difficulty-container">{SVGArray.flat()}</div>;

}

const ChartMethod = ( { attribs }) => {
	if (!(attribs.title && attribs.score && attribs.difficulty && attribs.timestamp)) return;
	
	return (	
	<div className="chart-method">
		<div className="chart-method-header">
			<div id="chart-method-rating-container">
				<button className="btn-vote">{SVG_THUMBS_DOWN}</button>
				<p>{attribs.score}</p>
				<button className="btn-vote">{SVG_THUMBS_UP}</button>
			</div>
			<h2>{attribs.title}</h2>
			{ChartDifficulty(attribs.difficulty)}
		</div>

		<div className="chart-method-body">
			<ReactMarkdown children={attribs.body}></ReactMarkdown>
		</div>
		
		<div className="chart-method-footer">
			<p>Author: {attribs.author}<br></br>Timestamp: {DateFromUNIXTimestamp(attribs.timestamp)}</p>
		</div>
		
		

 	</div>
	)
};

export default ChartMethod;