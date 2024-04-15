import TextageEmbed from "./TextageEmbed";
import Markdown from "react-markdown";

function ChartMethodBody({ methodBody }) {
	const re = /(<TEXTAGE[^>]+\/>)/;
	const splitString = methodBody.split(re);

	return (
		<div className="chart-method-body">
			{splitString.map((methodPiece) => {
				if (methodPiece.startsWith("<TEXTAGE")) {
					return <TextageEmbed textageString={methodPiece} />;
				} else {
					return <Markdown>{methodPiece}</Markdown>;
				}
			})}
		</div>
	);
}

export default ChartMethodBody;
