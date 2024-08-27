const { error } = require("node:console");
const fs = require("node:fs");

(async () => {
	try {
		await fs.promises.copyFile("app.js", "app-promise.js");
	} catch (error) {
		console.error(error);
	}
})();

try {
	fs.copyFileSync("app.js", "app-sync.js");
} catch (error) {
	console.error(error);
}

fs.copyFile("app.js", "app-callback.js", (error) => {
	if (error) {
		console.error(error);
	}
});

(async () => {
	try {
		await fs.promises.copyFile("app.js", "app-promise.js");
	} catch (error) {
		console.error(error);
	}
})();
