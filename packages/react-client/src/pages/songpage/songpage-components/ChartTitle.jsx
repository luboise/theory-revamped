import React from "react";

import { LinkButton } from "../../../global-components";

const ChartTitle = ({ songObject = {} }) => {
	const objKeys = Object.keys(songObject);

	return (
		<div className="chart-header">
			<h1>
				{objKeys.includes("title") ? songObject.title : "NULL TITLE"}
			</h1>

			{objKeys.includes("url") ? (
				<LinkButton url={songObject} text="Chart Preview" />
			) : (
				<></>
			)}
		</div>
	);
};

export default ChartTitle;
