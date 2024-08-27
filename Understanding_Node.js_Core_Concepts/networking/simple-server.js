const net = require("node:net");

const server = net.createServer((socket) => {
	socket.on("data", (data) => {
		console.log(data.toString());
	});
});

server.on("connection", (stream) => {
	console.log(stream.write("Hello"));
});
server.listen(3100, "127.0.0.1", () => {
	console.log("Server running", server.address());
});
