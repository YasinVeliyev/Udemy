const { Readable } = require("node:stream");
const fs = require("node:fs");

class FileReadStream extends Readable {
	constructor({ highWaterMark, fileName }) {
		super({ highWaterMark });
		this.fileName = fileName;
	}

	_construct(cb) {
		fs.open(this.fileName, "r", (err, fd) => {
			if (err) {
				return cb(err);
			}

			this.fd = fd;
			cb();
		});
	}

	_read(size) {
		const buff = Buffer.alloc(size);
		fs.read(this.fd, buff, 0, size, null, (err, bytesRead) => {
			if (err) {
				return this.destroy(err);
			}
			this.push(bytesRead > 0 ? buff.subarray(0, bytesRead) : null);
		});
	}

	_destroy(err, cb) {
		if (this.fd) {
			fs.close(this.fd, (error) => cb(err || error));
		} else {
			cb(err);
		}
	}
}

const stream = new FileReadStream({ fileName: "customReadable.js" });
stream.on("data", (chunk) => {
	console.log(chunk.toString());
});

stream.on("end", () => {
	console.info("Stream ended");
});

stream.on("error", (err) => {
	console.error(err);
});
