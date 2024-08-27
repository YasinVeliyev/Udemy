const fs = require("node:fs");
const { stdout } = require("node:process");

const filePath = process.argv[2];
if (filePath) {
	const fileStream = fs.createReadStream(filePath);
	fileStream.pipe(process.stdout);
	fileStream.on("end", () => {
		process.exit(0);
	});
}

process.stdin.pipe(process.stdout);
