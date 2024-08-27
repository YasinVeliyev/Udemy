const net = require("node:net");
const readline = require("node:readline");
const tty = require("node:tty");

const rl = readline.promises.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function clearLine(dir) {
	return new Promise((resolve, reject) => {
		process.stdout.clearLine(dir, async () => {
			resolve();
		});
	});
}

function moveCursor(dx, dy) {
	return new Promise((resolve, reject) => {
		process.stdout.moveCursor(dx, dy);
		resolve();
	});
}

async function ask() {
	const message = await rl.question("Enter a message:> ");
	await moveCursor(0, -1);
	await clearLine(0);
	client.write(message);
	
}

const client = net.createConnection({ host: "localhost", port: 3008 }, async () => {
	console.log("Connected to the server", client.address());

	await ask();
});

client.on("data", async (data) => {
	await moveCursor(0, -1);
	await clearLine(0);
	console.log(JSON.parse(data));
	await ask();
});

client.on("close", () => {
	console.log("Closed");
});

client.on("end", () => {
	console.log("Connection was ended!");
});
