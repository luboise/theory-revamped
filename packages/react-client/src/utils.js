import axios from "axios";

const ROOT_URL = "http://localhost:9000/dev";

export async function callAPI(urlExtra) {
	try {
		const fetchedPromise = await axios({
			url: ROOT_URL + urlExtra,
			method: "GET",
		});

		return fetchedPromise;
	} catch (error) {
		console.log(error);
	}
}
