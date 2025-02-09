const { Worker, MessageChannel } = require("node:worker_threads");

new Worker("./calc.js", { workerData: { name: "Yasin" } });
const channel = new MessageChannel();


