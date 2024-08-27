const net = require("node:net");
const fs = require("node:fs");
const crypto = require("node:crypto");

const server = net.createServer();
const clients = [];

server.listen(3008, "127.0.0.1", () => {
	console.log(`Server started on ${JSON.stringify(server.address())}`);
});

server.on("connection", (socket) => {
	console.log("New connection to the server");
	let id = crypto.randomUUID().replace(/-/g, "");
	clients.push({ id, socket });
	socket.write(JSON.stringify({ id }));
	socket.on("data", (data) => {
		clients.forEach(({ id, socket }) => {
			socket.write(JSON.stringify({ id, data: data.toString() }));
		});
	});
});
