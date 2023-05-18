import React, { useEffect, useState, useRef } from "react";

export default function TextageEmbed({ fetchUrl }) {
	// fetchUrl = "https://textage.cc/score/30/dicadica.html?1AC00";

	// fetchUrl = "https://gobetween.oklabs.org/" + fetchUrl;
	// fetchUrl.substring(fetchUrl.indexOf("/") + 2);

	fetchUrl =
		"https://cschmidt0121.pythonanywhere.com/chart_snippet?iidx_ver=30&song=summerbl&chart_type=2&difficulty=A&level=10&start=6&end=13";

	const [renderStatus, setRenderStatus] = useState("loading");

	const baseIFrame = (
		<iframe
			src={fetchUrl}
			onLoad={() => {
				setRenderStatus("loaded");
			}}
			visibility="hidden"
		/>
	);

	const htmlData = useRef(baseIFrame);

	useEffect(() => {
		const iframe = document.querySelector("iframe");
		iframe.setAttribute("visibility", "visible");
	}, [renderStatus]);

	return <div class="textage-embed">{htmlData.current}</div>;
}
