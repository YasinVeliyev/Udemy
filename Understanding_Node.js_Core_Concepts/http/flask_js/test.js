const Flask = require("./server");

const app = new Flask();

app.route("GET", "/", (req, res) => {
	res.sendFile("../poster/public/index.html", "text/html");
});
app.route("GET", "/styles.css", (req, res) => {
	res.sendFile("../poster/public/styles.css", "text/css");
});
app.route("GET", "/scripts.js", (req, res) => {
	res.sendFile("../poster/public/scripts.js", "text/javascript");
});
app.listen(5556, () => {
	console.log("Sever running");
});
