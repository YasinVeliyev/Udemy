const fs = require("node:fs");
const buffer = require("node:buffer");

(async () => {
	const destFile = await fs.promises.open("text-copy.txt", "w");
	const file = await fs.promises.open("fayl.txt");

	while (true) {
		let readResult = await file.read();
		bytesRead = readResult.bytesRead;
		if (!bytesRead) {
			break;
		}
		destFile.write(readResult.buffer.subarray(0, bytesRead));
	}

	destFile.close();
	file.close();
})();
