const net = require("node:net");
const fs = require("node:fs");

const server = net.createServer(() => {});

server.on("connection", (socket) => {
	console.log("New Connections");

	socket.on("data", async (data) => {
		console.log(socket.localAddress);
		const fileHandle = await fs.promises.open(`./storage/${socket.localAddress}.txt`, "w");
		const fileStream = fileHandle.createWriteStream();
		fileStream.write(data);
		socket.on("end", async () => {
			await fileHandle.close();
		});
	});
});

server.listen(5052, "::1", () => {
	console.log("Uploader server runnig on ", server.address());
});
