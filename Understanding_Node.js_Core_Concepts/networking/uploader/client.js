const net = require("node:net");
const fs = require("node:fs");

const socket = net.createConnection({ host: "::1", port: 5052 }, () => {
	fs.readFile("./server.js", (err, data) => {
		if (err) {
			console.error(err);
		} else {
			socket.write(data);
		}
	});
	socket.end();
});
