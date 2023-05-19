const createError = require("http-errors");
const serverless = require("serverless-http");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const { response } = require("express");

const app = express();

app.use(logger("dev"));

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// params for creating table in DynamoDB (implement later)
let params = {
	TableName: "Songs",

	AttributeDefinitions: [
		{ AttributeName: "song_id", AttributeType: "N" },
		{ AttributeName: "version", AttributeType: "N" },
		{ AttributeName: "approved", AttributeType: "B" },
	],
	KeySchema: [
		{ AttributeName: "song_id", KeyType: "HASH" }, // Partition key
	],
	GlobalSecondaryIndexes: {
		KeySchema: [
			{ AttributeName: "version", KeyType: "HASH" },
			{ AttributeName: "approved", KeyType: "HASH" },
		],
	},
};

const testChart = {
	song_id: 99999,
	version: -1,
	title: "Test chart title",
	title_ascii: "Test chart ascii title",
	artist: "Test chart artist",
	genre: "Test chart genre",
	methods: [],
};

async function readResource(filename) {
	try {
		// Using the filehandle method
		filehandle = await fs.promises.open(`./resources/${filename}`, "r");
		const data = await filehandle.readFile("utf-8");

		filehandle.close();

		return data;
	} catch (e) {
		console.log("Error", e);

		return {};
	}
}

app.get("/api", async function (req, res) {
	res.send("please work");
});

app.post("/api/postman", async function (req, res) {
	res.send(JSON.stringify(req.body) + " was returned.");
});

app.get("/api/song/:song_id/:diff", async function (req, res) {
	try {
		const songObjects = JSON.parse(await readResource("song_objects.json"));
		const chartObjects = JSON.parse(
			await readResource("chart_objects.json")
		);
		const methodObjects = JSON.parse(
			await readResource("method_objects.json")
		);

		const songData =
			req.params.song_id in songObjects
				? songObjects[req.params.song_id]
				: {};

		// Get methods from method object
		const methods = [];
		const wantedChartID = `${req.params.song_id}_${req.params.diff}`;
		const methodsList = chartObjects[wantedChartID]["methods"] || [];

		methodsList.forEach((methodKey) => {
			if (methodKey in methodObjects)
				methods.push(methodObjects[methodKey]);
		});

		const returnObj = {
			...songData,
			methods: methods,
		};

		res.send(returnObj);
	} catch (e) {
		console.log(e.message);
		res.send({ ...testChart, errorStatus: true });
	}
});

// For offline use
const fs = require("fs");

app.get("/api/get_resource/:filename", async (req, res) => {
	const data = await readResource(req.params.filename);
	res.json(data);
});

module.exports.handler = serverless(app);
