const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Hello, ${name}`);
});

emitter.on("error", (error) => {
  console.error(`Error: ${error.message}`);
});

emitter.emit("greet", "Alice");
emitter.emit("error", new Error("Something went wrong"));
