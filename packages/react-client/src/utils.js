const ROOT_URL = "http://localhost:9000/dev";

export function callAPI(urlExtra, requestOptions = null) {
	return requestOptions
		? fetch(ROOT_URL + urlExtra, requestOptions)
		: fetch(ROOT_URL + urlExtra);
}
