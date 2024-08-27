const { Buffer } = require("node:buffer");

const buff = Buffer.alloc(1e5, 0);
console.log(Buffer.allocUnsafe(10));
console.log(Buffer.poolSize >>> 1);

function permAlone(str) {
	let s = new Set(str);
	let counter = new Map();
	for (let i of s) {
		if (!counter.has(i)) {
			counter.set(i, 0);
		}
		for (let k of str) {
			if (k == i) {
				counter.set(i, counter.get(i) + 1);
			}
		}
	}
	console.log(counter.values());
}

function factorial(n) {
	let result = 1;
	for (let i = 2; i <= n; i++) {
		result *= i;
	}
}

permAlone("aab");
