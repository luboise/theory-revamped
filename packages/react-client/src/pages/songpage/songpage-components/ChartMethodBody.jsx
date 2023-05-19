import React from "react";
import TextageEmbed from "./TextageEmbed";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function ChartMethodBody ({methodBody}) {
	const re = /(<TEXTAGE[^>]+\/>)/
	const splitString = methodBody.split(re);

	console.log(splitString);

	return (
		<div className="chart-method-body">
			{
				splitString.map((methodPiece) => {
						if (methodPiece.startsWith("<TEXTAGE")){
							return <TextageEmbed textageString={methodPiece} />
						} else {
							return <ReactMarkdown>{methodPiece}</ReactMarkdown>
						}
			})}
		</div>
	);
};



export default ChartMethodBody;
