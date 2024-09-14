const moduleA = require('./moduleA');

module.exports = {
  name: 'Module B',
  getModuleAName: () => moduleA.name,
};