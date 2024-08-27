const http = require("node:http");
const fs = require("node:fs");
const { parse_json } = require("./utils");

const { getUser, login, getPosts } = require("./controllers");
const { destroySession } = require("./utils");
const server = http.createServer();

async function readFile(path, type, res) {
	res.setHeader("Content-Type", type);
	const fileReader = await fs.promises.open(path);
	const stream = fileReader.createReadStream();
	stream.pipe(res);
}

server.on("request", async (req, res) => {
	if (req.method === "GET") {
		if (req.url == "/" || req.url == "/login" || req.url == "/profile" || req.url == "/new-post") {
			await readFile("./public/index.html", "text/html", res);
		} else if (req.url === "/styles.css") {
			await readFile("./public/styles.css", "text/css", res);
		} else if (req.url === "/scripts.js") {
			await readFile("./public/scripts.js", "text/javascript", res);
		} else if (req.url == "/api/posts") {
			getPosts(req, res);
		} else if (req.url === "/api/user") {
			console.log(req.url, req.method);
			getUser(req, res);
		}
	} else if (req.method === "POST") {
		if ((req.url = "/api/login")) {
			parse_json(req, res, login);
		}
	} else if (req.method === "DELETE") {
		if (req.url === "/api/logout") {
			let token = req.headers.cookie;

			if (token) {
				token = token.split("=")[1];
				destroySession(token);
				res.setHeader("Set-Cookie", `token='';Path=/;`);
				res.writeHead(302, { Location: "/" });
				res.end(JSON.stringify({}));
			}
		}
	}
});

server.listen(5051, () => {
	console.log("Server runnig on", server.address());
});
