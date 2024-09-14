#  NodeJS Fundementals
# 1 - Global variables
# **Understanding `globalThis` in Node.js: Deep Dive with Examples**

---

## **Introduction**

When you run `console.log(globalThis);` in Node.js, it outputs an object representing the global scope in the Node.js environment. This object contains global properties and functions that are available throughout your Node.js application without needing to require or import them.

The output you provided:

```plaintext
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
```

This output may seem complex, but we'll break it down and explain each component, providing examples to help you understand what each part does.

---

## **What is `globalThis`?**

### **Definition**

- **`globalThis`** is a standard built-in object that provides a universal way to access the global scope in any JavaScript environment, whether it's a browser, Node.js, or another runtime.
- Introduced in **ECMAScript 2020**, it offers a standardized way to refer to the global object, which can vary across different environments (e.g., `window` in browsers, `global` in Node.js).

### **Why Use `globalThis`?**

- **Portability**: Write code that is portable across different JavaScript environments without worrying about the specific global object name.
- **Clarity**: Avoid confusion when working in different environments or when the code may run both in the browser and Node.js.

### **Example Usage**

```javascript
// Accessing a global variable
globalThis.myGlobalVariable = 'Hello, World!';
console.log(globalThis.myGlobalVariable); // Output: Hello, World!

// Checking if running in a browser or Node.js
if (typeof window !== 'undefined') {
  console.log('Running in a browser');
} else if (typeof global !== 'undefined') {
  console.log('Running in Node.js');
}
```

---

## **Breaking Down the Output**

Let's dissect the output step by step, explaining each property and function.

### **1. `<ref *1> Object [global] { ... }`**

- **`<ref *1>`**: Indicates that this object is a reference and may contain circular references (objects that reference themselves).
- **`Object [global]`**: This is the global object in Node.js. In Node.js, the global object is called `global`, similar to how it's `window` in browsers.

### **2. `global: [Circular *1]`**

- **`global`**: A property that references the global object itself.
- **`[Circular *1]`**: Indicates a circular reference back to the same object (`global`). This means `global.global` refers back to `global`.

**Example:**

```javascript
console.log(global.global === global); // Output: true
```

### **3. Timer Functions**

These functions are used to schedule code execution.

#### **`setTimeout` and `clearTimeout`**

- **`setTimeout(callback, delay, [args])`**: Schedules `callback` to run after at least `delay` milliseconds.
- **`clearTimeout(timeoutId)`**: Cancels a timeout scheduled with `setTimeout`.

**Example:**

```javascript
const timeoutId = setTimeout(() => {
  console.log('This runs after 2 seconds');
}, 2000);

clearTimeout(timeoutId); // Cancels the timeout
```

#### **`setInterval` and `clearInterval`**

- **`setInterval(callback, delay, [args])`**: Repeatedly calls `callback` every `delay` milliseconds.
- **`clearInterval(intervalId)`**: Stops an interval scheduled with `setInterval`.

**Example:**

```javascript
let count = 0;
const intervalId = setInterval(() => {
  count += 1;
  console.log(`Interval count: ${count}`);
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);
```

#### **`setImmediate` and `clearImmediate`**

- **`setImmediate(callback, [args])`**: Executes `callback` immediately after I/O events' callbacks.
- **`clearImmediate(immediateId)`**: Cancels an immediate action scheduled with `setImmediate`.

**Example:**

```javascript
const immediateId = setImmediate(() => {
  console.log('This runs immediately after I/O events');
});

clearImmediate(immediateId); // Cancels the immediate execution
```

#### **`[Symbol(nodejs.util.promisify.custom)]: [Getter]`**

- Indicates that the function has a custom implementation for `util.promisify`.
- **`util.promisify`**: A Node.js utility that converts callback-based functions to return Promises.

**Example:**

```javascript
const util = require('util');
const setTimeoutPromise = util.promisify(setTimeout);

setTimeoutPromise(1000).then(() => {
  console.log('Runs after 1 second using Promises');
});
```

### **4. `queueMicrotask`**

- **`queueMicrotask(callback)`**: Schedules a microtask to run after the current task but before the next event loop tick.
- Useful for deferring execution of a function until after the current operation completes.

**Example:**

