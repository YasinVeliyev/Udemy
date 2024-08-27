const { spawn } = require("node:child_process");
const fs = require("node:fs");

const numberFormatter = spawn("./r_number_formatter", ["./dest.txt", "$", ","]);

numberFormatter.stdout.on("data", (data) => {
	console.log(`stdout: ${data}`);
});

numberFormatter.stderr.on("data", (data) => {
	console.log(`stderr: ${data}`);
});

numberFormatter.on("close", (code) => {
	if (code === 0) {
		console.log("The file was read, processed and written successfully!");
	} else {
		console.log("Something bad happened!");
		console.log(code);
	}
});

// /Users/joseph/Desktop/text-gigantic.txt
const fileStream = fs.createReadStream("./src.txt");
fileStream.pipe(numberFormatter.stdin);
