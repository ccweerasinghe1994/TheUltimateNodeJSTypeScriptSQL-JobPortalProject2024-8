const moduleB = require("./moduleB");

module.exports = {
  name: "Module A",
  getModuleBName: () => moduleB.name,
};