```javascript
queueMicrotask(() => {
  console.log('Microtask executed');
});

console.log('This logs before the microtask');
```

**Output:**

```plaintext
This logs before the microtask
Microtask executed
```

### **5. `structuredClone`**

- **`structuredClone(value)`**: Deeply clones a value, allowing you to copy complex data structures like objects and arrays.
- Supports cloning built-in types like Date, RegExp, Map, Set, and even ArrayBuffers.

**Example:**

```javascript
const original = { a: 1, b: { c: 2 } };
const clone = structuredClone(original);

console.log(original === clone); // Output: false
console.log(original.b === clone.b); // Output: false
```

### **6. `atob` and `btoa`**

- **`atob(encodedString)`**: Decodes a string of data which has been encoded using Base64 encoding.
- **`btoa(string)`**: Creates a Base64-encoded ASCII string from a binary string.

**Note**: In Node.js versions before 15, `atob` and `btoa` were not available globally. They are now part of the global scope.

**Example:**

```javascript
const encoded = btoa('Hello, World!');
console.log(encoded); // Output: "SGVsbG8sIFdvcmxkIQ=="

const decoded = atob(encoded);
console.log(decoded); // Output: "Hello, World!"
```

### **7. `performance`**

- **`performance`**: Provides access to performance-related methods and properties.
- Similar to the Performance API in browsers.

**Example:**

```javascript
const start = performance.now();

// Some operation
for (let i = 0; i < 1e6; i++) {}

const end = performance.now();
console.log(`Operation took ${end - start} milliseconds`);
```

### **8. `fetch`**

- **`fetch(input, init)`**: Provides a way to fetch resources asynchronously across the network.
- In Node.js 18 and above, `fetch` is available globally.

**Example:**

```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
```

### **9. `navigator`**

- **`navigator`**: Provides information about the runtime environment.
- In Node.js, `navigator` is minimal compared to the browser.

**Example:**

```javascript
console.log(navigator.userAgent); // Outputs the user agent string
```

### **10. `crypto`**

- **`crypto`**: Provides cryptographic functionalities.
- Includes methods for hashing, encryption, random number generation, etc.

**Example:**

```javascript
const { randomBytes } = require('crypto');

randomBytes(16, (err, buffer) => {
  if (err) throw err;
  console.log(`Random bytes: ${buffer.toString('hex')}`);
});
```

Or using the global `crypto`:

```javascript
const randomValues = crypto.getRandomValues(new Uint8Array(16));
console.log(`Random values: ${randomValues}`);
```

---

## **Understanding Circular References**

In the output:

```plaintext
global: [Circular *1],
```

- **Circular Reference**: Occurs when an object references itself, directly or indirectly.
- In this case, the `global` object has a property named `global` that references itself.
  
**Implications:**

- When logging such objects, Node.js indicates circular references to prevent infinite loops during stringification.
- This is why you see `<ref *1>` and `[Circular *1]` to denote the self-referencing nature.

**Example:**

```javascript
const obj = {};
obj.self = obj;

console.log(obj);
// Output:
// { self: [Circular] }
```

---

## **Accessing Global Variables and Functions**

### **Global Variables**

Variables declared without `let`, `const`, or `var` in the global scope become properties of the global object.

**Example:**

```javascript
myGlobalVar = 42; // Not recommended

console.log(globalThis.myGlobalVar); // Output: 42
```

**Note**: It's considered bad practice to create global variables this way due to potential naming collisions and difficulties in debugging.

### **Global Functions**

Some functions are available globally and can be accessed without requiring modules.

**Examples:**

- **`console.log()`**: Outputs messages to the console.
- **`setTimeout()`**: Schedules code execution after a delay.
- **`require()`**: Used to include modules (though in Node.js, `require` is not part of `globalThis` by default).

---

## **Differences Between Environments**

### **Node.js vs. Browser**

- **Node.js Global Object**: `global` or `globalThis`.
- **Browser Global Object**: `window`, `self`, `frames`, `globalThis`.

**Example in Browser:**

```javascript
console.log(window === globalThis); // Output: true
```

**Example in Node.js:**

```javascript
console.log(global === globalThis); // Output: true
```

### **Why Use `globalThis`?**

- **Consistency**: Ensures code runs in both environments without modification.
  
**Example:**

