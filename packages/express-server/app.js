const createError = require("http-errors");
const serverless = require("serverless-http");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));

require("dotenv").config();

// /* GET users listing. */
// app.get("/testdb", (req, res) => {
// 	let params = {
// 		TableName: tableName,
// 	};

// 	dynamoClient.scan(params, (err, data) => {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			var items = [];
// 			for (var i in data.Items) items.push(data.Items[i]["Name"]);

// 			res.contentType = "application/json";
// 			res.send(items);
// 		}
// 	});
// });

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

app.get("/api", (req, res) => {
	res.send("please work");
});

module.exports.handler = serverless(app);
