const fs = require("node:fs");

(async () => {
	const watcher = fs.promises.watch("./command.txt");
	const file = await fs.promises.open("./command.txt", "r");

	file.on("change", async () => {
		const buffer = Buffer.alloc((await file.stat()).size);
		await file.read(buffer, { length: buffer.byteLength, position: 0 });
		const [command, path, ...text] = buffer.toString().split(" ");

		switch (command.trim().toLocaleLowerCase()) {
			case "create":
				let createdFile;
				try {
					createdFile = await fs.promises.open(path, "r");
					console.error(`'${path}' already exists`);
				} catch (error) {
					createdFile = await fs.promises.open(path, "w");
					console.log(`${path} was successfully created.`);
				} finally {
					createdFile.close();
				}
				break;
			case "delete":
				try {
					await fs.promises.unlink(path);
				} catch (error) {
					console.error(`'${path}' is not exists`);
				} finally {
					break;
				}
			case "rename":
				try {
					await fs.promises.rename(path, text[0]);
				} catch (error) {
					console.error(`'${path}' is not exists`);
				} finally {
					console.info(`Success ${path} -> ${text[0]}`);
					break;
				}

			case "update":
				try {
					let currentFile = await fs.promises.open(path, "r+");
					currentFile.read();
					currentFile.appendFile(text.join(" ") + "\n");
					currentFile.close();
				} catch (error) {
					console.error(error);
					console.error(`'${path}' is not exists`);
				} finally {
					break;
				}
			default:
				console.error("Command does not exists");
				console.info(`Commands create,delete,rename,update`);
		}
	});

	for await (const event of watcher) {
		if (event.eventType == "change") {
			console.log("The file has changed");
			file.emit("change");
		}
	}
})();
