const net = require("node:net");

const socket = net.createConnection({ host: "127.0.0.1", port: 3100 }, () => {
	socket.write("Hello From ");
});

socket.on("data", (data) => {
	console.log(data.toString());
});
