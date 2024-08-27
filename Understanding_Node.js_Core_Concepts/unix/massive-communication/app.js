const { spawn } = require("node:child_process");
const fs = require("node:fs");

const numberFormatter = spawn("number_formatter", ["./dest.txt", "$", ","]);
numberFormatter.stdout.on("data", (data) => {
	console.log(`Stdout : ${data.toString()}`);
});

numberFormatter.stderr.on("data", (data) => {
	console.log(`Stderr : ${data.toString()}`);
});

numberFormatter.on("close", (code) => {
	if (code === 0) {
		console.log("The file was read , processed and writen successfully");
	} else {
		console.log("Something bad happened");
	}
});

const fileSource = fs.createReadStream("./src.txt");
fileSource.pipe(numberFormatter.stdin);
