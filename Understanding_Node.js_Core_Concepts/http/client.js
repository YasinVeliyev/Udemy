const http = require("node:http");

const agent = new http.Agent({ keepAlive: true });

const request = http.request({
	agent,
	host: "localhost",
	port: 5050,
	method: "POST",
	path: "/vacancies",
	headers: { "Content-Type": "application/json" },
});

request.on("response", (res) => {
	res.on("data", (chunk) => {
		console.log(chunk.toString());
	});
	res.on("end", function () {
		console.log("End");
	});
});

request.end(
	JSON.stringify({
		title: "Title of my post",
		body: "This is some text and more and more.",
	}),
);
request.on("error", (error) => {
	console.error(error);
});
