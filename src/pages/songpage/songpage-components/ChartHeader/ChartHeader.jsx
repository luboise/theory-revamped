import React from "react";

import { default as ChartPreview } from "./ChartPreview";

const ChartHeader = ({ attribs }) => {
	return (
		<div className="chart-header">
			<h1>
				{attribs.title === null || attribs.title === undefined
					? "NULL TITLE"
					: attribs.title}
			</h1>

			<ChartPreview url={attribs.url} />
		</div>
	);
};

export default ChartHeader;
