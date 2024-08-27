const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

class Flask {
	constructor() {
		this.server = http.createServer();
		this.routes = new Map();

		this.server.on("request", (req, res) => {
			this.req = req;
			this.res = res;
			this.res.sendFile = this.sendFile;
			this.res.json = this.json;
			this.res.status = this.status;
			try {
				this.routes.get(this.req.url).get(req.method)(req, res);
			} catch (error) {
				console.error(error);
				this.status(404).json({ message: "Not Found" });
			}
		});
	}

	listen(port, cb) {
		this.server.listen(port, cb);
	}

	async sendFile(path, type) {
		this.setHeader("Content-Type", type);
		const fileReader = await fs.promises.open(path);
		const stream = fileReader.createReadStream();
		stream.pipe(this);
		return this;
	}
	route(method, path, cb) {
		let _m = new Map();
		_m.set(method, cb);
		this.routes.set(path, _m);
	}

	status(code) {
		this.res.statusCode = code;
		return this;
	}

	json(data) {
		this.res.setHeader("Content-Type", "application/json");
		this.res.end(JSON.stringify(data));
		return this;
	}

	listen(port, cb) {
		this.server.listen(port, cb);
	}

	parse_json() {
		let body = "";
		this.req.on("data", (chunk) => {
			body += chunk.toString();
			this.req.body = body;
		});
		
	}
}

module.exports = Flask;