```javascript
// Universal code
globalThis.myUniversalVar = 'Accessible everywhere';

console.log(globalThis.myUniversalVar);
```

---

## **Practical Examples**

### **Example 1: Using `setTimeout` and `setInterval`**

```javascript
// Using setTimeout to delay execution
setTimeout(() => {
  console.log('Executed after 1 second');
}, 1000);

// Using setInterval to execute periodically
let counter = 0;
const intervalId = setInterval(() => {
  counter += 1;
  console.log(`Counter: ${counter}`);
  if (counter === 3) {
    clearInterval(intervalId);
  }
}, 2000);
```

**Output:**

```plaintext
Executed after 1 second
Counter: 1
Counter: 2
Counter: 3
```

### **Example 2: Deep Cloning with `structuredClone`**

```javascript
const original = {
  name: 'Alice',
  preferences: {
    theme: 'dark',
  },
  date: new Date(),
};

const cloned = structuredClone(original);

console.log(cloned);
// Output: { name: 'Alice', preferences: { theme: 'dark' }, date: [Date object] }

console.log(original === cloned); // Output: false
console.log(original.preferences === cloned.preferences); // Output: false
```

### **Example 3: Fetching Data with `fetch`**

```javascript
(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error('Fetch error:', err);
  }
})();
```

**Output:**

```json
{
  "userId": 1,
  "id": 1,
  "title": "Sample Title",
  "body": "Sample body text."
}
```

---

## **Understanding Getters and Setters in the Output**

### **`[Getter/Setter]`**

- Indicates that the property is accessed via a getter or setter function.
- Accessing the property triggers a function to compute its value.

**Example with `atob` and `btoa`:**

- In the global object, `atob` and `btoa` may be defined with getters to ensure they are initialized when first accessed.

**Example of Custom Getter/Setter:**

```javascript
const obj = {
  _name: 'Bob',
  get name() {
    console.log('Getter called');
    return this._name;
  },
  set name(value) {
    console.log('Setter called');
    this._name = value;
  },
};

console.log(obj.name); // Output: Getter called\nBob
obj.name = 'Carol';    // Output: Setter called
```

---

## **The `performance` Object**

- Provides high-resolution timestamps and performance-related methods.
  
**Common Methods:**

- **`performance.now()`**: Returns a timestamp with sub-millisecond resolution.
- **`performance.mark()`** and **`performance.measure()`**: Used for custom performance measurements.

**Example:**

```javascript
performance.mark('start');

// Some time-consuming operation
for (let i = 0; i < 1e7; i++) {}

performance.mark('end');
performance.measure('MyOperation', 'start', 'end');

const [measure] = performance.getEntriesByName('MyOperation');
console.log(`Operation took ${measure.duration} milliseconds`);
```

---

## **The `navigator` Object in Node.js**

- In browsers, `navigator` provides information about the user's browser and system.
- In Node.js, it's a minimal implementation, often containing only the `userAgent`.

**Example:**

```javascript
console.log(navigator.userAgent);
// Output: Something like "Node.js v18.0.0"
```

---

## **Global `crypto` Object**

- Provides cryptographic functionality that was previously available via the `require('crypto')` module.
- The global `crypto` conforms to the Web Crypto API.

**Example:**

```javascript
// Generating a random UUID
crypto.randomUUID(); // Returns a random UUID string

// Hashing data
const encoder = new TextEncoder();
const data = encoder.encode('Hello, World!');

crypto.subtle.digest('SHA-256', data).then((hashBuffer) => {
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  console.log(`SHA-256 hash: ${hashHex}`);
});
```

---

## **Conclusion**

The `globalThis` object in Node.js provides access to the global scope, including built-in functions, objects, and properties that are available throughout your application. Understanding the components listed in the output of `console.log(globalThis);` allows you to leverage these global utilities effectively.

By exploring each property and function with examples, we've demystified the contents of the `globalThis` object, enabling you to use these global features confidently in your Node.js applications.

---

## **Further Reading**

