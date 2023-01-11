let AWS = require("aws-sdk");
require("dotenv").config();

AWS.config.update({
	region: "eu-west-2",
	endpoint: "http://localhost:8000",
});

// AWS_ACCESS_KEY_ID = "fakeMyKeyId";
// AWS_SECRET_ACCESS_KEY = "fakeSecretAccessKey";

let dynamodb = new AWS.DynamoDB();

let params = {
	TableName: "Songs",
	KeySchema: [
		{ AttributeName: "id", KeyType: "HASH" }, //Partition key
	],
	AttributeDefinitions: [{ AttributeName: "id", AttributeType: "N" }],
	ProvisionedThroughput: {
		ReadCapacityUnits: 5,
		WriteCapacityUnits: 5,
	},
};

dynamodb.createTable(params, function (err, data) {
	if (err) {
		console.error(
			"Unable to create table. Error JSON:",
			JSON.stringify(err, null, 2)
		);
	} else {
		console.log(
			"Created table. Table description JSON:",
			JSON.stringify(data, null, 2)
		);
	}
});
