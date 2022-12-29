import React from "react";

const LinkButton = ({ url, text, svgpath }) => {
	if (!url) {
		console.log(`INVALID URL: ${url}`)
		return;
	}

	let re =
		/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;

	let ytID = url.match(re)[1];

	return (
		<a
			href={url}
			title="TITLE OF THE VIDEO HERE"
		>
			{text}
			{/* <img
				alt="Link to chart preview"
				src={`http://img.youtube.com/vi/${ytID}/0.jpg`}
			/> */}
		</a>
	);
};

export default LinkButton;
