const fs = require("node:fs");
const crypto = require("node:crypto");
const { getSession, setSession, destroySession } = require("./utils");

let posts = fs.readFileSync("./data/posts.json");
posts = JSON.parse(posts.toString());

let users = fs.readFileSync("./data/users.json");
users = JSON.parse(users.toString());

exports.getUser = (req, res) => {
	console.log(req.body);
	let token = req.headers.cookie;

	if (token) {
		token = token.split("=")[1];
		session = getSession(token);
		if (session) {
			let user = users.find((user) => user.id === session.userId);
			res.setHeader("Content-Type", "application/json");
			user.name = `${user.first_name} ${user.last_name}`;
			res.end(JSON.stringify(user));
		} else {
			res.statusCode = 401;
			res.end(JSON.stringify({ error: "Unauthorized" }));
		}
	} else {
		res.end("");
	}
};

exports.login = (req, res) => {
	let { username, password } = req.body;
	const user = users.find(
		(user) => user.username.toLowerCase() == username.toLowerCase() && user.password === password,
	);
	if (user) {
		setSession(user.id, res);
		res.statusCode = 200;
		res.end(JSON.stringify({ message: "Logged in successfully" }));
	} else {
		res.statusCode = 401;
		res.end(JSON.stringify({ message: "Invalid username or password" }));
	}
};

exports.getPosts = (req, res) => {
	posts.map((post) => {
		user = users.find((user) => user.id === post.userId);
		post.author = `${user.first_name} ${user.last_name}`;
	});
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(posts));
};
