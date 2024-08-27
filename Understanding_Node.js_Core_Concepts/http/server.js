const http = require("node:http");

const server = http.createServer();
server.on("request", (req, res) => {
	const { method, url } = req;
	console.log(method, url);
	res.write("Hello World");
	res.end("Page End");

	req.on("data", (chunk) => {
		console.log(JSON.parse(chunk.toString()));
	});
	req.on("end", (chunk) => {
		console.log("End");
	});
});

server.listen(5050, "localhost", () => {
	console.log("Server runnig ", server.address());
});
