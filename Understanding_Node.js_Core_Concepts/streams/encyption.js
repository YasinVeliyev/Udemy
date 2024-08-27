const { Transform } = require("node:stream");

class Enrypt extends Transform {
	_transform(chunk, encoding, cb) {
		this.push(chunk);
        cb(chunk)
	}
}
