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
# 3 - Module export keyword
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
