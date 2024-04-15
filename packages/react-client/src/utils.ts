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

export const GAME_VERSION_TITLES = {
	0: "1st Style",
	1: "substream",
	2: "2nd Style",
	3: "3rd Style",
	4: "4th Style",
	5: "5th Style",
	6: "6th Style",
	7: "7th Style",
	8: "8th Style",
	9: "9th Style",
	10: "10th Style",
	11: "11 - IIDX RED ",
	12: "12 - HAPPY SKY",
	13: "13 - DistorteD ",
	14: "14 - GOLD ",
	15: "13 - DJ TROOPERS",
	16: "16 - EMPRESS ",
	17: "17 - SIRIUS ",
	18: "18 - Resort Anthem",
	19: "19 - Lincle ",
	20: "20 - tricoro ",
	21: "21 - SPADA ",
	22: "22 - PENDUAL",
	23: "23 - copula ",
	24: "24 - SINOBUZ ",
	25: "25 - CANNON BALLERS",
	26: "26 - Rootage ",
	27: "27 - HEROIC VERSE",
	28: "28 - BISTROVER ",
	29: "29 - CastHour ",
	30: "30 - RESIDENT",
};
