import React, { useEffect, useState, useRef } from "react";

export default function TextageEmbed({ textageString }) {
	const fetchUrl =
		"https://textage.everd.red/score/" +
		textageString.substring(
			textageString.search("=") + 1,
			textageString.search(">") - 2
		);

	const [renderStatus, setRenderStatus] = useState("loading");

	const baseIFrame = (
		<iframe
			src={fetchUrl}
			onLoad={() => {
				setRenderStatus("loaded");
			}}
			visibility="hidden"
			id={textageString}
		/>
	);

	const htmlData = useRef(baseIFrame);

	useEffect(() => {
		const iframe = document.getElementById(textageString);
		iframe.setAttribute("visibility", "visible");
	}, [renderStatus]);

	return <div class="textage-embed">{htmlData.current}</div>;
}
