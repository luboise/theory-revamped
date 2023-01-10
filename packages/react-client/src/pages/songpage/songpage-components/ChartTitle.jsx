import React from "react";

import { LinkButton } from "../../../global-components";

const ChartTitle = ({ attribs }) => {
	return (
		<div className="chart-header">
			<h1>{!attribs.title ? "NULL TITLE" : attribs.title}</h1>

			<LinkButton url={attribs.url} text="Preview" />
		</div>
	);
};

export default ChartTitle;