- **Node.js Documentation**: [Globals](https://nodejs.org/api/globals.html)
- **MDN Web Docs**:
  - [globalThis](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis)
  - [Timers](https://nodejs.org/api/timers.html)
  - [Web Crypto API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)
- **ECMAScript Specification**: [Structured Clone Algorithm](https://tc39.es/ecma262/#sec-structured-clone-algorithm)

---

**Feel free to ask if you have any more questions or need clarification on any of these topics!**
# 2 - Module require keyword
# **Understanding the `require` Keyword in Node.js: A Deep Dive with Examples**

---

## **Introduction**

In Node.js, modules are a fundamental aspect that allows developers to organize code into reusable components. The `require` keyword is the primary means of importing these modules into your application. This comprehensive guide will explore how `require` works in Node.js, covering built-in modules, user-defined modules, third-party modules, the module system, caching, circular dependencies, and the differences between `module.exports` and `exports`.

---

## **Table of Contents**

1. [What is `require` in Node.js?](#1-what-is-require-in-nodejs)
2. [Using `require` with Built-in Modules](#2-using-require-with-built-in-modules)
3. [Creating and Requiring User-Defined Modules](#3-creating-and-requiring-user-defined-modules)
4. [Requiring Third-Party Modules](#4-requiring-third-party-modules)
5. [Understanding the Module System](#5-understanding-the-module-system)
   - CommonJS Modules
   - Module Resolution
6. [Module Caching](#6-module-caching)
7. [Circular Dependencies](#7-circular-dependencies)
8. [`module.exports` vs. `exports`](#8-moduleexports-vs-exports)
9. [Practical Examples](#9-practical-examples)
   - Example 1: Simple Utility Module
   - Example 2: Exporting Classes and Functions
   - Example 3: Circular Dependency Handling
10. [Conclusion](#10-conclusion)
11. [Further Reading](#11-further-reading)

---

## **1. What is `require` in Node.js?**

The `require` function is a built-in function in Node.js that allows you to include modules in your application. It reads a JavaScript file, executes it, and returns the `module.exports` object.

**Syntax:**

```javascript
const module = require('module_name');
```

- **Parameter**: The module identifier, which can be:
  - A **core module** (e.g., `'fs'`, `'http'`)
  - A **path to a file** (relative or absolute)
  - A **third-party module** installed via npm (e.g., `'express'`)

**Purpose:**

- Organize code into reusable components.
- Import functionalities provided by other modules.
- Manage dependencies within an application.

---

## **2. Using `require` with Built-in Modules**

Node.js comes with several built-in modules that provide essential functionalities without needing external libraries.

**Common Built-in Modules:**

- `fs`: File system operations
- `http`: HTTP server and client
- `path`: Utilities for file paths
- `os`: Operating system-related utility methods

**Example: Using the `fs` Module**

```javascript
const fs = require('fs');

// Reading a file synchronously
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
```

- **Explanation**:
  - `require('fs')` imports the built-in `fs` module.
  - `fs.readFileSync()` reads the content of `example.txt` synchronously.

---

## **3. Creating and Requiring User-Defined Modules**

You can create your own modules by exporting variables, functions, or objects using `module.exports` or `exports`.

### **Creating a Module**

**File: `mathOperations.js`**

```javascript
// Define functions
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// Export functions
module.exports = {
  add,
  multiply,
};
```

### **Requiring the Module**

**File: `app.js`**

```javascript
const math = require('./mathOperations');

const sum = math.add(5, 3);
const product = math.multiply(5, 3);

console.log(`Sum: ${sum}`);        // Output: Sum: 8
console.log(`Product: ${product}`); // Output: Product: 15
```

- **Explanation**:
  - `require('./mathOperations')` imports the `mathOperations.js` module.
  - The `add` and `multiply` functions are accessed via the `math` object.

---

## **4. Requiring Third-Party Modules**

Third-party modules are packages installed via npm (Node Package Manager) and can be included using `require`.

### **Installing a Module**

**Example**: Installing `lodash`, a popular utility library.

```bash
npm install lodash
```

### **Using the Module**

**File: `app.js`**

```javascript
const _ = require('lodash');

const array = [1, 2, 3, 4];
const reversedArray = _.reverse(array.slice()); // Use slice to avoid mutating original array

console.log(reversedArray); // Output: [4, 3, 2, 1]
```

- **Explanation**:
  - `require('lodash')` imports the `lodash` module.
  - `_.reverse()` is a method provided by `lodash`.

---

## **5. Understanding the Module System**

### **CommonJS Modules**

Node.js uses the **CommonJS** module system, where each file is treated as a separate module.

- **`module.exports`**: An object that is returned as the result of a `require` call.
- **`require()`**: Function used to import modules.

**Key Characteristics:**

- Synchronous loading.
- Modules are cached after the first time they are loaded.

### **Module Resolution**

When you use `require()`, Node.js resolves the module identifier using the following algorithm:

1. **File Modules**:

   - If the identifier starts with `'./'`, `'../'`, or `'/'`, it's treated as a file or directory.

2. **Core Modules**:

   - If the identifier matches a core module name, it returns the core module.

3. **Node Modules**:

   - Searches in `node_modules` directories in the current directory and parent directories.

**Example:**

```javascript
// Requiring a local module
const myModule = require('./myModule');

// Requiring a core module
const path = require('path');

// Requiring a third-party module
const express = require('express');
```

---

## **6. Module Caching**

Once a module is loaded, it's cached, so subsequent `require` calls return the cached version.

**Implications:**

- **Singleton Behavior**: Modules are singletons; any changes to the exported object affect all require calls.
- **Performance**: Improves performance by avoiding redundant loading.

**Example:**

```javascript
// counter.js
let count = 0;

function increment() {
  count += 1;
  console.log(`Count: ${count}`);
}

module.exports = { increment };
```

```javascript
// app.js
const counter1 = require('./counter');
const counter2 = require('./counter');

counter1.increment(); // Output: Count: 1
counter2.increment(); // Output: Count: 2
```

- **Explanation**:
  - Both `counter1` and `counter2` point to the same module instance.

---

## **7. Circular Dependencies**

Circular dependencies occur when two modules depend on each other.

**Example:**

```javascript
// moduleA.js
const moduleB = require('./moduleB');

module.exports = {
  name: 'Module A',
  getModuleBName: () => moduleB.name,
};

// moduleB.js
const moduleA = require('./moduleA');

module.exports = {
  name: 'Module B',
  getModuleAName: () => moduleA.name,
};

// app.js
const moduleA = require('./moduleA');
const moduleB = require('./moduleB');

console.log(moduleA.getModuleBName()); // Output: Module B
console.log(moduleB.getModuleAName()); // Output: undefined
```

- **Explanation**:
  - When `moduleA` requires `moduleB`, `moduleB` starts executing.
  - `moduleB` requires `moduleA`, but since `moduleA` is not fully exported yet, `moduleA.name` is `undefined`.

**Handling Circular Dependencies:**

- Avoid if possible by refactoring code.
- Use lazy loading (require inside a function) to defer loading.

---

## **8. `module.exports` vs. `exports`**

Both `module.exports` and `exports` are used to export code from a module, but they are not the same.

- **`module.exports`**: The actual object that will be returned when the module is required.
- **`exports`**: A reference to `module.exports`.

### **Rules:**

- You can add properties to `exports`, and they will be available in `module.exports`.
- If you assign a new value to `exports`, it will **not** change `module.exports`.

**Example:**

```javascript
// Incorrect usage
exports = function () {
  console.log('Hello');
};

// Correct usage
module.exports = function () {
  console.log('Hello');
};
```

- **Explanation**:
  - Assigning directly to `exports` breaks the reference to `module.exports`.
  - Always use `module.exports` when exporting a function or class directly.

---

## **9. Practical Examples**

### **Example 1: Simple Utility Module**

**File: `utils.js`**

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = {
  greet,
};
```

**File: `app.js`**

```javascript
const utils = require('./utils');

console.log(utils.greet('Alice')); // Output: Hello, Alice!
```

### **Example 2: Exporting Classes and Functions**

**File: `logger.js`**

```javascript
class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name}] ${message}`);
  }
}

module.exports = Logger;
```

**File: `app.js`**

```javascript
const Logger = require('./logger');

const appLogger = new Logger('App');
appLogger.log('Application started'); // Output: [App] Application started
```

### **Example 3: Circular Dependency Handling**

**Refactored to Avoid Circular Dependency**

**File: `config.js`**

```javascript
module.exports = {
  appName: 'MyApp',
};
```

**File: `moduleA.js`**

```javascript
const config = require('./config');

module.exports = {
  getAppName: () => config.appName,
};
```

**File: `moduleB.js`**

```javascript
const config = require('./config');

module.exports = {
  getAppName: () => config.appName,
};
```

**File: `app.js`**

```javascript
const moduleA = require('./moduleA');
const moduleB = require('./moduleB');

console.log(moduleA.getAppName()); // Output: MyApp
console.log(moduleB.getAppName()); // Output: MyApp
```

- **Explanation**:
  - Extracted the shared dependency into a separate module (`config.js`).
  - Both `moduleA` and `moduleB` depend on `config.js`, avoiding circular dependencies.

---

## **10. Conclusion**

The `require` function is a cornerstone of Node.js, enabling modular code organization and reuse. By understanding how `require`, `module.exports`, and `exports` work, along with the module resolution and caching mechanisms, you can write more maintainable and efficient Node.js applications. Awareness of potential pitfalls like circular dependencies and the differences between `module.exports` and `exports` will help you avoid common errors.

---

## **11. Further Reading**

- **Node.js Documentation**:
  - [Modules: CommonJS Modules](https://nodejs.org/api/modules.html)
  - [Module Caching Caveats](https://nodejs.org/api/modules.html#module-caching-caveats)
- **Articles and Tutorials**:
  - [Understanding Module Exports and Imports in Node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
  - [Mastering the Module System in Node.js](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/)
- **Books**:
  - *Node.js Design Patterns* by Mario Casciaro and Luciano Mammino
  - *Node.js in Action* by Mike Cantelon et al.

---

**Feel free to ask if you have any questions or need further clarification on any aspect of the `require` keyword and module system in Node.js!**
# 3 - Module export keyword
# **Understanding `module.exports` and `exports` in Node.js: A Deep Dive with Examples**

---

## **Introduction**

In Node.js, modules are a fundamental aspect of the platform, enabling developers to organize code into reusable, encapsulated components. The `module.exports` and `exports` keywords are pivotal in this module system, as they determine what a module exposes to the outside world when it is `require`d in another file.

This comprehensive guide will explore how `module.exports` and `exports` work in Node.js, their differences, best practices, common pitfalls, and practical examples to solidify your understanding.

---

## **Table of Contents**

1. [The Node.js Module System](#1-the-nodejs-module-system)
2. [What is `module.exports`?](#2-what-is-moduleexports)
3. [What is `exports`?](#3-what-is-exports)
4. [Relationship Between `module.exports` and `exports`](#4-relationship-between-moduleexports-and-exports)
5. [Using `module.exports` and `exports`](#5-using-moduleexports-and-exports)
   - Exporting Functions
   - Exporting Objects
   - Exporting Classes
6. [Common Pitfalls and How to Avoid Them](#6-common-pitfalls-and-how-to-avoid-them)
   - Reassigning `exports`
   - Mutating `exports` vs. Reassigning
7. [Practical Examples](#7-practical-examples)
   - Example 1: Exporting a Single Function
   - Example 2: Exporting Multiple Functions and Variables
   - Example 3: Exporting a Class
   - Example 4: Understanding the `exports` Shortcut
8. [Best Practices](#8-best-practices)
9. [Conclusion](#9-conclusion)
10. [Further Reading](#10-further-reading)

---

## **1. The Node.js Module System**

Node.js uses the **CommonJS** module system, where each file is treated as a separate module. This system provides two main objects to interact with modules:

- **`module`**: Represents the current module and has a property called `exports`.
- **`exports`**: A variable that initially references `module.exports`.

**Key Concepts:**

- **Encapsulation**: Modules encapsulate code, preventing variables from polluting the global scope.
- **Reusability**: Modules promote code reuse across different parts of an application.
- **Maintainability**: Breaking code into modules makes it easier to manage and maintain.

---

## **2. What is `module.exports`?**

**`module.exports`** is the object that is actually returned as the result of a `require` call. When you require a module, Node.js wraps the module code in a function and returns `module.exports`.

**Example:**

```javascript
// math.js
module.exports = {
  add: (a, b) => a + b,
  multiply: (a, b) => a * b,
};
```

```javascript
// app.js
const math = require('./math');
console.log(math.add(2, 3)); // Output: 5
```

- **Explanation**:
  - In `math.js`, we assign an object with `add` and `multiply` functions to `module.exports`.
  - When we `require('./math')`, we get the object assigned to `module.exports`.

---

## **3. What is `exports`?**

**`exports`** is a shorthand or reference to `module.exports` provided for convenience. Initially, `exports` and `module.exports` point to the same object.

**Example:**

```javascript
// greetings.js
exports.sayHello = (name) => `Hello, ${name}!`;
```

```javascript
// app.js
const greetings = require('./greetings');
console.log(greetings.sayHello('Alice')); // Output: Hello, Alice!
```

- **Explanation**:
  - We add a `sayHello` function to `exports`, which is initially the same as `module.exports`.
  - When we `require('./greetings')`, we get the object with `sayHello` attached.

---

## **4. Relationship Between `module.exports` and `exports`**

- **Initially**: `exports` is a reference to `module.exports`.

  ```javascript
  console.log(exports === module.exports); // Output: true
  ```

- **Assignment**:

  - If you assign a new value to `exports`, you break the reference to `module.exports`.

    ```javascript
    exports = { newProperty: 'This will not be exported' };
    console.log(exports === module.exports); // Output: false
    ```

- **Important Rule**:

  - **Only the object assigned to `module.exports` is exported**.
  - **Reassigning `exports` does not affect `module.exports`** unless `exports` was not previously assigned to `module.exports`.

---

## **5. Using `module.exports` and `exports`**

### **Exporting Functions**

**Using `module.exports`:**

```javascript
// logger.js
module.exports = function log(message) {
  console.log(`[LOG]: ${message}`);
};
```

```javascript
// app.js
const log = require('./logger');
log('This is a message'); // Output: [LOG]: This is a message
```

**Using `exports`:**

```javascript
// calculator.js
exports.add = (a, b) => a + b;
exports.subtract = (a, b) => a - b;
```

```javascript
// app.js
const calculator = require('./calculator');
console.log(calculator.add(5, 3)); // Output: 8
```

### **Exporting Objects**

**Example:**

```javascript
// config.js
module.exports = {
  host: 'localhost',
  port: 8080,
};
```

```javascript
// app.js
const config = require('./config');
console.log(`Server running at ${config.host}:${config.port}`);
// Output: Server running at localhost:8080
```

### **Exporting Classes**

**Example:**

```javascript
// user.js
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi, I'm ${this.name}`;
  }
}

module.exports = User;
```

```javascript
// app.js
const User = require('./user');
const user = new User('Bob');
console.log(user.sayHi()); // Output: Hi, I'm Bob
```

---

## **6. Common Pitfalls and How to Avoid Them**

### **Reassigning `exports`**

**Issue**:

- Reassigning `exports` to a new value breaks the reference to `module.exports`, and the new value of `exports` will not be exported.

**Example (Problematic Code):**

```javascript
// badModule.js
exports = function () {
  console.log('This will not be exported');
};
```

```javascript
// app.js
const badModule = require('./badModule');
console.log(typeof badModule); // Output: {}
```

- **Explanation**:

  - The function assigned to `exports` is not exported because `exports` no longer points to `module.exports`.

**Solution**:

- Use `module.exports` when assigning a new value.

```javascript
// goodModule.js
module.exports = function () {
  console.log('This will be exported');
};
```

```javascript
// app.js
const goodModule = require('./goodModule');
goodModule(); // Output: This will be exported
```

### **Mutating `exports` vs. Reassigning**

- **Adding Properties**:

  - Safe to add properties to `exports`.

    ```javascript
    // module.js
    exports.a = 1;
    exports.b = 2;
    ```

- **Reassigning `exports`**:

  - Do not reassign `exports` directly.

    ```javascript
    // module.js
    exports = { a: 1, b: 2 }; // This breaks the link to module.exports
    ```

---

## **7. Practical Examples**

### **Example 1: Exporting a Single Function**

**File: `sayHello.js`**

```javascript
function sayHello(name) {
  return `Hello, ${name}!`;
}

module.exports = sayHello;
```

**File: `app.js`**

```javascript
const sayHello = require('./sayHello');
console.log(sayHello('Alice')); // Output: Hello, Alice!
```

- **Explanation**:

  - We assign the `sayHello` function directly to `module.exports`.
  - When we require the module, we get the function itself.

### **Example 2: Exporting Multiple Functions and Variables**

**File: `mathUtils.js`**

```javascript
const PI = 3.1416;

function areaOfCircle(radius) {
  return PI * radius * radius;
}

function circumference(radius) {
  return 2 * PI * radius;
}

// Exporting multiple items
module.exports = {
  PI,
  areaOfCircle,
  circumference,
};
```

**File: `app.js`**

```javascript
const mathUtils = require('./mathUtils');
console.log(`PI: ${mathUtils.PI}`); // Output: PI: 3.1416
console.log(`Area: ${mathUtils.areaOfCircle(5)}`); // Output: Area: 78.54
```

### **Example 3: Exporting a Class**

**File: `person.js`**

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `I'm ${this.name} and I'm ${this.age} years old.`;
  }
}

module.exports = Person;
```

**File: `app.js`**

```javascript
const Person = require('./person');
const person = new Person('Bob', 30);
console.log(person.introduce()); // Output: I'm Bob and I'm 30 years old.
```

### **Example 4: Understanding the `exports` Shortcut**

**File: `animals.js`**

```javascript
// Both exports and module.exports point to the same object
exports.cat = 'Meow';
exports.dog = 'Woof';

// Reassigning exports (bad practice)
exports = {
  cow: 'Moo',
};
```

**File: `app.js`**

```javascript
const animals = require('./animals');
console.log(animals.cat); // Output: Meow
console.log(animals.dog); // Output: Woof
console.log(animals.cow); // Output: undefined
```

- **Explanation**:

  - The `cat` and `dog` properties are added to the initial `exports` object.
  - Reassigning `exports` to a new object does not affect `module.exports`.
  - The `cow` property is not exported.

**Correct Approach**:

```javascript
// animals.js
module.exports = {
  cat: 'Meow',
  dog: 'Woof',
  cow: 'Moo',
};
```

---

## **8. Best Practices**

- **Use `module.exports` for Clarity**:

  - When exporting a single entity (function, class, or object), assign it directly to `module.exports`.

    ```javascript
    module.exports = MyFunctionOrClass;
    ```

- **Avoid Reassigning `exports`**:

  - Do not assign a new value to `exports`. Instead, add properties to it.

    ```javascript
    // Good
    exports.someFunction = function () {};
    
    // Bad
    exports = someFunction;
    ```

- **Consistency**:

  - Stick to using either `module.exports` or `exports` consistently within a module to avoid confusion.

- **Exporting Multiple Items**:

  - When exporting multiple functions or variables, assign them to `module.exports` as an object.

    ```javascript
    module.exports = {
      functionOne,
      functionTwo,
    };
    ```

- **Avoid Circular Dependencies**:

  - Refactor code to eliminate circular dependencies, which can lead to unexpected `undefined` values.

---

## **9. Conclusion**

Understanding how `module.exports` and `exports` work in Node.js is crucial for effective module management and code organization. Remember that:

- **`module.exports` is the definitive object that `require` returns**.
- **`exports` is initially a reference to `module.exports`**, but reassigning it breaks the link.
- **Always assign new values to `module.exports`** when exporting a single function, class, or object.
- **Add properties to `exports`** when you want to export multiple named variables or functions.

By following best practices and being mindful of common pitfalls, you can create robust, maintainable modules for your Node.js applications.

---

## **10. Further Reading**

- **Node.js Documentation**:

  - [Modules: CommonJS Modules](https://nodejs.org/api/modules.html)
  - [Module Exports](https://nodejs.org/api/modules.html#module-exports)

- **Articles and Tutorials**:

  - [Understanding Module Exports and Imports in Node.js](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)
  - [Mastering the Module System in Node.js](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/)

- **Books**:

  - *Node.js Design Patterns* by Mario Casciaro and Luciano Mammino
  - *Node.js in Action* by Mike Cantelon et al.

---

# 4 - Bult-in Module path
# 5 - Bult-in Module fs
# 6 - Benefits of Asynchrony
# 7 - Event Emitter
# 8 - Create a first web server
# 9 - Response html file
# 10 - Check url
# 11 - Response JSON
# 12 - Send data to server
# 13 - Separate URL
# 15 - Update item
# 16 - Delete item
