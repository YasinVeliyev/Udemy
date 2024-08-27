const { Transform, Writable } = require("node:stream");
const fs = require("node:fs");

class FileWriteStrem extends Writable {
	constructor({ highWaterMark, fileName }) {
		super({ highWaterMark });
		this.fileName = fileName;
	}
	_construct(cb) {
		fs.open(this.fileName, "w", (err, fd) => {
			if (err) {
				cb(err);
			} else {
				this.fd = fd;

				cb();
			}
		});
	}
	_write(chunk, encoding, cb) {
		fs.write(this.fd, chunk, (err) => {
			if (err) {
				cb(err);
			} else {
				cb();
			}
		});
		cb();
	}
	_final(cb) {
		super._final();
	}
	_destroy(error, cb) {
		if (this.fd) {
			fs.close(this.fd, (err) => {
				cb(err | error);
			});
		} else {
			cb();
		}
	}
    _writev(){}
}

const stream = new FileWriteStrem({ highWaterMark: 2024, fileName: "wr.txt" });
stream.write("Hello");
stream.end("Hello");
