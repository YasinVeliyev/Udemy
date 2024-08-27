const { Buffer, constants } = require("node:buffer");

const b = Buffer.alloc(1.5e9);
// setInterval(() => {
// 	for (let i = 0; i <= b.length; i++) {
// 		b[i] = 0x22;
// 	}
// }, 5000);
console.log(constants);
