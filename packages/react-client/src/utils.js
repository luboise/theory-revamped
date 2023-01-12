const ROOT_URL = "http://localhost:9000/dev";

// export function callAPI(urlExtra, requestOptions = null) {
// 	return new Promise(async function (resolve, reject) {
// 		const fetchedPromise = requestOptions
// 			? await fetch(ROOT_URL + urlExtra, requestOptions)
// 			: await fetch(ROOT_URL + urlExtra);

// 		resolve(fetchedPromise.json());
// 	});
// }

export function callAPI(urlExtra, requestOptions = null) {
	let value = fetchData(urlExtra, requestOptions);
	return value;
}

async function fetchData(urlExtra, requestOptions) {
	try {
		let fetchedPromise = requestOptions
			? await fetch(ROOT_URL + urlExtra, requestOptions)
			: await fetch(ROOT_URL + urlExtra);
		return await fetchedPromise.json();
	} catch (error) {
		console.log(error);
	}
}
