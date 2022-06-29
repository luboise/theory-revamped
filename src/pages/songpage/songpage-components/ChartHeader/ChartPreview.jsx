import React from "react";

const ChartPreview = ({ url }) => {
	if (url === null || url === undefined) return;

	let re =
		/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;

	let ytID = url.match(re);

	return (
		<a
			href="https://youtu.be/Iw1-wYBAcc4?t=26"
			title="【FAXX-44】Fascination MAXX (A) MAX-44 全国トップ / played by DOLCE. / beatmania IIDX27 HEROIC VERSE"
		>
			<img
				alt="Link to chart preview"
				src="http://img.youtube.com/vi/Iw1-wYBAcc4/0.jpg"
			/>
		</a>
	);
};

export default ChartPreview;
