const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer();

async function readFile(path, type, res) {
	res.setHeader("Content-Type", type);
	const fileReader = await fs.promises.open(path);
	const stream = fileReader.createReadStream();
	stream.pipe(res);
}

server.on("request", async (req, res) => {
	if (req.url === "/" && req.method === "GET") {
		await readFile("./public/index.html", "text/html", res);
	}
	if (req.url === "/style.css") {
		await readFile("./public/style.css", "text/css", res);
	}
	if (req.url === "/favicon.ico") {
		await readFile("./public/favicon.ico", "image/x-icon", res);
	}
	if (req.url === "/script.js") {
		await readFile("./public/script.js", "text/javascript", res);
	}
	if (req.url == "/login") {
		await readFile("./public/user.json", "application/json", res);
	}

	if (req.url == "/upload" && req.method == "POST") {
		const fileReader = await fs.promises.open("upload.pdf", "a");
		const stream = fileReader.createWriteStream();
		req.pipe(stream);

		res.end("Uploaded");

		// await readFile("./public/user.json", "application/json", res);
	}
});

server.listen(8000, () => {
	console.log(`Web server is live at "${JSON.stringify(server.address())}"`);
});
