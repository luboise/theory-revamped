import React from "react";

import { LinkButton } from "../../../global-components";

const ChartTitle = ({ songObject }) => {
	return (
		<div className="chart-header">
			<h1>{!"title" in songObject ? "NULL TITLE" : songObject.title}</h1>

			<LinkButton
				url={songObject.url ? songObject.url : ""}
				text="Chart Preview"
			/>
		</div>
	);
};

export default ChartTitle;
