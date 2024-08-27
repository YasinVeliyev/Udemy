const { Buffer } = require("node:buffer");

const memoryContainer = Buffer.alloc(4);
let a = -34;
console.log(memoryContainer);
console.log(memoryContainer[0]);
memoryContainer[0] = 0xf4;
memoryContainer[1] = 0xf2;
memoryContainer[2] = 0x00;
memoryContainer[3] = 0xfaa;

console.log(memoryContainer[0]);
console.log(memoryContainer[1]);
console.log(memoryContainer[2]);
console.log(memoryContainer[3]);

console.log(memoryContainer);
