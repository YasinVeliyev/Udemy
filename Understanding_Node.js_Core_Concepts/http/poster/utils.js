const fs = require("node:fs");
const crypto = require("node:crypto");

function setSession(userId, res) {
	let sessions = JSON.parse(fs.readFileSync("./data/sessions.json"));
	if (!sessions.find((session) => session.userId === userId)) {
		let token = crypto.randomBytes(48).toString("hex");
		res.setHeader("Set-Cookie", `token=${token};Path=/;`);
		sessions.push({ userId, token });
	}

	fs.writeFileSync("./data/sessions.json", JSON.stringify(sessions));
}

function destroySession(token) {
	let sessions = JSON.parse(fs.readFileSync("./data/sessions.json"));
	sessions = sessions.filter((session) => session.token !== token);
	fs.writeFileSync("./data/sessions.json", JSON.stringify(sessions));
}

function getSession(token) {
	let sessions = JSON.parse(fs.readFileSync("./data/sessions.json"));
	return sessions.find((session) => session.token === token);
}

function parse_json(req, res, next) {
	let body = "";
	req.on("data", (chunk) => {
		body += chunk.toString();
	});

	req.on("end", () => {
		body = JSON.parse(body);
		req.body = body;
		next(req, res);
	});
}

module.exports = { getSession, destroySession, setSession, parse_json };
