const { log } = require("node:console");
const path = require("node:path");

const pathName = "/home/user/docs/file.txt";
log("---------------------------");
log(path.basename(pathName));
log(path.basename(pathName, ".txt"));
log("---------------------------");
log(path.dirname(pathName));
log("---------------------------");
log(path.extname(pathName));
log("---------------------------");
const pathObject = {
  dir: "/home/user/docs",
  base: "file.txt",
};

log(path.format(pathObject));

log("---------------------------");
log(path.parse(pathName));

log("---------------------------");
log(path.isAbsolute(pathName));
log("---------------------------");
log(path.join("/home/user", "docs", "file.txt"));
log("---------------------------");
log(path.resolve("docs", "file.txt"));
log("---------------------------");
const messyPath = "/home/user/../user/docs//file.txt";
log(path.normalize(messyPath));

log("---------------------------");
console.log(path.sep);

log("---------------------------");

// app.js

// const moduleA = require("./moduleA");
// const moduleB = require("./moduleB");

// console.log(moduleA.getModuleBName()); // Output: Module B
// console.log(moduleB.getModuleAName()); // Output: undefined
