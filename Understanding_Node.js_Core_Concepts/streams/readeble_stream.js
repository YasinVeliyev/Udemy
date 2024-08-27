const fs = require("node:fs");
const pipe = require("node:stream");

(async () => {
	let file = await fs.promises.open("fayl.txt");
	const target_file = await fs.promises.open("dest.txt", "w");

	let stream = file.createReadStream({ highWaterMark: 10240 });

	let target_stream = target_file.createWriteStream({ highWaterMark: 512 });
	let split = "";
	stream.on("data", (chunk) => {
		let numbers = chunk
			.toString()
			.trim()
			.split(" ")
			.filter((c) => {
				if (c) {
					return c;
				}
			});

		if (parseInt(numbers[numbers.length - 2]) + 1 !== parseInt(numbers[numbers.length - 1])) {
			split = numbers.pop();
		}
		if (parseInt(numbers[0]) + 1 !== parseInt(numbers[1])) {
			numbers[0] += split;
		}
		let a = numbers.filter((num) => {
			if (num % 10 == 0) {
				return num;
			}
		});
		console.log(a.slice(a.length - 10));
		setTimeout(() => process.exit(), 5);
		numbers.forEach((num) => {
			num = Number(num);
			if (num % 10 === 0) {
				if (!target_stream.write(`${num} `)) {
					stream.pause();
				}
			}
		});
	});
	target_stream.on("drain", () => {
		stream.resume();
	});

	stream.on("end", () => {
		console.log("End");
	});
})();

// let file = fs.openSync("fayl.txt");
// console.log(fs.readFileSync(file).toString());
