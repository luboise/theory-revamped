import {
	SVG_THUMBS_UP,
	SVG_THUMBS_DOWN,
	SVG_STAR_FILLED,
	SVG_STAR_HOLLOW,
	STAR_MAX_DIFFICULTY,
} from "./utils";
import ChartMethodBody from "./ChartMethodBody";

const DateFromUNIXTimestamp = (timestamp) => {
	const dateObject = new Date(timestamp);
	return String(dateObject);
};

const ChartDifficulty = (methodDifficulty) => {
	let SVGArray = [];

	for (let i = 0; i < methodDifficulty; i++) SVGArray.push(SVG_STAR_FILLED);
	for (let i = 0; i < STAR_MAX_DIFFICULTY - methodDifficulty; i++)
		SVGArray.push(SVG_STAR_HOLLOW);

	return (
		<div className="chart-method-difficulty-container">
			{SVGArray.flat()}
		</div>
	);
};

const ChartMethod = ({ methodObject, listIndex }) => {
	if (
		!(
			methodObject.title &&
			(methodObject.rating === 0 || methodObject.rating) &&
			methodObject.difficulty &&
			methodObject.timestamp
		)
	)
		return <p>{`Method missing at index ${listIndex}`}</p>;

	return (
		<div className="chart-method" key={`method-index-${listIndex}`}>
			<div className="chart-method-header">
				<div id="chart-method-rating-container">
					<button className="btn-vote">{SVG_THUMBS_DOWN}</button>
					<p>{methodObject.rating}</p>
					<button className="btn-vote">{SVG_THUMBS_UP}</button>
				</div>
				<h2>{methodObject.title}</h2>
				{ChartDifficulty(methodObject.difficulty)}
			</div>

			<ChartMethodBody methodBody={methodObject.body} />

			<div className="chart-method-footer">
				<p>
					Author: {methodObject.author}
					<br></br>Timestamp:{" "}
					{DateFromUNIXTimestamp(methodObject.timestamp)}
				</p>
			</div>
		</div>
	);
};

export default ChartMethod;
