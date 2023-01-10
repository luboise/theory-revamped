let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let cors = require("cors");

let indexRouter = require("./routes/index");
let usersRouter = require("./routes/users");
let songpageRouter = require("./routes/songpage");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/songpage", songpageRouter);

let test1Router = require("./routes/test1");
app.use("/test1", test1Router);

require("dotenv").config();

const AWS = require("aws-sdk");
const dynamoClient = new AWS.DynamoDB.DocumentClient();
const tableName = "MailSources";
AWS.config.update({
	region: "us-west-2",
	endpoint: process.env.DYNAMO_ENDPOINT,
});

/* GET users listing. */
app.get("/testdb", (req, res) => {
	let params = {
		TableName: tableName,
	};

	dynamoClient.scan(params, (err, data) => {
		if (err) {
			console.log(err);
		} else {
			var items = [];
			for (var i in data.Items) items.push(data.Items[i]["Name"]);

			res.contentType = "application/json";
			res.send(items);
		}
	});
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
