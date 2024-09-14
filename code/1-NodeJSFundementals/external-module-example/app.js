// app.js
const moduleA = require("./moduleA");
const moduleB = require("./moduleB");

console.log(moduleA.getModuleBName()); // Output: Module B
console.log(moduleB.getModuleAName()); // Output: undefined
