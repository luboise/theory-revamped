import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TextageEmbed({ fetchUrl }) {
	const [htmlData, sethtmlData] = useState();

	const handleData = async () => {
		if (!htmlData) {
			try {
				const fetchedPromise = await axios({
					url: fetchUrl,
					method: "GET",
				});
				console.log(fetchedPromise);
				sethtmlData(fetchedPromise);

				return fetchedPromise;
			} catch (error) {
				console.log(error);
			}
		}
	};

	useEffect(() => {
		handleData();
	}, []);

	return <div>TextageEmbed</div>;
}
