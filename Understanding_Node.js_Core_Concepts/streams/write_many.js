const fs = require("node:fs");

// (async () => {
// 	console.time("start");
// 	let file = await fs.promises.open("fayl.txt", "w");
// 	const stream = file.createWriteStream();
// 	try {
// 		for (let i = 0; i <= 1e6; i++) {
// 			stream.write(`${i} `);
// 			// await file.writeFile(`${i} `);
// 		}
// 		console.timeEnd("start");
// 	} catch (error) {
// 	} finally {
// 		file.close();
// 	}
// })();

// console.time("start");
// fs.open("fayl.txt", "w", (err, fd) => {
// 	if (err) {
// 		fs.close(fd);
// 	} else {
// 		for (let i = 0; i <= 1e6; i++) {
// 			fs.writeSync(fd, `${i} `);
// 		}
// 		fs.close(fd);
// 	}
// });
// console.timeEnd("start");

(async () => {
	// console.time("start");
	let file = await fs.promises.open("fayl.txt", "w");
	const stream = file.createWriteStream();
	// const buff = Buffer.alloc(16384, "s");
	// stream.write(buff);
	// stream.on("drain", () => {
	// 	console.log("We are now safe to write more!");
	// });
	let i = 0;
	let writeMany = () => {
		while (i <= 1e6) {
			if (!stream.write(`${i} `)) {
				break;
			}
			i++;
		}
	};

	stream.on("drain", () => {
		writeMany();
	});
	writeMany();
})();
