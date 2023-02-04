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

app.get("/api/song/:song_id", async function (req, res) {
	const song_objects = await readResource("song_objects.json");
	const chart_objects = await readResource("chart_objects.json");
	const method_objects = await readResource("method_objects.json");

	const testSong = {
		song_id: 28064,
		version: 28,
		title: "Ah Hah Yeah",
		title_ascii: "Ah Hah Yeah",
		artist: "Masayoshi Iimori",
		genre: "UPTEMPO RAW",
		bpm_list: {
			0: 115,
			40000: 230,
			60000: 115,
			100000: 230,
		},
	};

	res.send(testSong);
});

// For offline use
const fs = require("fs");

app.get("/api/get_resource/:filename", async (req, res) => {
	const data = await readResource(req.params.filename);
	res.json(data);
});

module.exports.handler = serverless(app);
