import React, { useEffect, useState, useRef } from "react";

export default function TextageEmbed({ fetchUrl }) {
	fetchUrl = "https://textage.cc/score/30/dicadica.html?1AC00";

	const [renderStatus, setRenderStatus] = useState("loading");

	const baseIFrame = (
		<iframe
			src={fetchUrl}
			onLoad={() => {
				setRenderStatus("loaded");
			}}
		/>
	);

	const htmlData = useRef(baseIFrame);

	useEffect(() => {
		const iframe = document.querySelector("iframe");
		const table = (
			<table>
				<td>TEST TABLE</td>
			</table>
		);
		// const table = document.getElementsByTagName("table")[0];
		htmlData.current = table;
	}, [renderStatus]);

	return <div class="textage-embed">{htmlData.current}</div>;
}
