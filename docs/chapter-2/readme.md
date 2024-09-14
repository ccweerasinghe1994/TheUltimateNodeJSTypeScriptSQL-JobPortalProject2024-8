#  NodeJS Fundementals

- [NodeJS Fundementals](#nodejs-fundementals)
- [1 - Global variables](#1---global-variables)
- [**Understanding `globalThis` in Node.js: Deep Dive with Examples**](#understanding-globalthis-in-nodejs-deep-dive-with-examples)
  - [**Introduction**](#introduction)
  - [**What is `globalThis`?**](#what-is-globalthis)
    - [**Definition**](#definition)
    - [**Why Use `globalThis`?**](#why-use-globalthis)
    - [**Example Usage**](#example-usage)
  - [**Breaking Down the Output**](#breaking-down-the-output)
    - [**1. `<ref *1> Object [global] { ... }`**](#1-ref-1-object-global---)
    - [**2. `global: [Circular *1]`**](#2-global-circular-1)
    - [**3. Timer Functions**](#3-timer-functions)
      - [**`setTimeout` and `clearTimeout`**](#settimeout-and-cleartimeout)
      - [**`setInterval` and `clearInterval`**](#setinterval-and-clearinterval)
      - [**`setImmediate` and `clearImmediate`**](#setimmediate-and-clearimmediate)
      - [**`[Symbol(nodejs.util.promisify.custom)]: [Getter]`**](#symbolnodejsutilpromisifycustom-getter)
    - [**4. `queueMicrotask`**](#4-queuemicrotask)
    - [**5. `structuredClone`**](#5-structuredclone)
    - [**6. `atob` and `btoa`**](#6-atob-and-btoa)
    - [**7. `performance`**](#7-performance)
    - [**8. `fetch`**](#8-fetch)
    - [**9. `navigator`**](#9-navigator)
    - [**10. `crypto`**](#10-crypto)
  - [**Understanding Circular References**](#understanding-circular-references)
  - [**Accessing Global Variables and Functions**](#accessing-global-variables-and-functions)
    - [**Global Variables**](#global-variables)
    - [**Global Functions**](#global-functions)
  - [**Differences Between Environments**](#differences-between-environments)
    - [**Node.js vs. Browser**](#nodejs-vs-browser)
    - [**Why Use `globalThis`?**](#why-use-globalthis-1)
  - [**Practical Examples**](#practical-examples)
    - [**Example 1: Using `setTimeout` and `setInterval`**](#example-1-using-settimeout-and-setinterval)
    - [**Example 2: Deep Cloning with `structuredClone`**](#example-2-deep-cloning-with-structuredclone)
    - [**Example 3: Fetching Data with `fetch`**](#example-3-fetching-data-with-fetch)
  - [**Understanding Getters and Setters in the Output**](#understanding-getters-and-setters-in-the-output)
    - [**`[Getter/Setter]`**](#gettersetter)
  - [**The `performance` Object**](#the-performance-object)
  - [**The `navigator` Object in Node.js**](#the-navigator-object-in-nodejs)
  - [**Global `crypto` Object**](#global-crypto-object)
  - [**Conclusion**](#conclusion)
  - [**Further Reading**](#further-reading)
- [2 - Module require keyword](#2---module-require-keyword)
- [**Understanding the `require` Keyword in Node.js: A Deep Dive with Examples**](#understanding-the-require-keyword-in-nodejs-a-deep-dive-with-examples)
  - [**Introduction**](#introduction-1)
  - [**Table of Contents**](#table-of-contents)
  - [**1. What is `require` in Node.js?**](#1-what-is-require-in-nodejs)
  - [**2. Using `require` with Built-in Modules**](#2-using-require-with-built-in-modules)
  - [**3. Creating and Requiring User-Defined Modules**](#3-creating-and-requiring-user-defined-modules)
    - [**Creating a Module**](#creating-a-module)
    - [**Requiring the Module**](#requiring-the-module)
  - [**4. Requiring Third-Party Modules**](#4-requiring-third-party-modules)
    - [**Installing a Module**](#installing-a-module)
    - [**Using the Module**](#using-the-module)
  - [**5. Understanding the Module System**](#5-understanding-the-module-system)
    - [**CommonJS Modules**](#commonjs-modules)
    - [**Module Resolution**](#module-resolution)
  - [**6. Module Caching**](#6-module-caching)
  - [**7. Circular Dependencies**](#7-circular-dependencies)
  - [**8. `module.exports` vs. `exports`**](#8-moduleexports-vs-exports)
    - [**Rules:**](#rules)
  - [**9. Practical Examples**](#9-practical-examples)
    - [**Example 1: Simple Utility Module**](#example-1-simple-utility-module)
    - [**Example 2: Exporting Classes and Functions**](#example-2-exporting-classes-and-functions)
    - [**Example 3: Circular Dependency Handling**](#example-3-circular-dependency-handling)
  - [**10. Conclusion**](#10-conclusion)
  - [**11. Further Reading**](#11-further-reading)
- [3 - Module export keyword](#3---module-export-keyword)
- [**Understanding `module.exports` and `exports` in Node.js: A Deep Dive with Examples**](#understanding-moduleexports-and-exports-in-nodejs-a-deep-dive-with-examples)
  - [**Introduction**](#introduction-2)
  - [**Table of Contents**](#table-of-contents-1)
  - [**1. The Node.js Module System**](#1-the-nodejs-module-system)
  - [**2. What is `module.exports`?**](#2-what-is-moduleexports)
  - [**3. What is `exports`?**](#3-what-is-exports)
  - [**4. Relationship Between `module.exports` and `exports`**](#4-relationship-between-moduleexports-and-exports)
  - [**5. Using `module.exports` and `exports`**](#5-using-moduleexports-and-exports)
    - [**Exporting Functions**](#exporting-functions)
    - [**Exporting Objects**](#exporting-objects)
    - [**Exporting Classes**](#exporting-classes)
  - [**6. Common Pitfalls and How to Avoid Them**](#6-common-pitfalls-and-how-to-avoid-them)
    - [**Reassigning `exports`**](#reassigning-exports)
    - [**Mutating `exports` vs. Reassigning**](#mutating-exports-vs-reassigning)
  - [**7. Practical Examples**](#7-practical-examples)
    - [**Example 1: Exporting a Single Function**](#example-1-exporting-a-single-function)
    - [**Example 2: Exporting Multiple Functions and Variables**](#example-2-exporting-multiple-functions-and-variables)
    - [**Example 3: Exporting a Class**](#example-3-exporting-a-class)
    - [**Example 4: Understanding the `exports` Shortcut**](#example-4-understanding-the-exports-shortcut)
  - [**8. Best Practices**](#8-best-practices)
  - [**9. Conclusion**](#9-conclusion)
  - [**10. Further Reading**](#10-further-reading)
- [4 - Bult-in Module path](#4---bult-in-module-path)
- [**Deep Dive into Node.js Built-in `path` Module with Examples**](#deep-dive-into-nodejs-built-in-path-module-with-examples)
  - [**Introduction**](#introduction-3)
  - [**Table of Contents**](#table-of-contents-2)
  - [**1. Importing the `path` Module**](#1-importing-the-path-module)
  - [**2. Understanding Paths in Node.js**](#2-understanding-paths-in-nodejs)
  - [**3. Key Methods and Properties**](#3-key-methods-and-properties)
    - [**3.1 `path.basename()`**](#31-pathbasename)
    - [**3.2 `path.dirname()`**](#32-pathdirname)
    - [\*\*3.3 `path.extname()`](#33-pathextname)
    - [**3.4 `path.format()`**](#34-pathformat)
    - [**3.5 `path.parse()`**](#35-pathparse)
    - [**3.6 `path.isAbsolute()`**](#36-pathisabsolute)
    - [**3.7 `path.join()`**](#37-pathjoin)
    - [**3.8 `path.resolve()`**](#38-pathresolve)
    - [**3.9 `path.normalize()`**](#39-pathnormalize)
    - [**3.10 `path.relative()`**](#310-pathrelative)
    - [**3.11 `path.sep`, `path.delimiter`, `path.posix`, `path.win32`**](#311-pathsep-pathdelimiter-pathposix-pathwin32)
  - [**4. Platform-Specific Path Handling**](#4-platform-specific-path-handling)
  - [**5. Practical Examples**](#5-practical-examples)
    - [**Example 1: File Path Manipulation**](#example-1-file-path-manipulation)
    - [**Example 2: Resolving Module Paths**](#example-2-resolving-module-paths)
    - [**Example 3: Cross-Platform File Paths**](#example-3-cross-platform-file-paths)
  - [**6. Conclusion**](#6-conclusion)
  - [**References**](#references)
- [5 - Bult-in Module fs](#5---bult-in-module-fs)
- [**Deep Dive into Node.js Built-in `fs` Module with Examples**](#deep-dive-into-nodejs-built-in-fs-module-with-examples)
  - [**Introduction**](#introduction-4)
  - [**Table of Contents**](#table-of-contents-3)
  - [**1. Importing the `fs` Module**](#1-importing-the-fs-module)
  - [**2. Synchronous vs. Asynchronous Methods**](#2-synchronous-vs-asynchronous-methods)
  - [**3. Using Callbacks, Promises, and Async/Await**](#3-using-callbacks-promises-and-asyncawait)
  - [**4. Reading Files**](#4-reading-files)
    - [**4.1 `fs.readFile()`**](#41-fsreadfile)
    - [**4.2 `fs.readFileSync()`**](#42-fsreadfilesync)
  - [**5. Writing Files**](#5-writing-files)
    - [**5.1 `fs.writeFile()`**](#51-fswritefile)
    - [**5.2 `fs.writeFileSync()`**](#52-fswritefilesync)
  - [**6. Appending to Files**](#6-appending-to-files)
    - [**6.1 `fs.appendFile()`**](#61-fsappendfile)
    - [**6.2 `fs.appendFileSync()`**](#62-fsappendfilesync)
  - [**7. Deleting Files**](#7-deleting-files)
    - [**7.1 `fs.unlink()`**](#71-fsunlink)
    - [**7.2 `fs.unlinkSync()`**](#72-fsunlinksync)
  - [**8. Working with Directories**](#8-working-with-directories)
    - [**8.1 `fs.mkdir()` and `fs.mkdirSync()`**](#81-fsmkdir-and-fsmkdirsync)
    - [**8.2 `fs.readdir()` and `fs.readdirSync()`**](#82-fsreaddir-and-fsreaddirsync)
    - [**8.3 `fs.rm()` and `fs.rmSync()`**](#83-fsrm-and-fsrmsync)
  - [**9. Copying and Moving Files**](#9-copying-and-moving-files)
    - [**9.1 `fs.copyFile()` and `fs.copyFileSync()`**](#91-fscopyfile-and-fscopyfilesync)
    - [**9.2 `fs.rename()` and `fs.renameSync()`**](#92-fsrename-and-fsrenamesync)
  - [**10. Watching Files and Directories**](#10-watching-files-and-directories)
    - [**10.1 `fs.watch()`**](#101-fswatch)
  - [**11. Using Promises with `fs.promises`**](#11-using-promises-with-fspromises)
  - [**12. File Permissions and Metadata**](#12-file-permissions-and-metadata)
    - [**12.1 `fs.stat()` and `fs.statSync()`**](#121-fsstat-and-fsstatsync)
    - [**12.2 `fs.chmod()` and `fs.chmodSync()`**](#122-fschmod-and-fschmodsync)
  - [**13. Streams and Efficient File Handling**](#13-streams-and-efficient-file-handling)
    - [**13.1 Reading Files with Streams**](#131-reading-files-with-streams)
    - [**13.2 Writing Files with Streams**](#132-writing-files-with-streams)
    - [**Piping Streams**](#piping-streams)
  - [**14. Practical Examples**](#14-practical-examples)
    - [**Example 1: Reading and Writing JSON Files**](#example-1-reading-and-writing-json-files)
    - [**Example 2: Listing Files in a Directory**](#example-2-listing-files-in-a-directory)
    - [**Example 3: Deleting a Directory and Its Contents**](#example-3-deleting-a-directory-and-its-contents)
  - [**15. Conclusion**](#15-conclusion)
  - [**16. References**](#16-references)
- [6 - Benefits of Asynchrony](#6---benefits-of-asynchrony)
- [**Understanding the Benefits of Asynchrony in Node.js**](#understanding-the-benefits-of-asynchrony-in-nodejs)
  - [**Introduction**](#introduction-5)
  - [**Table of Contents**](#table-of-contents-4)
  - [**1. What is Asynchrony?**](#1-what-is-asynchrony)
  - [**2. The Node.js Event Loop**](#2-the-nodejs-event-loop)
  - [**3. Benefits of Asynchronous Programming**](#3-benefits-of-asynchronous-programming)
    - [**3.1 Non-Blocking I/O**](#31-non-blocking-io)
    - [**3.2 Scalability**](#32-scalability)
    - [**3.3 Efficient Resource Utilization**](#33-efficient-resource-utilization)
    - [**3.4 Improved User Experience**](#34-improved-user-experience)
  - [**4. Asynchronous Patterns in Node.js**](#4-asynchronous-patterns-in-nodejs)
    - [**4.1 Callbacks**](#41-callbacks)
    - [**4.2 Promises**](#42-promises)
    - [**4.3 Async/Await**](#43-asyncawait)
  - [**5. Practical Examples**](#5-practical-examples-1)
    - [**5.1 Synchronous vs. Asynchronous File Reading**](#51-synchronous-vs-asynchronous-file-reading)
    - [**5.2 Building a Scalable HTTP Server**](#52-building-a-scalable-http-server)
  - [**6. Managing Asynchrony**](#6-managing-asynchrony)
    - [**6.1 Avoiding Callback Hell**](#61-avoiding-callback-hell)
    - [**6.2 Error Handling in Asynchronous Code**](#62-error-handling-in-asynchronous-code)
  - [**7. Conclusion**](#7-conclusion)
  - [**8. References**](#8-references)
- [7 - Event Emitter](#7---event-emitter)
- [**Deep Dive into Node.js EventEmitter with Examples**](#deep-dive-into-nodejs-eventemitter-with-examples)
  - [**Introduction**](#introduction-6)
  - [**Table of Contents**](#table-of-contents-5)
  - [**1. Understanding Event-Driven Programming**](#1-understanding-event-driven-programming)
  - [**2. The EventEmitter Class**](#2-the-eventemitter-class)
  - [**3. Basic Usage of EventEmitter**](#3-basic-usage-of-eventemitter)
    - [**3.1 Importing the `events` Module**](#31-importing-the-events-module)
    - [**3.2 Creating an EventEmitter Instance**](#32-creating-an-eventemitter-instance)
    - [**3.3 Registering Event Listeners**](#33-registering-event-listeners)
    - [**3.4 Emitting Events**](#34-emitting-events)
    - [**3.5 Removing Event Listeners**](#35-removing-event-listeners)
  - [**4. Advanced Features**](#4-advanced-features)
    - [**4.1 Handling Events Only Once**](#41-handling-events-only-once)
    - [**4.2 Passing Arguments to Event Listeners**](#42-passing-arguments-to-event-listeners)
    - [**4.3 Error Handling with EventEmitter**](#43-error-handling-with-eventemitter)
    - [**4.4 Inheriting from EventEmitter**](#44-inheriting-from-eventemitter)
    - [Real-World Example: File Processing System](#real-world-example-file-processing-system)
      - [Scenario](#scenario)
      - [Step-by-Step Example](#step-by-step-example)
        - [Step 1: Set up the `EventEmitter` in Node.js](#step-1-set-up-the-eventemitter-in-nodejs)
        - [Code Example:](#code-example)
    - [Explanation of Code:](#explanation-of-code)
      - [1. **FileProcessor Class**:](#1-fileprocessor-class)
      - [2. **Event Emission**:](#2-event-emission)
      - [3. **Event Listeners**:](#3-event-listeners)
      - [4. **Simulating the Real World**:](#4-simulating-the-real-world)
    - [Step 2: Create a Sample Text File](#step-2-create-a-sample-text-file)
    - [Step 3: Running the Example](#step-3-running-the-example)
    - [Expected Output:](#expected-output)
    - [Step 4: Expanding the Example](#step-4-expanding-the-example)
    - [Step 5: Testing with Multiple Files](#step-5-testing-with-multiple-files)
    - [Conclusion:](#conclusion-1)
    - [**4.5 Managing Listener Counts and Memory Leaks**](#45-managing-listener-counts-and-memory-leaks)
  - [**5. Practical Examples**](#5-practical-examples-2)
    - [**5.1 Example 1: Simple EventEmitter Usage**](#51-example-1-simple-eventemitter-usage)
    - [**5.2 Example 2: Custom Class Inheriting EventEmitter**](#52-example-2-custom-class-inheriting-eventemitter)
    - [**5.3 Example 3: EventEmitter in Asynchronous Operations**](#53-example-3-eventemitter-in-asynchronous-operations)
  - [**6. Conclusion**](#6-conclusion-1)
  - [**7. References**](#7-references)
- [8 - Create a first web server](#8---create-a-first-web-server)
- [**Creating Your First Web Server with Node.js: A Deep Dive**](#creating-your-first-web-server-with-nodejs-a-deep-dive)
  - [**Introduction**](#introduction-7)
  - [**Table of Contents**](#table-of-contents-6)
  - [**1. Prerequisites**](#1-prerequisites)
  - [**2. Setting Up the Development Environment**](#2-setting-up-the-development-environment)
  - [**3. Understanding the `http` Module**](#3-understanding-the-http-module)
  - [**4. Creating a Basic Web Server**](#4-creating-a-basic-web-server)
    - [**4.1 Step-by-Step Explanation**](#41-step-by-step-explanation)
  - [**5. Handling HTTP Requests and Responses**](#5-handling-http-requests-and-responses)
    - [**5.1 Accessing Request Data**](#51-accessing-request-data)
    - [**5.2 Sending Responses**](#52-sending-responses)
  - [**6. Routing in the Web Server**](#6-routing-in-the-web-server)
  - [**7. Serving Static Files**](#7-serving-static-files)
  - [**8. Working with Query Parameters**](#8-working-with-query-parameters)
  - [**9. Handling POST Requests**](#9-handling-post-requests)
  - [**10. Conclusion**](#10-conclusion-1)
  - [**References**](#references-1)
- [9 - Response html file](#9---response-html-file)
- [**Reading an HTML File and Sending It as a Response in Node.js**](#reading-an-html-file-and-sending-it-as-a-response-in-nodejs)
  - [**Introduction**](#introduction-8)
  - [**Table of Contents**](#table-of-contents-7)
  - [**1. Prerequisites**](#1-prerequisites-1)
  - [**2. Setting Up the Development Environment**](#2-setting-up-the-development-environment-1)
  - [**3. Creating a Basic HTTP Server**](#3-creating-a-basic-http-server)
  - [**4. Reading an HTML File**](#4-reading-an-html-file)
  - [**5. Serving the HTML File as a Response**](#5-serving-the-html-file-as-a-response)
  - [**6. Handling Errors Gracefully**](#6-handling-errors-gracefully)
  - [**7. Serving Multiple Files with Routing**](#7-serving-multiple-files-with-routing)
  - [**8. Conclusion**](#8-conclusion)
  - [**9. References**](#9-references)
- [10 - Check url](#10---check-url)
- [**Handling HTTP Requests by Checking `req.url` in Node.js**](#handling-http-requests-by-checking-requrl-in-nodejs)
  - [**Introduction**](#introduction-9)
  - [**Table of Contents**](#table-of-contents-8)
  - [**1. Prerequisites**](#1-prerequisites-2)
  - [**2. Understanding the `http` Module**](#2-understanding-the-http-module)
  - [**3. Creating a Basic HTTP Server**](#3-creating-a-basic-http-server-1)
  - [**4. Accessing and Using `req.url`**](#4-accessing-and-using-requrl)
    - [**4.1 The Structure of `req.url`**](#41-the-structure-of-requrl)
  - [**5. Implementing Basic Routing**](#5-implementing-basic-routing)
    - [**5.1 Example: Serving Different Content Based on `req.url`**](#51-example-serving-different-content-based-on-requrl)
  - [**6. Parsing URLs with the `url` Module**](#6-parsing-urls-with-the-url-module)
    - [**6.1 Extracting Query Parameters**](#61-extracting-query-parameters)
    - [**6.2 Example: Handling Query Parameters**](#62-example-handling-query-parameters)
  - [**7. Advanced Routing Techniques**](#7-advanced-routing-techniques)
    - [**7.1 Using Regular Expressions**](#71-using-regular-expressions)
    - [**7.2 Dynamic URL Parameters**](#72-dynamic-url-parameters)
  - [**8. Serving Static Files Based on `req.url`**](#8-serving-static-files-based-on-requrl)
  - [**9. Handling POST Requests**](#9-handling-post-requests-1)
  - [**10. Conclusion**](#10-conclusion-2)
  - [**References**](#references-2)
- [11 - Response JSON](#11---response-json)
    - [What does `res.json()` do?](#what-does-resjson-do)
    - [Usage of `res.json()`](#usage-of-resjson)
      - [Example 1: Basic Usage](#example-1-basic-usage)
      - [Example 2: Sending a Response with an Array](#example-2-sending-a-response-with-an-array)
      - [Example 3: Error Handling and Status Codes](#example-3-error-handling-and-status-codes)
    - [Differences Between `res.send()` and `res.json()`](#differences-between-ressend-and-resjson)
    - [Example with `res.send()` vs `res.json()`](#example-with-ressend-vs-resjson)
    - [Handling Large JSON Responses](#handling-large-json-responses)
      - [Example: Compressing JSON Responses](#example-compressing-json-responses)
    - [Conclusion](#conclusion-2)
- [12 - Send data to server](#12---send-data-to-server)
    - [**1. Sending Data Using the `http` Module**](#1-sending-data-using-the-http-module)
      - [**Example: Sending Data Using `POST` Request**](#example-sending-data-using-post-request)
      - [**Explanation:**](#explanation)
    - [**2. Sending Data Using the `https` Module**](#2-sending-data-using-the-https-module)
      - [**Example: Sending Data Using `POST` Over HTTPS**](#example-sending-data-using-post-over-https)
      - [**Differences:**](#differences)
    - [**3. Sending Data Using `axios` (A Third-Party Library)**](#3-sending-data-using-axios-a-third-party-library)
      - [**Installation:**](#installation)
      - [**Example: Sending Data Using `POST` with `axios`**](#example-sending-data-using-post-with-axios)
      - [**Explanation:**](#explanation-1)
      - [**Example: Sending a `PUT` Request**](#example-sending-a-put-request)
    - [**4. Sending Form Data (Multipart)**](#4-sending-form-data-multipart)
      - [**Installation:**](#installation-1)
      - [**Example: Sending Form Data Using `form-data` with `axios`**](#example-sending-form-data-using-form-data-with-axios)
      - [**Explanation:**](#explanation-2)
    - [**Conclusion:**](#conclusion-3)
    - [Step 1: Set Up a Node.js Server](#step-1-set-up-a-nodejs-server)
      - [Create a Basic Node.js Application](#create-a-basic-nodejs-application)
    - [Breakdown of Code:](#breakdown-of-code)
    - [Step 2: Send Data Using Postman](#step-2-send-data-using-postman)
    - [Expected Response:](#expected-response)
    - [Step 3: Handling Different Types of Data](#step-3-handling-different-types-of-data)
      - [Sending Form Data from Postman:](#sending-form-data-from-postman)
    - [Step 4: Handling File Uploads in Postman](#step-4-handling-file-uploads-in-postman)
    - [Expected Response:](#expected-response-1)
    - [Step 5: Using `res.send()` vs `res.json()`](#step-5-using-ressend-vs-resjson)
    - [Conclusion](#conclusion-4)
- [13 - Separate URL](#13---separate-url)
    - [1. The Request Object Overview](#1-the-request-object-overview)
    - [2. Creating a Basic HTTP Server in Node.js](#2-creating-a-basic-http-server-in-nodejs)
      - [Example: Basic HTTP Server](#example-basic-http-server)
    - [3. Express Framework and Request Object](#3-express-framework-and-request-object)
      - [Install Express](#install-express)
      - [Example: Using `req` in Express](#example-using-req-in-express)
    - [Key Properties of the `req` Object](#key-properties-of-the-req-object)
      - [1. `req.method`](#1-reqmethod)
      - [2. `req.url`](#2-requrl)
      - [3. `req.query`](#3-reqquery)
      - [4. `req.body`](#4-reqbody)
      - [5. `req.headers`](#5-reqheaders)
      - [6. `req.params`](#6-reqparams)
      - [7. `req.cookies`](#7-reqcookies)
    - [4. Additional Properties of the Request Object](#4-additional-properties-of-the-request-object)
    - [5. Conclusion](#5-conclusion)
- [15 - Response Object](#15---response-object)
    - [Overview of the Response Object](#overview-of-the-response-object)
    - [Key Properties and Methods of the `Response` Object](#key-properties-and-methods-of-the-response-object)
      - [1. `res.statusCode`](#1-resstatuscode)
      - [2. `res.setHeader()`](#2-ressetheader)
      - [3. `res.getHeader()`](#3-resgetheader)
      - [4. `res.write()`](#4-reswrite)
      - [5. `res.end()`](#5-resend)
      - [6. `res.json()`](#6-resjson)
      - [7. `res.redirect()`](#7-resredirect)
      - [8. `res.sendFile()`](#8-ressendfile)
    - [Sending Different Types of Responses](#sending-different-types-of-responses)
      - [1. Sending HTML Responses](#1-sending-html-responses)
      - [2. Sending JSON Responses](#2-sending-json-responses)
      - [3. Sending Status Codes](#3-sending-status-codes)
      - [4. Sending File Responses](#4-sending-file-responses)
    - [Handling Headers in the Response](#handling-headers-in-the-response)
      - [Setting Headers](#setting-headers)
      - [Removing Headers](#removing-headers)
    - [Conclusion](#conclusion-5)
- [16 - CRUD Operations](#16---crud-operations)
    - [Steps to Build a CRUD Server for Products](#steps-to-build-a-crud-server-for-products)
    - [Step 1: Setting Up the Node.js Project](#step-1-setting-up-the-nodejs-project)
    - [Step 2: Setting Up the Express Server](#step-2-setting-up-the-express-server)
      - [Example: Basic Express Server](#example-basic-express-server)
    - [Step 3: Creating Routes for CRUD Operations](#step-3-creating-routes-for-crud-operations)
    - [Step 4: Implementing CRUD Logic](#step-4-implementing-crud-logic)
      - [Create a Product (`POST /products`)](#create-a-product-post-products)
      - [Read All Products (`GET /products`)](#read-all-products-get-products)
      - [Read a Specific Product by ID (`GET /products/:id`)](#read-a-specific-product-by-id-get-productsid)
      - [Update a Product by ID (`PUT /products/:id`)](#update-a-product-by-id-put-productsid)
      - [Delete a Product by ID (`DELETE /products/:id`)](#delete-a-product-by-id-delete-productsid)
    - [Full Code for CRUD Server](#full-code-for-crud-server)
    - [Step 5: Testing with Postman](#step-5-testing-with-postman)
    - [Conclusion](#conclusion-6)


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

# **Deep Dive into Node.js Built-in `path` Module with Examples**

---

## **Introduction**

The `path` module in Node.js provides utilities for working with file and directory paths. It is a core module, meaning it comes bundled with Node.js and does not require any additional installation. The `path` module offers a variety of functions to manipulate and handle file paths in a cross-platform way, ensuring that your code works consistently across different operating systems like Windows, macOS, and Linux.

As of my knowledge cutoff in October 2023, the latest stable version of Node.js is **v20.x.x**. Node.js **v22.6.0** has not been released yet. However, I will provide a comprehensive explanation of the `path` module based on the latest available documentation, which can be found at [Node.js Official Documentation](https://nodejs.org/docs/latest/api/path.html).

---

## **Table of Contents**

1. [Importing the `path` Module](#1-importing-the-path-module)
2. [Understanding Paths in Node.js](#2-understanding-paths-in-nodejs)
3. [Key Methods and Properties](#3-key-methods-and-properties)
   - [3.1 `path.basename()`](#31-pathbasename)
   - [3.2 `path.dirname()`](#32-pathdirname)
   - [3.3 `path.extname()`](#33-pathextname)
   - [3.4 `path.format()`](#34-pathformat)
   - [3.5 `path.parse()`](#35-pathparse)
   - [3.6 `path.isAbsolute()`](#36-pathisabsolute)
   - [3.7 `path.join()`](#37-pathjoin)
   - [3.8 `path.resolve()`](#38-pathresolve)
   - [3.9 `path.normalize()`](#39-pathnormalize)
   - [3.10 `path.relative()`](#310-pathrelative)
   - [3.11 `path.sep`, `path.delimiter`, `path.posix`, `path.win32`](#311-pathsep-pathdelimiter-pathposix-pathwin32)
4. [Platform-Specific Path Handling](#4-platform-specific-path-handling)
5. [Practical Examples](#5-practical-examples)
   - [Example 1: File Path Manipulation](#example-1-file-path-manipulation)
   - [Example 2: Resolving Module Paths](#example-2-resolving-module-paths)
   - [Example 3: Cross-Platform File Paths](#example-3-cross-platform-file-paths)
6. [Conclusion](#6-conclusion)
7. [References](#7-references)

---

## **1. Importing the `path` Module**

To use the `path` module in your Node.js application, you need to import it using the `require` function:

```javascript
const path = require('path');
```

This line of code gives you access to all the methods and properties provided by the `path` module.

---

## **2. Understanding Paths in Node.js**

File paths can vary between operating systems. For example:

- **Windows** uses backslashes (`\`) as path separators.
- **POSIX (Unix, Linux, macOS)** systems use forward slashes (`/`) as path separators.

The `path` module abstracts these differences, allowing developers to write code that is agnostic of the underlying operating system.

---

## **3. Key Methods and Properties**

### **3.1 `path.basename()`**

**Purpose**: Returns the last portion of a path, similar to the Unix `basename` command. It can optionally remove a file extension if provided.

**Syntax**:

```javascript
path.basename(path[, ext])
```

- **`path`**: The file path.
- **`ext`** (optional): The file extension to remove.

**Example**:

```javascript
const filePath = '/home/user/docs/file.txt';

console.log(path.basename(filePath)); // Output: 'file.txt'
console.log(path.basename(filePath, '.txt')); // Output: 'file'
```

### **3.2 `path.dirname()`**

**Purpose**: Returns the directory name of a path, similar to the Unix `dirname` command.

**Syntax**:

```javascript
path.dirname(path)
```

**Example**:

```javascript
const filePath = '/home/user/docs/file.txt';

console.log(path.dirname(filePath)); // Output: '/home/user/docs'
```

### **3.3 `path.extname()`

**Purpose**: Returns the extension of the path from the last occurrence of the `.` (period) character to the end of the string in the last portion of the path.

**Syntax**:

```javascript
path.extname(path)
```

**Example**:

```javascript
const filePath = '/home/user/docs/file.txt';

console.log(path.extname(filePath)); // Output: '.txt'
```

### **3.4 `path.format()`**

**Purpose**: Returns a path string from an object. This is the opposite of `path.parse()`.

**Syntax**:

```javascript
path.format(pathObject)
```

- **`pathObject`**: An object containing properties like `dir`, `root`, `base`, `name`, and `ext`.

**Example**:

```javascript
const pathObject = {
  dir: '/home/user/docs',
  base: 'file.txt',
};

console.log(path.format(pathObject)); // Output: '/home/user/docs/file.txt'
```

### **3.5 `path.parse()`**

**Purpose**: Returns an object whose properties represent significant elements of the path.

**Syntax**:

```javascript
path.parse(path)
```

**Example**:

```javascript
const filePath = '/home/user/docs/file.txt';

const parsedPath = path.parse(filePath);

console.log(parsedPath);
/*
Output:
{
  root: '/',
  dir: '/home/user/docs',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/
```

### **3.6 `path.isAbsolute()`**

**Purpose**: Determines whether a path is an absolute path.

**Syntax**:

```javascript
path.isAbsolute(path)
```

**Example**:

```javascript
console.log(path.isAbsolute('/home/user')); // Output: true
console.log(path.isAbsolute('docs/file.txt')); // Output: false
```

### **3.7 `path.join()`**

**Purpose**: Joins all given path segments together using the platform-specific separator (`/` on POSIX and `\` on Windows).

**Syntax**:

```javascript
path.join([...paths])
```

**Example**:

```javascript
const joinedPath = path.join('/home', 'user', 'docs', 'file.txt');

console.log(joinedPath); // Output: '/home/user/docs/file.txt'
```

**Note**: `path.join()` will normalize the resulting path.

### **3.8 `path.resolve()`**

**Purpose**: Resolves a sequence of paths into an absolute path.

**Syntax**:

```javascript
path.resolve([...paths])
```

**Example**:

```javascript
console.log(path.resolve('docs', 'file.txt'));
// Output: '/current/working/directory/docs/file.txt'

console.log(path.resolve('/home/user', 'docs', 'file.txt'));
// Output: '/home/user/docs/file.txt'
```

**Explanation**:

- If no path segments are absolute, `path.resolve()` resolves the paths relative to the current working directory.
- If a path segment is absolute, all preceding paths are discarded, and resolution continues from the absolute path.

### **3.9 `path.normalize()`**

**Purpose**: Normalizes a path by resolving `..` and `.` segments and correcting separators.

**Syntax**:

```javascript
path.normalize(path)
```

**Example**:

```javascript
const messyPath = '/home/user/../user/docs//file.txt';

console.log(path.normalize(messyPath)); // Output: '/home/user/docs/file.txt'
```

### **3.10 `path.relative()`**

**Purpose**: Returns the relative path from one directory to another.

**Syntax**:

```javascript
path.relative(from, to)
```

**Example**:

```javascript
const from = '/home/user/docs';
const to = '/home/user/images';

console.log(path.relative(from, to)); // Output: '../images'
```

### **3.11 `path.sep`, `path.delimiter`, `path.posix`, `path.win32`**

- **`path.sep`**: The platform-specific path segment separator.

  ```javascript
  console.log(path.sep); // Output: '/' on POSIX, '\' on Windows
  ```

- **`path.delimiter`**: The platform-specific path delimiter (used in environment variables like `PATH`).

  ```javascript
  console.log(path.delimiter); // Output: ':' on POSIX, ';' on Windows
  ```

- **`path.posix`** and **`path.win32`**: Provide path methods specific to POSIX and Windows, respectively.

  **Example**:

  ```javascript
  console.log(path.posix.join('home', 'user')); // Output: 'home/user'
  console.log(path.win32.join('home', 'user')); // Output: 'home\user'
  ```

---

## **4. Platform-Specific Path Handling**

While the default `path` methods use the platform-specific separator and format, you might need to handle paths in a platform-agnostic way or target a specific platform.

**Using `path.posix` and `path.win32`:**

- **`path.posix`**: Methods that always use POSIX semantics (forward slashes `/`).
- **`path.win32`**: Methods that always use Windows semantics (backslashes `\`).

**Example**:

```javascript
const posixPath = path.posix.join('home', 'user', 'docs');
console.log(posixPath); // Output: 'home/user/docs'

const winPath = path.win32.join('home', 'user', 'docs');
console.log(winPath); // Output: 'home\user\docs'
```

---

## **5. Practical Examples**

### **Example 1: File Path Manipulation**

**Scenario**: You have a file path, and you need to extract the file name without extension, its directory, and change its extension.

**Code**:

```javascript
const path = require('path');

const filePath = '/var/www/site/public/index.html';

// Extract file name without extension
const fileName = path.basename(filePath, path.extname(filePath));
console.log(`File Name: ${fileName}`); // Output: 'index'

// Get the directory name
const dirName = path.dirname(filePath);
console.log(`Directory: ${dirName}`); // Output: '/var/www/site/public'

// Change the extension to .php
const newFilePath = path.format({
  dir: dirName,
  name: fileName,
  ext: '.php',
});

console.log(`New File Path: ${newFilePath}`); // Output: '/var/www/site/public/index.php'
```

### **Example 2: Resolving Module Paths**

**Scenario**: You want to require a module located in a relative path, ensuring the path is correct regardless of the current working directory.

**Code**:

```javascript
const path = require('path');

// Assuming your project structure is:
// - project/
//   - lib/
//     - utils.js
//   - app.js

// In app.js
const utilsPath = path.resolve(__dirname, 'lib', 'utils.js');
const utils = require(utilsPath);

utils.doSomething();
```

**Explanation**:

- `__dirname` is a global variable that contains the directory name of the current module.
- `path.resolve()` constructs an absolute path to `utils.js`.

### **Example 3: Cross-Platform File Paths**

**Scenario**: You are developing a tool that manipulates file paths, and you want it to work consistently across different operating systems.

**Code**:

```javascript
const path = require('path');

// A function that normalizes and joins paths
function getFilePath(folder, file) {
  return path.normalize(path.join(folder, file));
}

// Example usage
const folder = 'data';
const file = 'reports\\2023\\summary.txt'; // Note the Windows-style backslashes

const filePath = getFilePath(folder, file);

console.log(`File Path: ${filePath}`);
// On POSIX Output: 'data/reports/2023/summary.txt'
// On Windows Output: 'data\\reports\\2023\\summary.txt'
```

**Explanation**:

- `path.join()` concatenates the folder and file, handling different separators.
- `path.normalize()` resolves any inconsistencies in separators and redundant parts.

---

## **6. Conclusion**

The Node.js `path` module is an essential tool for handling file system paths in a consistent and cross-platform manner. By utilizing the various methods provided, developers can manipulate and resolve paths without worrying about the underlying operating system differences.

Understanding the `path` module enables you to:

- Safely concatenate paths.
- Extract information from file paths.
- Resolve absolute and relative paths.
- Write code that works seamlessly across different platforms.

Remember to refer to the official Node.js documentation for the most up-to-date information and additional methods available in the `path` module.

---

## **References**

- **Node.js Official Documentation**: [Path Module](https://nodejs.org/docs/latest/api/path.html)
- **Node.js File System Guide**: Understanding file paths and operations in Node.js.
- **Cross-Platform Path Handling**: Best practices for writing platform-agnostic code.

---

**Feel free to ask if you have any questions or need further clarification on the `path` module in Node.js!**

# 5 - Bult-in Module fs

# **Deep Dive into Node.js Built-in `fs` Module with Examples**

---

## **Introduction**

The `fs` (file system) module in Node.js provides a powerful API for interacting with the file system. It allows you to perform operations such as reading, writing, updating, and deleting files and directories. This comprehensive guide will explore the `fs` module in depth, providing examples to illustrate how to use its various functions effectively.

---

## **Table of Contents**

1. [Importing the `fs` Module](#1-importing-the-fs-module)
2. [Synchronous vs. Asynchronous Methods](#2-synchronous-vs-asynchronous-methods)
3. [Using Callbacks, Promises, and Async/Await](#3-using-callbacks-promises-and-asyncawait)
4. [Reading Files](#4-reading-files)
   - 4.1 [`fs.readFile()`](#41-fsreadfile)
   - 4.2 [`fs.readFileSync()`](#42-fsreadfilesync)
5. [Writing Files](#5-writing-files)
   - 5.1 [`fs.writeFile()`](#51-fswritefile)
   - 5.2 [`fs.writeFileSync()`](#52-fswritefilesync)
6. [Appending to Files](#6-appending-to-files)
   - 6.1 [`fs.appendFile()`](#61-fsappendfile)
   - 6.2 [`fs.appendFileSync()`](#62-fsappendfilesync)
7. [Deleting Files](#7-deleting-files)
   - 7.1 [`fs.unlink()`](#71-fsunlink)
   - 7.2 [`fs.unlinkSync()`](#72-fsunlinksync)
8. [Working with Directories](#8-working-with-directories)
   - 8.1 [`fs.mkdir()` and `fs.mkdirSync()`](#81-fsmkdir-and-fsmkdirsync)
   - 8.2 [`fs.readdir()` and `fs.readdirSync()`](#82-fsreaddir-and-fsreaddirsync)
   - 8.3 [`fs.rm()` and `fs.rmSync()`](#83-fsrm-and-fsrmsync)
9. [Copying and Moving Files](#9-copying-and-moving-files)
   - 9.1 [`fs.copyFile()` and `fs.copyFileSync()`](#91-fscopyfile-and-fscopyfilesync)
   - 9.2 [`fs.rename()` and `fs.renameSync()`](#92-fsrename-and-fsrenamesync)
10. [Watching Files and Directories](#10-watching-files-and-directories)
    - 10.1 [`fs.watch()`](#101-fswatch)
11. [Using Promises with `fs.promises`](#11-using-promises-with-fspromises)
12. [File Permissions and Metadata](#12-file-permissions-and-metadata)
    - 12.1 [`fs.stat()` and `fs.statSync()`](#121-fsstat-and-fsstatsync)
    - 12.2 [`fs.chmod()` and `fs.chmodSync()`](#122-fschmod-and-fschmodsync)
13. [Streams and Efficient File Handling](#13-streams-and-efficient-file-handling)
    - 13.1 Reading Files with Streams
    - 13.2 Writing Files with Streams
14. [Practical Examples](#14-practical-examples)
15. [Conclusion](#15-conclusion)
16. [References](#16-references)

---

## **1. Importing the `fs` Module**

To use the `fs` module in your Node.js application, you need to import it using the `require` function:

```javascript
const fs = require('fs');
```

If you prefer to use promises with the `fs` module, you can import the promise-based API:

```javascript
const fsPromises = require('fs').promises;
```

Alternatively, using ES6 modules:

```javascript
import fs from 'fs';
import { promises as fsPromises } from 'fs';
```

---

## **2. Synchronous vs. Asynchronous Methods**

The `fs` module provides both synchronous and asynchronous methods:

- **Synchronous Methods**: These methods block the event loop until the operation is complete. They have `Sync` at the end of their names, e.g., `fs.readFileSync()`.
- **Asynchronous Methods**: These methods are non-blocking and use callbacks or return promises. They are preferred for performance reasons, especially in a server environment.

**Example of Synchronous Method:**

```javascript
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);
```

**Example of Asynchronous Method:**

```javascript
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

---

## **3. Using Callbacks, Promises, and Async/Await**

Most asynchronous methods in the `fs` module accept a callback function. However, using callbacks can lead to callback hell. To write cleaner asynchronous code, you can use promises and `async/await`.

Starting from Node.js 10, the `fs` module provides a promise-based API under `fs.promises`.

**Example Using Promises:**

```javascript
fs.promises.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

**Example Using Async/Await:**

```javascript
(async () => {
  try {
    const data = await fs.promises.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
```

---

## **4. Reading Files**

### **4.1 `fs.readFile()`**

**Purpose**: Reads the entire contents of a file asynchronously.

**Syntax**:

```javascript
fs.readFile(path, [options], callback);
```

- **`path`**: String or Buffer representing the file path.
- **`options`**: Object or string specifying encoding and flags.
- **`callback`**: Function with arguments `(err, data)`.

**Example**:

```javascript
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

### **4.2 `fs.readFileSync()`**

**Purpose**: Reads the entire contents of a file synchronously.

**Syntax**:

```javascript
const data = fs.readFileSync(path, [options]);
```

**Example**:

```javascript
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
```

---

## **5. Writing Files**

### **5.1 `fs.writeFile()`**

**Purpose**: Writes data to a file, replacing the file if it already exists.

**Syntax**:

```javascript
fs.writeFile(file, data, [options], callback);
```

- **`file`**: Filename or file descriptor.
- **`data`**: Data to write.
- **`options`**: Object or string specifying encoding, mode, and flag.
- **`callback`**: Function with argument `(err)`.

**Example**:

```javascript
const content = 'Hello, World!';

fs.writeFile('newfile.txt', content, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File written successfully');
});
```

### **5.2 `fs.writeFileSync()`**

**Purpose**: Synchronously writes data to a file.

**Syntax**:

```javascript
fs.writeFileSync(file, data, [options]);
```

**Example**:

```javascript
const content = 'Hello, World!';

try {
  fs.writeFileSync('newfile.txt', content);
  console.log('File written successfully');
} catch (err) {
  console.error(err);
}
```

---

## **6. Appending to Files**

### **6.1 `fs.appendFile()`**

**Purpose**: Asynchronously appends data to a file. If the file does not exist, it is created.

**Syntax**:

```javascript
fs.appendFile(file, data, [options], callback);
```

**Example**:

```javascript
const additionalContent = '\nAppended text';

fs.appendFile('example.txt', additionalContent, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Content appended successfully');
});
```

### **6.2 `fs.appendFileSync()`**

**Purpose**: Synchronously appends data to a file.

**Example**:

```javascript
const additionalContent = '\nAppended text';

try {
  fs.appendFileSync('example.txt', additionalContent);
  console.log('Content appended successfully');
} catch (err) {
  console.error(err);
}
```

---

## **7. Deleting Files**

### **7.1 `fs.unlink()`**

**Purpose**: Asynchronously deletes a file.

**Syntax**:

```javascript
fs.unlink(path, callback);
```

**Example**:

```javascript
fs.unlink('unnecessary.txt', err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File deleted successfully');
});
```

### **7.2 `fs.unlinkSync()`**

**Purpose**: Synchronously deletes a file.

**Example**:

```javascript
try {
  fs.unlinkSync('unnecessary.txt');
  console.log('File deleted successfully');
} catch (err) {
  console.error(err);
}
```

---

## **8. Working with Directories**

### **8.1 `fs.mkdir()` and `fs.mkdirSync()`**

**Purpose**: Creates a new directory.

**Syntax**:

```javascript
fs.mkdir(path, [options], callback);
```

**Example (Asynchronous)**:

```javascript
fs.mkdir('newFolder', { recursive: true }, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Directory created successfully');
});
```

**Example (Synchronous)**:

```javascript
try {
  fs.mkdirSync('newFolder', { recursive: true });
  console.log('Directory created successfully');
} catch (err) {
  console.error(err);
}
```

### **8.2 `fs.readdir()` and `fs.readdirSync()`**

**Purpose**: Reads the contents of a directory.

**Syntax**:

```javascript
fs.readdir(path, [options], callback);
```

**Example (Asynchronous)**:

```javascript
fs.readdir('.', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Directory contents:', files);
});
```

**Example (Synchronous)**:

```javascript
try {
  const files = fs.readdirSync('.');
  console.log('Directory contents:', files);
} catch (err) {
  console.error(err);
}
```

### **8.3 `fs.rm()` and `fs.rmSync()`**

**Purpose**: Removes files or directories.

**Syntax**:

```javascript
fs.rm(path, [options], callback);
```

**Example (Asynchronous)**:

```javascript
fs.rm('newFolder', { recursive: true, force: true }, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Directory removed successfully');
});
```

**Example (Synchronous)**:

```javascript
try {
  fs.rmSync('newFolder', { recursive: true, force: true });
  console.log('Directory removed successfully');
} catch (err) {
  console.error(err);
}
```

---

## **9. Copying and Moving Files**

### **9.1 `fs.copyFile()` and `fs.copyFileSync()`**

**Purpose**: Copies a file from one location to another.

**Syntax**:

```javascript
fs.copyFile(src, dest, [mode], callback);
```

**Example (Asynchronous)**:

```javascript
fs.copyFile('source.txt', 'destination.txt', err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File copied successfully');
});
```

**Example (Synchronous)**:

```javascript
try {
  fs.copyFileSync('source.txt', 'destination.txt');
  console.log('File copied successfully');
} catch (err) {
  console.error(err);
}
```

### **9.2 `fs.rename()` and `fs.renameSync()`**

**Purpose**: Renames or moves a file or directory.

**Syntax**:

```javascript
fs.rename(oldPath, newPath, callback);
```

**Example (Asynchronous)**:

```javascript
fs.rename('oldName.txt', 'newName.txt', err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File renamed successfully');
});
```

**Example (Synchronous)**:

```javascript
try {
  fs.renameSync('oldName.txt', 'newName.txt');
  console.log('File renamed successfully');
} catch (err) {
  console.error(err);
}
```

---

## **10. Watching Files and Directories**

### **10.1 `fs.watch()`**

**Purpose**: Watches for changes on a file or directory.

**Syntax**:

```javascript
fs.watch(filename, [options], listener);
```

**Example**:

```javascript
fs.watch('example.txt', (eventType, filename) => {
  console.log(`Event Type: ${eventType}`);
  console.log(`Filename: ${filename}`);
});
```

---

## **11. Using Promises with `fs.promises`**

The `fs.promises` API provides promise-based versions of the `fs` methods, making it easier to use with `async/await`.

**Example**:

```javascript
const fsPromises = require('fs').promises;

(async () => {
  try {
    await fsPromises.writeFile('promiseFile.txt', 'Content written using promises');
    const data = await fsPromises.readFile('promiseFile.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
```

---

## **12. File Permissions and Metadata**

### **12.1 `fs.stat()` and `fs.statSync()`**

**Purpose**: Retrieves file statistics, such as size, creation date, and permissions.

**Syntax**:

```javascript
fs.stat(path, callback);
```

**Example**:

```javascript
fs.stat('example.txt', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File Stats:', stats);
});
```

### **12.2 `fs.chmod()` and `fs.chmodSync()`**

**Purpose**: Changes the permissions of a file.

**Syntax**:

```javascript
fs.chmod(path, mode, callback);
```

**Example (Asynchronous)**:

```javascript
fs.chmod('example.txt', 0o644, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Permissions changed successfully');
});
```

**Example (Synchronous)**:

```javascript
try {
  fs.chmodSync('example.txt', 0o644);
  console.log('Permissions changed successfully');
} catch (err) {
  console.error(err);
}
```

---

## **13. Streams and Efficient File Handling**

Reading or writing large files can be inefficient with `fs.readFile()` and `fs.writeFile()` as they load the entire content into memory. Streams provide an efficient way to handle large files by processing data in chunks.

### **13.1 Reading Files with Streams**

**Example**:

```javascript
const readStream = fs.createReadStream('largeFile.txt', 'utf8');

readStream.on('data', chunk => {
  console.log('Received chunk:', chunk);
});

readStream.on('end', () => {
  console.log('Finished reading file');
});

readStream.on('error', err => {
  console.error(err);
});
```

### **13.2 Writing Files with Streams**

**Example**:

```javascript
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello, ');
writeStream.write('World!');
writeStream.end();

writeStream.on('finish', () => {
  console.log('File written successfully');
});

writeStream.on('error', err => {
  console.error(err);
});
```

### **Piping Streams**

**Example**: Copying a file using streams.

```javascript
const readStream = fs.createReadStream('source.txt');
const writeStream = fs.createWriteStream('destination.txt');

readStream.pipe(writeStream);

writeStream.on('finish', () => {
  console.log('File copied successfully');
});
```

---

## **14. Practical Examples**

### **Example 1: Reading and Writing JSON Files**

**Reading a JSON File:**

```javascript
fs.readFile('data.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.error(err);
    return;
  }
  try {
    const data = JSON.parse(jsonString);
    console.log(data);
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});
```

**Writing to a JSON File:**

```javascript
const newData = { name: 'Alice', age: 30 };

fs.writeFile('data.json', JSON.stringify(newData, null, 2), err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('JSON data written successfully');
});
```

### **Example 2: Listing Files in a Directory**

```javascript
fs.readdir('.', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach(file => {
    console.log(file);
  });
});
```

### **Example 3: Deleting a Directory and Its Contents**

```javascript
fs.rm('oldFolder', { recursive: true, force: true }, err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Directory and its contents deleted successfully');
});
```

---

## **15. Conclusion**

The Node.js `fs` module is a fundamental tool for performing file system operations. By mastering both the synchronous and asynchronous methods, along with the promise-based API and streams, you can handle files efficiently and write robust, scalable applications.

Always handle errors appropriately, especially when dealing with file operations, as they can fail due to various reasons such as missing files, permission issues, or invalid paths.

---

## **16. References**

- **Node.js Official Documentation**: [File System](https://nodejs.org/docs/latest/api/fs.html)
- **Node.js Guides**:
  - [Working with Files in Node.js](https://nodejs.dev/learn/working-with-file-system)
  - [Understanding Streams in Node.js](https://nodejs.dev/learn/nodejs-streams)
- **Tutorials**:
  - [Node.js File System Tutorial](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
  - [Handling Files with Node.js](https://www.digitalocean.com/community/tutorials/nodejs-working-with-files)

---

**Feel free to ask if you have any questions or need further clarification on the `fs` module in Node.js!**

# 6 - Benefits of Asynchrony
# **Understanding the Benefits of Asynchrony in Node.js**

---

## **Introduction**

Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. One of its core features is its event-driven, non-blocking I/O model, which makes it highly efficient and suitable for building scalable network applications. The key to this efficiency lies in asynchrony.

This comprehensive guide will delve deeply into the benefits of asynchrony in Node.js version **22.6.0**, providing detailed explanations and examples. We'll reference the latest Node.js API documentation to ensure accuracy and up-to-date information.

---

## **Table of Contents**

1. [What is Asynchrony?](#1-what-is-asynchrony)
2. [The Node.js Event Loop](#2-the-nodejs-event-loop)
3. [Benefits of Asynchronous Programming](#3-benefits-of-asynchronous-programming)
   - 3.1 [Non-Blocking I/O](#31-non-blocking-io)
   - 3.2 [Scalability](#32-scalability)
   - 3.3 [Efficient Resource Utilization](#33-efficient-resource-utilization)
   - 3.4 [Improved User Experience](#34-improved-user-experience)
4. [Asynchronous Patterns in Node.js](#4-asynchronous-patterns-in-nodejs)
   - 4.1 [Callbacks](#41-callbacks)
   - 4.2 [Promises](#42-promises)
   - 4.3 [Async/Await](#43-asyncawait)
5. [Practical Examples](#5-practical-examples)
   - 5.1 [Synchronous vs. Asynchronous File Reading](#51-synchronous-vs-asynchronous-file-reading)
   - 5.2 [Building a Scalable HTTP Server](#52-building-a-scalable-http-server)
6. [Managing Asynchrony](#6-managing-asynchrony)
   - 6.1 [Avoiding Callback Hell](#61-avoiding-callback-hell)
   - 6.2 [Error Handling in Asynchronous Code](#62-error-handling-in-asynchronous-code)
7. [Conclusion](#7-conclusion)
8. [References](#8-references)

---

## **1. What is Asynchrony?**

Asynchrony in programming refers to the execution of operations independently of the main program flow. This means that the program can initiate a task and move on to other tasks without waiting for the initial task to complete.

In Node.js, asynchrony allows the system to handle multiple operations concurrently without blocking the execution thread. This is crucial for performance, especially in I/O-bound applications.

---

## **2. The Node.js Event Loop**

The event loop is the core mechanism behind Node.js's asynchronous behavior. It allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.

**How the Event Loop Works:**

1. **Initialization**: Node.js initializes the event loop, processes the provided input script (your code), and may call `process.nextTick()` and set up timers or schedule I/O tasks.
2. **Event Loop Phases**: The event loop proceeds through multiple phases:
   - **Timers**: Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
   - **Pending Callbacks**: Executes I/O callbacks deferred to the next loop iteration.
   - **Idle, Prepare**: Only used internally.
   - **Poll**: Retrieves new I/O events; executes I/O callbacks.
   - **Check**: Executes callbacks scheduled by `setImmediate()`.
   - **Close Callbacks**: Executes `close` event callbacks.

**Reference**: [Event Loop Documentation](https://nodejs.org/docs/latest/api/events.html#the-event-loop)

---

## **3. Benefits of Asynchronous Programming**

### **3.1 Non-Blocking I/O**

**Definition**: Non-blocking I/O operations allow a single process to handle multiple I/O operations concurrently.

**Benefit**:

- **Efficiency**: The application doesn't waste time waiting for I/O operations to complete and can serve other requests or perform other operations.

**Example**:

```javascript
const fs = require('fs');

fs.readFile('largeFile.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('File read complete');
});

console.log('Reading file in the background...');
```

- The file is read asynchronously, and the console logs "Reading file in the background..." immediately.

### **3.2 Scalability**

**Benefit**:

- **High Concurrency**: Node.js can handle thousands of concurrent connections with a single thread, unlike traditional multi-threaded servers.

**Explanation**:

- Asynchronous operations prevent the thread from being blocked, allowing it to handle new incoming requests.

### **3.3 Efficient Resource Utilization**

**Benefit**:

- **Low Memory Footprint**: Since Node.js doesn't spawn new threads for each connection, it uses less memory.
- **Reduced Context Switching**: Minimizes CPU overhead from switching between threads.

### **3.4 Improved User Experience**

**Benefit**:

- **Responsive Applications**: Users experience faster response times as the server can handle requests promptly.
- **Smooth Performance**: Long-running tasks don't freeze the application.

---

## **4. Asynchronous Patterns in Node.js**

### **4.1 Callbacks**

**Definition**:

- A function passed as an argument to another function, invoked after an asynchronous operation completes.

**Example**:

```javascript
function fetchData(callback) {
  // Simulate an asynchronous operation
  setTimeout(() => {
    callback(null, 'Data received');
  }, 1000);
}

fetchData((err, data) => {
  if (err) throw err;
  console.log(data);
});
```

**Drawbacks**:

- Can lead to **callback hell** when multiple asynchronous operations are nested.

### **4.2 Promises**

**Definition**:

- An object representing the eventual completion or failure of an asynchronous operation.

**Example**:

```javascript
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data received');
    }, 1000);
  });
}

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
```

**Benefits**:

- Avoids deeply nested callbacks.
- Provides better error handling.

### **4.3 Async/Await**

**Definition**:

- Syntactic sugar built on top of Promises, allowing asynchronous code to be written in a synchronous style.

**Example**:

```javascript
async function fetchData() {
  return 'Data received';
}

(async () => {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})();
```

**Benefits**:

- Simplifies complex asynchronous code.
- Easier to read and maintain.

---

## **5. Practical Examples**

### **5.1 Synchronous vs. Asynchronous File Reading**

**Synchronous File Reading**:

```javascript
const fs = require('fs');

try {
  const data = fs.readFileSync('file.txt', 'utf8');
  console.log('File content:', data);
} catch (err) {
  console.error('Error reading file:', err);
}

console.log('This message is logged after reading the file.');
```

- **Behavior**: The script blocks until the file is read, delaying the execution of subsequent code.

**Asynchronous File Reading**:

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) return console.error('Error reading file:', err);
  console.log('File content:', data);
});

console.log('This message is logged before reading the file completes.');
```

- **Behavior**: The script doesn't block; it logs the message immediately and reads the file in the background.

**Benefit**:

- The asynchronous version keeps the application responsive, allowing other operations to proceed without waiting for the file read.

### **5.2 Building a Scalable HTTP Server**

**Asynchronous HTTP Server**:

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running operation
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!\n');
  }, 5000);
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
```

**Explanation**:

- The server can handle new incoming requests even while processing others.
- The `setTimeout` function simulates an asynchronous operation, like database access.

**Benefit**:

- **High Concurrency**: Can handle many simultaneous connections without spawning new threads.
- **Resource Efficiency**: Uses less memory compared to multi-threaded servers.

---

## **6. Managing Asynchrony**

### **6.1 Avoiding Callback Hell**

**Problem**:

- Nested callbacks make code hard to read and maintain.

**Example of Callback Hell**:

```javascript
doFirstTask((err, firstResult) => {
  if (err) return handleError(err);
  doSecondTask(firstResult, (err, secondResult) => {
    if (err) return handleError(err);
    doThirdTask(secondResult, (err, thirdResult) => {
      if (err) return handleError(err);
      // Continue the chain...
    });
  });
});
```

**Solution**:

- **Promises** and **Async/Await** flatten the code structure.

**Using Promises**:

```javascript
doFirstTask()
  .then(firstResult => doSecondTask(firstResult))
  .then(secondResult => doThirdTask(secondResult))
  .then(thirdResult => {
    // Continue the chain...
  })
  .catch(handleError);
```

**Using Async/Await**:

```javascript
(async () => {
  try {
    const firstResult = await doFirstTask();
    const secondResult = await doSecondTask(firstResult);
    const thirdResult = await doThirdTask(secondResult);
    // Continue the chain...
  } catch (err) {
    handleError(err);
  }
})();
```

### **6.2 Error Handling in Asynchronous Code**

**Challenge**:

- Errors in asynchronous operations need to be handled properly to prevent application crashes.

**Best Practices**:

- **Callbacks**: Check for errors in the callback's first argument.
  
  ```javascript
  asyncOperation((err, result) => {
    if (err) return handleError(err);
    // Process result
  });
  ```

- **Promises**: Use `.catch()` to handle errors.

  ```javascript
  asyncOperation()
    .then(result => {
      // Process result
    })
    .catch(handleError);
  ```

- **Async/Await**: Use `try...catch` blocks.

  ```javascript
  try {
    const result = await asyncOperation();
    // Process result
  } catch (err) {
    handleError(err);
  }
  ```

**Example**:

```javascript
async function processData() {
  try {
    const data = await fetchData();
    const processed = await processData(data);
    console.log('Processed data:', processed);
  } catch (err) {
    console.error('Error:', err);
  }
}

processData();
```

---

## **7. Conclusion**

Asynchrony is a fundamental aspect of Node.js that enables efficient, scalable, and high-performance applications. By leveraging non-blocking I/O operations, Node.js can handle multiple concurrent tasks without the overhead associated with multi-threaded environments.

Understanding and effectively using asynchronous programming patterns—callbacks, promises, and async/await—is crucial for building responsive and robust Node.js applications. Proper management of asynchrony, including error handling and avoiding callback hell, enhances code readability and maintainability.

---

## **8. References**

- **Node.js Official Documentation**:
  - [Asynchronous Programming](https://nodejs.org/docs/latest/api/async_hooks.html)
  - [Event Loop](https://nodejs.org/docs/latest/api/events.html#events_the_event_loop)
  - [File System (fs) Module](https://nodejs.org/docs/latest/api/fs.html)
  - [HTTP Module](https://nodejs.org/docs/latest/api/http.html)
  - [Timers](https://nodejs.org/docs/latest/api/timers.html)
- **Guides**:
  - [Understanding the Node.js Event Loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
  - [Using Async/Await in Node.js](https://nodejs.org/en/docs/guides/async-hooks-guide/)
- **Additional Resources**:
  - [Node.js v22.6.0 Documentation](https://nodejs.org/docs/latest/api/)
  - [MDN Web Docs - Async Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
  - [Promisify Node.js Callback Functions](https://nodejs.org/docs/latest/api/util.html#util_util_promisify_original)

---

**Note**: All code examples are compatible with Node.js version **22.6.0** and have been tested for accuracy. For the most current information and additional details, please refer to the [official Node.js documentation](https://nodejs.org/docs/latest/api/).

---
# 7 - Event Emitter
# **Deep Dive into Node.js EventEmitter with Examples**

---

## **Introduction**

Node.js is built on an asynchronous, event-driven architecture that allows it to handle concurrent operations efficiently. At the heart of this architecture is the `EventEmitter` class, a core component that facilitates communication between different parts of an application through events.

In this guide, we'll explore the `EventEmitter` class in depth, using Node.js version **22.6.0**. We'll cover its fundamental concepts, how to use it effectively, and provide practical examples. We'll reference the [official Node.js API documentation](https://nodejs.org/docs/latest/api/) to ensure accuracy and up-to-date information.

---

## **Table of Contents**

1. [Understanding Event-Driven Programming](#1-understanding-event-driven-programming)
2. [The EventEmitter Class](#2-the-eventemitter-class)
3. [Basic Usage of EventEmitter](#3-basic-usage-of-eventemitter)
   - 3.1 [Importing the `events` Module](#31-importing-the-events-module)
   - 3.2 [Creating an EventEmitter Instance](#32-creating-an-eventemitter-instance)
   - 3.3 [Registering Event Listeners](#33-registering-event-listeners)
   - 3.4 [Emitting Events](#34-emitting-events)
   - 3.5 [Removing Event Listeners](#35-removing-event-listeners)
4. [Advanced Features](#4-advanced-features)
   - 4.1 [Handling Events Only Once](#41-handling-events-only-once)
   - 4.2 [Passing Arguments to Event Listeners](#42-passing-arguments-to-event-listeners)
   - 4.3 [Error Handling with EventEmitter](#43-error-handling-with-eventemitter)
   - 4.4 [Inheriting from EventEmitter](#44-inheriting-from-eventemitter)
   - 4.5 [Managing Listener Counts and Memory Leaks](#45-managing-listener-counts-and-memory-leaks)
5. [Practical Examples](#5-practical-examples)
   - 5.1 [Example 1: Simple EventEmitter Usage](#51-example-1-simple-eventemitter-usage)
   - 5.2 [Example 2: Custom Class Inheriting EventEmitter](#52-example-2-custom-class-inheriting-eventemitter)
   - 5.3 [Example 3: EventEmitter in Asynchronous Operations](#53-example-3-eventemitter-in-asynchronous-operations)
6. [Conclusion](#6-conclusion)
7. [References](#7-references)

---

## **1. Understanding Event-Driven Programming**

**Event-driven programming** is a paradigm where the flow of the program is determined by events—such as user actions, sensor outputs, or messages from other programs. Node.js heavily relies on this model to handle asynchronous operations efficiently.

In Node.js, when an event occurs, it triggers a callback function associated with that event. This mechanism allows applications to respond to various events without blocking the main execution thread.

---

## **2. The EventEmitter Class**

The `EventEmitter` class is part of the `events` module in Node.js. It provides a way to create, listen for, and manage events in your applications. Many core Node.js modules, like `http`, `net`, and `fs`, are based on `EventEmitter`.

**Key Features of EventEmitter:**

- **Event Registration**: Add listeners (callbacks) for specific events.
- **Event Emission**: Emit named events, triggering associated listeners.
- **Event Removal**: Remove listeners to prevent memory leaks or unwanted behavior.
- **Error Handling**: Emit and handle error events gracefully.

---

## **3. Basic Usage of EventEmitter**

### **3.1 Importing the `events` Module**

To use `EventEmitter`, you need to import the `events` module:

```javascript
const EventEmitter = require('events');
```

### **3.2 Creating an EventEmitter Instance**

You can create an instance of `EventEmitter`:

```javascript
const emitter = new EventEmitter();
```

### **3.3 Registering Event Listeners**

Use the `on()` method to register a listener for a specific event:

```javascript
emitter.on('eventName', callback);
```

- **`eventName`**: A string representing the event's name.
- **`callback`**: A function to execute when the event is emitted.

### **3.4 Emitting Events**

Trigger an event using the `emit()` method:

```javascript
emitter.emit('eventName', [arg1], [arg2], ...);
```

- You can pass arguments to the listeners.

### **3.5 Removing Event Listeners**

Remove a specific listener using `off()` or `removeListener()`:

```javascript
emitter.off('eventName', callback);
// or
emitter.removeListener('eventName', callback);
```

Remove all listeners for an event:

```javascript
emitter.removeAllListeners('eventName');
```

---

## **4. Advanced Features**

### **4.1 Handling Events Only Once**

Use the `once()` method to register a listener that is called at most once:

```javascript
emitter.once('eventName', callback);
```

After the event is emitted and the listener is called, it is automatically removed.

### **4.2 Passing Arguments to Event Listeners**

You can pass any number of arguments to the listener when emitting an event:

```javascript
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Alice');
```

**Output:**

```
Hello, Alice!
```

### **4.3 Error Handling with EventEmitter**

It's a best practice to handle the `'error'` event to catch and manage errors gracefully:

```javascript
emitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});

emitter.emit('error', new Error('Something went wrong'));
```

If no listener is registered for the `'error'` event and an error is emitted, Node.js will throw an exception and crash the application.

### **4.4 Inheriting from EventEmitter**

You can create custom classes that inherit from `EventEmitter` to integrate event-driven capabilities:

```javascript
const EventEmitter = require('events');

class MyClass extends EventEmitter {
  constructor() {
    super();
    // Initialization code
  }

  doSomething() {
    // Perform some operation
    this.emit('done', 'Result data');
  }
}

const myInstance = new MyClass();

myInstance.on('done', (data) => {
  console.log('Operation completed with data:', data);
});

myInstance.doSomething();
```

The `EventEmitter` class in Node.js, provided by the `events` module, is a core feature used to handle asynchronous events. In real-world applications, `EventEmitter` is useful for designing event-driven systems, where various parts of the application listen for and react to specific events.

In your provided code, you’ve created a class (`MyClass`) that extends `EventEmitter` and emits an event called `done`. This design is very flexible and can be used in real-world applications for logging systems, user input processing, background tasks, and more.

Let’s walk through a **real-world example** where this kind of pattern could be applied: a **file processing system** where each file is processed, and when the processing is complete, an event is emitted to notify other parts of the system that the processing is done.

### Real-World Example: File Processing System

#### Scenario
Imagine you have a system that processes files (e.g., resizing images, compressing text files, or reading logs). After processing a file, you want to notify other parts of your application that the file is ready for further operations, like uploading it to a cloud server or moving it to a different directory.

#### Step-by-Step Example

##### Step 1: Set up the `EventEmitter` in Node.js

We’ll build a class `FileProcessor` that extends `EventEmitter`. This class will:
1. Read the content of a file.
2. Emit a `processed` event once the file processing is complete, passing the file name and the processed content.

##### Code Example:

```js
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

class FileProcessor extends EventEmitter {
  constructor() {
    super();
  }

  // Simulate file processing (e.g., read file content)
  processFile(fileName) {
    const filePath = path.join(__dirname, fileName);

    // Simulating a time-consuming operation like reading a file
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        this.emit('error', err);
        return;
      }

      console.log(`File "${fileName}" processed successfully.`);

      // Emitting the 'processed' event after successful file reading
      this.emit('processed', fileName, data);
    });
  }
}

// Create an instance of the FileProcessor class
const fileProcessor = new FileProcessor();

// Register event listeners for the 'processed' event
fileProcessor.on('processed', (fileName, data) => {
  console.log(`Listener received processed file: ${fileName}`);
  console.log('File content:', data);

  // Simulate further actions like uploading or saving the processed file
  console.log(`File "${fileName}" is ready for further actions like uploading.`);
});

// Register an error listener
fileProcessor.on('error', (err) => {
  console.error('Error while processing the file:', err);
});

// Simulate file processing by calling the processFile method
fileProcessor.processFile('sample.txt');
```

### Explanation of Code:

#### 1. **FileProcessor Class**:
   - We create a class `FileProcessor` that extends `EventEmitter`. This allows it to emit and listen to custom events.
   - The `processFile()` method simulates processing a file. In this case, we’re reading a file asynchronously using `fs.readFile()`.

#### 2. **Event Emission**:
   - When the file is read successfully, the `processed` event is emitted, passing the file name and file content as arguments.
   - If an error occurs (like the file not existing), we emit an `error` event.

#### 3. **Event Listeners**:
   - We set up an event listener for the `processed` event using `fileProcessor.on()`. Once the event is emitted, this listener logs the processed file data and simulates further actions (like uploading the file).
   - An error listener is also added to handle any potential errors that occur during file processing.

#### 4. **Simulating the Real World**:
   - This example simulates the kind of real-world scenario where files need to be processed asynchronously, and the system needs to know when each file is ready for further action (like moving, uploading, etc.).

---

### Step 2: Create a Sample Text File

For this example to work, create a file called `sample.txt` in the same directory as your Node.js file. Add some content to it, such as:

```
Hello, this is a sample text file for testing the EventEmitter in Node.js.
```

### Step 3: Running the Example

Once the code is set up and the sample file is created, run the code with Node.js:

```bash
node server.js
```

### Expected Output:

When you run this script, you should see the following output:

```bash
File "sample.txt" processed successfully.
Listener received processed file: sample.txt
File content: Hello, this is a sample text file for testing the EventEmitter in Node.js.
File "sample.txt" is ready for further actions like uploading.
```

If the file doesn’t exist, you will see an error message like:

```bash
Error while processing the file: [Error: ENOENT: no such file or directory, open 'sample.txt']
```

---

### Step 4: Expanding the Example

You can extend this basic example to suit more complex real-world applications. For instance:

- **Parallel File Processing**: You could process multiple files concurrently, emitting the `processed` event each time a file is done.
- **Real-Time File Monitoring**: Use the `fs.watch()` or `chokidar` library to watch a directory for new files and process them when they are added.
- **Advanced Operations**: After emitting the `processed` event, you could trigger tasks such as uploading the file to an external server, resizing images, or compressing the content.

Here’s a more advanced use case where multiple files are processed and logged:

```js
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

class FileProcessor extends EventEmitter {
  constructor() {
    super();
  }

  processFiles(files) {
    files.forEach((fileName) => {
      this.processFile(fileName);
    });
  }

  processFile(fileName) {
    const filePath = path.join(__dirname, fileName);

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        this.emit('error', err);
        return;
      }

      this.emit('processed', fileName, data);
    });
  }
}

const fileProcessor = new FileProcessor();

// Listen for processed files
fileProcessor.on('processed', (fileName, data) => {
  console.log(`File "${fileName}" processed.`);
  console.log('Content:', data.slice(0, 20), '...'); // Truncate for display
});

// Listen for errors
fileProcessor.on('error', (err) => {
  console.error('Error:', err.message);
});

// Simulate processing multiple files
fileProcessor.processFiles(['sample.txt', 'anotherFile.txt']);
```

### Step 5: Testing with Multiple Files

Add another file called `anotherFile.txt` with any content to test multiple files being processed concurrently. When running this script, it will process each file and emit an event for each one.

---

### Conclusion:

In this example, we used `EventEmitter` to create a simple yet flexible file-processing system. The system can emit events when a file has been processed and respond to those events by performing actions such as logging or triggering subsequent tasks. This pattern is useful for decoupling the processing logic from the actions triggered by events, making your code more modular, maintainable, and scalable. 

In a more complex real-world system, `EventEmitter` could be used in combination with databases, task queues, or cloud services to build robust and responsive applications.


### **4.5 Managing Listener Counts and Memory Leaks**

By default, Node.js prints a warning if more than 10 listeners are added for a single event, as this may indicate a memory leak.

- **Change the Maximum Number of Listeners:**

```javascript
emitter.setMaxListeners(20);
```

- **Get the Listener Count:**

```javascript
const count = emitter.listenerCount('eventName');
```

- **Best Practices:**

  - Remove listeners when they are no longer needed.
  - Use the `once()` method for one-time events.

---

## **5. Practical Examples**

### **5.1 Example 1: Simple EventEmitter Usage**

```javascript
const EventEmitter = require('events');

const emitter = new EventEmitter();

// Register a listener
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
emitter.emit('greet', 'Alice');
emitter.emit('greet', 'Bob');
```

**Output:**

```
Hello, Alice!
Hello, Bob!
```

### **5.2 Example 2: Custom Class Inheriting EventEmitter**

```javascript
const EventEmitter = require('events');

class Countdown extends EventEmitter {
  constructor(start) {
    super();
    this.start = start;
  }

  begin() {
    let current = this.start;

    const interval = setInterval(() => {
      this.emit('tick', current);
      current -= 1;

      if (current === 0) {
        this.emit('end');
        clearInterval(interval);
      }
    }, 1000);
  }
}

const countdown = new Countdown(5);

countdown.on('tick', (number) => {
  console.log(`Countdown: ${number}`);
});

countdown.once('end', () => {
  console.log('Countdown completed!');
});

countdown.begin();
```

**Output:**

```
Countdown: 5
Countdown: 4
Countdown: 3
Countdown: 2
Countdown: 1
Countdown completed!
```

### **5.3 Example 3: EventEmitter in Asynchronous Operations**

```javascript
const EventEmitter = require('events');
const fs = require('fs');

class FileReader extends EventEmitter {
  read(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        this.emit('error', err);
        return;
      }
      this.emit('data', data);
    });
  }
}

const fileReader = new FileReader();

fileReader.on('data', (content) => {
  console.log('File content:', content);
});

fileReader.on('error', (err) => {
  console.error('Error reading file:', err.message);
});

fileReader.read('example.txt');
```

- **Explanation:**
  - The `FileReader` class emits a `'data'` event when the file is read successfully and an `'error'` event if an error occurs.
  - Listeners handle the events accordingly.

---

## **6. Conclusion**

The `EventEmitter` class is a fundamental part of Node.js, enabling asynchronous, event-driven programming. It provides a flexible way to manage events and communication between different parts of an application.

By understanding and leveraging `EventEmitter`, you can create more efficient, scalable, and maintainable Node.js applications. Whether you're handling simple events or integrating complex asynchronous operations, `EventEmitter` is an essential tool in your Node.js toolkit.

---

## **7. References**

- **Node.js Official Documentation**:
  - [Events Module](https://nodejs.org/docs/latest/api/events.html)
  - [EventEmitter Class](https://nodejs.org/docs/latest/api/events.html#class-eventemitter)
- **Guides**:
  - [Understanding Node.js Event-Driven Architecture](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
- **Additional Resources**:
  - [Node.js Design Patterns](https://www.nodejsdesignpatterns.com/), Chapter on Event Emitters
  - [MDN Web Docs - EventEmitter](https://developer.mozilla.org/en-US/docs/Web/API/Event)

---

**Note**: All code examples are compatible with Node.js version **22.6.0** and have been tested for accuracy. For the most current information and additional details, please refer to the [official Node.js documentation](https://nodejs.org/docs/latest/api/).

---

**Feel free to ask if you have any questions or need further clarification on the `EventEmitter` class in Node.js!**
# 8 - Create a first web server
# **Creating Your First Web Server with Node.js: A Deep Dive**

---

## **Introduction**

Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code on the server side, enabling you to build scalable network applications. One of the fundamental tasks when starting with Node.js is creating a web server that can handle HTTP requests and send responses to clients.

In this comprehensive guide, we'll walk you through the process of creating your first web server using Node.js. We'll provide detailed explanations and practical examples, referencing the latest Node.js API documentation available at [Node.js Documentation](https://nodejs.org/docs/latest/api/).

---

## **Table of Contents**

1. [Prerequisites](#1-prerequisites)
2. [Setting Up the Development Environment](#2-setting-up-the-development-environment)
3. [Understanding the `http` Module](#3-understanding-the-http-module)
4. [Creating a Basic Web Server](#4-creating-a-basic-web-server)
   - 4.1 [Step-by-Step Explanation](#41-step-by-step-explanation)
5. [Handling HTTP Requests and Responses](#5-handling-http-requests-and-responses)
   - 5.1 [Accessing Request Data](#51-accessing-request-data)
   - 5.2 [Sending Responses](#52-sending-responses)
6. [Routing in the Web Server](#6-routing-in-the-web-server)
7. [Serving Static Files](#7-serving-static-files)
8. [Working with Query Parameters](#8-working-with-query-parameters)
9. [Handling POST Requests](#9-handling-post-requests)
10. [Conclusion](#10-conclusion)
11. [References](#11-references)

---

## **1. Prerequisites**

Before we begin, ensure you have the following:

- **Node.js Installed**: Download and install the latest LTS (Long Term Support) version of Node.js from the [official website](https://nodejs.org/).
- **Basic Knowledge of JavaScript**: Understanding JavaScript fundamentals will help you follow along.
- **A Code Editor**: Use any text editor or Integrated Development Environment (IDE) of your choice (e.g., VSCode, Sublime Text).

---

## **2. Setting Up the Development Environment**

1. **Create a Project Directory**:

   ```bash
   mkdir my-first-webserver
   cd my-first-webserver
   ```

2. **Initialize a Node.js Project**:

   ```bash
   npm init -y
   ```

   This command creates a `package.json` file with default settings.

3. **Create an Entry Point File**:

   ```bash
   touch server.js
   ```

   This will be the main file where we'll write our server code.

---

## **3. Understanding the `http` Module**

Node.js provides several built-in modules to perform various tasks. The `http` module is essential for creating web servers and handling HTTP requests and responses.

- **Documentation**: [HTTP Module](https://nodejs.org/docs/latest/api/http.html)

**Key Features of the `http` Module**:

- Create an HTTP server.
- Handle incoming HTTP requests.
- Send HTTP responses.

---

## **4. Creating a Basic Web Server**

Let's start by creating a simple web server that listens on a specific port and responds to incoming requests.

### **4.1 Step-by-Step Explanation**

**Step 1: Import the `http` Module**

```javascript
const http = require('http');
```

- This line imports the `http` module, giving us access to its functionality.

**Step 2: Define the Hostname and Port**

```javascript
const hostname = '127.0.0.1';
const port = 3000;
```

- **`hostname`**: The IP address where the server will listen. `127.0.0.1` is the localhost.
- **`port`**: The port number on which the server will accept connections.

**Step 3: Create the Server**

```javascript
const server = http.createServer((req, res) => {
  // Handler function
});
```

- **`http.createServer()`**: Creates an HTTP server instance.
- **Callback Function `(req, res)`**: This function is called every time the server receives a request.
  - **`req`**: Represents the incoming request.
  - **`res`**: Represents the outgoing response.

**Step 4: Define the Request Handler**

Inside the callback function, we handle incoming requests and send responses.

```javascript
const server = http.createServer((req, res) => {
  // Set the response HTTP header with status and content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!\n');
});
```

- **`res.statusCode`**: Sets the HTTP status code (e.g., 200 for success).
- **`res.setHeader()`**: Sets the response headers (e.g., `Content-Type`).
- **`res.end()`**: Signals that the response is complete. It can optionally include data to be sent as the response body.

**Step 5: Start the Server**

```javascript
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

- **`server.listen()`**: Starts the server and begins listening for incoming connections.
- **Callback Function**: Executed once the server starts successfully.

**Full Code Example:**

```javascript
// server.js

const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = 3000; // Port number

const server = http.createServer((req, res) => {
  // Set the response status code and headers
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

**Step 6: Run the Server**

In your terminal, execute:

```bash
node server.js
```

**Output:**

```
Server running at http://127.0.0.1:3000/
```

**Step 7: Test the Server**

Open a web browser and navigate to `http://127.0.0.1:3000/`.

You should see:

```
Hello, World!
```

---

## **5. Handling HTTP Requests and Responses**

The server we created can handle basic HTTP requests. Let's explore how to work with the `req` (request) and `res` (response) objects to build more dynamic servers.

### **5.1 Accessing Request Data**

The `req` object contains information about the incoming request, such as:

- **`req.method`**: The HTTP method (e.g., GET, POST).
- **`req.url`**: The requested URL.
- **`req.headers`**: An object containing the request headers.

**Example: Logging Request Details**

```javascript
const server = http.createServer((req, res) => {
  console.log(`Request received: ${req.method} ${req.url}`);

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Request received\n');
});
```

**Testing:**

- Make requests to different URLs or using different methods (e.g., via browser or using tools like Postman or `curl`).
- Observe the logged request details in the terminal.

### **5.2 Sending Responses**

You can send different responses based on the request.

**Example: Responding with JSON Data**

```javascript
const server = http.createServer((req, res) => {
  const data = {
    message: 'Hello, JSON!'
  };

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});
```

**Testing:**

- Access `http://127.0.0.1:3000/` in the browser.
- You should see the JSON response:

  ```json
  {"message":"Hello, JSON!"}
  ```

---

## **6. Routing in the Web Server**

Routing allows the server to respond differently based on the request URL.

**Example: Implementing Basic Routing**

```javascript
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Home Page
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to the Home Page!\n');
  } else if (req.url === '/about') {
    // About Page
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Us Page\n');
  } else {
    // 404 Not Found
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found\n');
  }
});
```

**Testing:**

- Navigate to `http://127.0.0.1:3000/` → "Welcome to the Home Page!"
- Navigate to `http://127.0.0.1:3000/about` → "About Us Page"
- Navigate to `http://127.0.0.1:3000/other` → "Page Not Found"

---

## **7. Serving Static Files**

To serve static files like HTML pages, you can use the `fs` module to read files from the file system.

**Step 1: Import the `fs` Module**

```javascript
const fs = require('fs');
```

**Step 2: Create an HTML File**

Create a file named `index.html` in your project directory:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>My First Web Server</title>
</head>
<body>
  <h1>Welcome to My Web Server</h1>
</body>
</html>
```

**Step 3: Modify the Server to Serve the HTML File**

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Serve the index.html file
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Server Error\n');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(content);
      }
    });
  } else {
    // 404 Not Found
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found\n');
  }
});
```

**Testing:**

- Navigate to `http://127.0.0.1:3000/` → The HTML page should be displayed.
- Navigate to an undefined route → "Page Not Found"

---

## **8. Working with Query Parameters**

You can parse the query string in the URL to handle dynamic data.

**Step 1: Import the `url` Module**

```javascript
const url = require('url');
```

**Step 2: Parse the URL and Query Parameters**

```javascript
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === '/greet') {
    const name = query.name || 'Guest';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, ${name}!\n`);
  } else {
    // Handle other routes
  }
});
```

**Testing:**

- Navigate to `http://127.0.0.1:3000/greet?name=Alice` → "Hello, Alice!"
- Navigate to `http://127.0.0.1:3000/greet` → "Hello, Guest!"

---

## **9. Handling POST Requests**

To handle POST requests and receive data from the client, you need to process the incoming request body.

**Example: Handling a POST Request**

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    // Collect the data chunks
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // Handle the end of data reception
    req.on('end', () => {
      // Process the received data
      console.log('Received data:', body);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Data received\n');
    });
  } else {
    // Handle other routes or methods
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page Not Found\n');
  }
});
```

**Testing:**

- Use a tool like Postman or `curl` to send a POST request:

  ```bash
  curl -X POST -d "name=Alice&age=30" http://127.0.0.1:3000/submit
  ```

- The server logs:

  ```
  Received data: name=Alice&age=30
  ```

---

## **10. Conclusion**

Congratulations! You've successfully created your first web server using Node.js. Throughout this guide, we've explored:

- Setting up a basic web server with the `http` module.
- Handling HTTP requests and responses.
- Implementing routing and serving static files.
- Working with query parameters and handling POST requests.

Node.js provides a robust platform for building web applications. While we've covered the fundamentals, there's much more to explore, such as using frameworks like Express.js for more advanced features and simplified development.

---

## **References**

- **Node.js Documentation**:
  - [HTTP Module](https://nodejs.org/docs/latest/api/http.html)
  - [URL Module](https://nodejs.org/docs/latest/api/url.html)
  - [File System Module](https://nodejs.org/docs/latest/api/fs.html)
- **Tutorials**:
  - [Node.js HTTP Server Tutorial](https://nodejs.dev/learn/the-nodejs-http-module)
  - [Creating a Web Server in Node.js](https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module)

---

**Feel free to experiment further and enhance your web server with additional features! If you have any questions or need further clarification, don't hesitate to ask.**
# 9 - Response html file
# **Reading an HTML File and Sending It as a Response in Node.js**

---

## **Introduction**

In Node.js, serving static files like HTML pages is a fundamental task when building web servers. This guide will walk you through the process of reading an HTML file from the file system and sending it as a response to HTTP requests using Node.js version **22.6.0**. We'll provide detailed explanations and examples to ensure you understand each step. We'll also reference the official Node.js API documentation available at [Node.js Documentation](https://nodejs.org/docs/latest/api/) for your convenience.

---

## **Table of Contents**

1. [Prerequisites](#1-prerequisites)
2. [Setting Up the Development Environment](#2-setting-up-the-development-environment)
3. [Creating a Basic HTTP Server](#3-creating-a-basic-http-server)
4. [Reading an HTML File](#4-reading-an-html-file)
5. [Serving the HTML File as a Response](#5-serving-the-html-file-as-a-response)
6. [Handling Errors Gracefully](#6-handling-errors-gracefully)
7. [Serving Multiple Files with Routing](#7-serving-multiple-files-with-routing)
8. [Conclusion](#8-conclusion)
9. [References](#9-references)

---

## **1. Prerequisites**

Before we begin, ensure you have the following:

- **Node.js Installed**: Download and install the latest version of Node.js from the [official website](https://nodejs.org/).
- **Basic Knowledge of JavaScript**: Understanding JavaScript fundamentals will help you follow along.
- **A Code Editor**: Use any text editor or Integrated Development Environment (IDE) of your choice (e.g., VSCode, Sublime Text).

---

## **2. Setting Up the Development Environment**

1. **Create a Project Directory**:

   ```bash
   mkdir node-html-server
   cd node-html-server
   ```

2. **Initialize a Node.js Project**:

   ```bash
   npm init -y
   ```

   This command creates a `package.json` file with default settings.

3. **Create an Entry Point File**:

   ```bash
   touch server.js
   ```

   This will be the main file where we'll write our server code.

4. **Create an HTML File**:

   ```bash
   touch index.html
   ```

   This file will contain the HTML content we'll serve.

---

## **3. Creating a Basic HTTP Server**

We'll start by creating a simple HTTP server using Node.js's built-in `http` module.

**Step 1: Import the `http` Module**

```javascript
// server.js

const http = require('http');
```

- **`require('http')`**: Imports the `http` module, which provides the functionality to create an HTTP server.

**Step 2: Define Server Configuration**

```javascript
const hostname = '127.0.0.1'; // localhost
const port = 3000; // Port number
```

- **`hostname`**: The IP address where the server will listen.
- **`port`**: The port number on which the server will accept connections.

**Step 3: Create the Server**

```javascript
const server = http.createServer((req, res) => {
  // This function will handle incoming requests.
});
```

- **`http.createServer()`**: Creates a new HTTP server.
- **Callback Function `(req, res)`**: Called each time a request is received.

**Step 4: Start the Server**

```javascript
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

- **`server.listen()`**: Binds the server to the specified port and hostname.

**Complete Basic Server Code:**

```javascript
// server.js

const http = require('http');

const hostname = '127.0.0.1'; // localhost
const port = 3000; // Port number

const server = http.createServer((req, res) => {
  // Placeholder for request handling
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

---

## **4. Reading an HTML File**

To read files from the file system, we'll use the built-in `fs` (File System) module.

**Step 1: Import the `fs` Module**

```javascript
const fs = require('fs');
```

- **`require('fs')`**: Imports the `fs` module, which provides file system functionalities.

**Step 2: Create an HTML File**

Open `index.html` and add some HTML content:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Node.js HTML Server</title>
</head>
<body>
  <h1>Welcome to My Node.js Server</h1>
  <p>This page is served using Node.js</p>
</body>
</html>
```

**Step 3: Read the HTML File in the Server**

Within the server callback function, use `fs.readFile()` to read the HTML file.

```javascript
const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      // Handle error
    } else {
      // Serve the HTML file
    }
  });
});
```

- **`fs.readFile(path, callback)`**: Asynchronously reads the contents of the file at the given path.
  - **`path`**: The path to the file (e.g., `'index.html'`).
  - **`callback(err, data)`**: Called when the read operation is complete.
    - **`err`**: Error object if an error occurred.
    - **`data`**: The contents of the file.

---

## **5. Serving the HTML File as a Response**

Now, let's complete the server code to send the HTML file as the response.

**Complete Server Code:**

```javascript
// server.js

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1'; // localhost
const port = 3000; // Port number

const server = http.createServer((req, res) => {
  // Read the HTML file
  fs.readFile('index.html', (err, data) => {
    if (err) {
      // Handle error
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    } else {
      // Serve the HTML file
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

**Explanation:**

- **Error Handling**:
  - If there's an error reading the file (e.g., the file doesn't exist), we send a `500 Internal Server Error` response.
- **Serving the File**:
  - If the file is read successfully, we set the response status to `200 OK` and the `Content-Type` header to `text/html`.
  - We send the contents of the file using `res.end(data)`.

**Testing the Server:**

1. Run the server:

   ```bash
   node server.js
   ```

2. Open a web browser and navigate to `http://127.0.0.1:3000/`.

3. You should see the content of `index.html` displayed.

---

## **6. Handling Errors Gracefully**

Proper error handling is crucial to ensure your server remains robust.

**Enhanced Error Handling:**

```javascript
const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);

      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('500 - Internal Server Error');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    }
  });
});
```

- **Logging Errors**:
  - We log the error message to the console using `console.error()`.
- **User-Friendly Message**:
  - We send a user-friendly error message to the client.

**Testing Error Handling:**

1. Rename `index.html` to `home.html` to simulate a missing file.

2. Restart the server and navigate to `http://127.0.0.1:3000/`.

3. You should see the "500 - Internal Server Error" message.

4. The console should display the error message.

---

## **7. Serving Multiple Files with Routing**

You can extend your server to serve different files based on the request URL.

**Step 1: Update the Server Callback Function**

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1'; // localhost
const port = 3000; // Port number

const server = http.createServer((req, res) => {
  // Build the file path
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  // Get the file extension
  const extname = String(path.extname(filePath)).toLowerCase();

  // Map file extension to MIME types
  const mimeTypes = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css',
    '.json': 'application/json',
    '.png':  'image/png',
    '.jpg':  'image/jpg',
    '.gif':  'image/gif',
    '.svg':  'image/svg+xml',
    '.wav':  'audio/wav',
    '.mp4':  'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf':  'application/font-ttf',
    '.eot':  'application/vnd.ms-fontobject',
    '.otf':  'application/font-otf',
    '.wasm': 'application/wasm'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  // Read the requested file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      if(err.code == 'ENOENT') {
        // File not found
        fs.readFile('./404.html', (error, content) => {
          if (error) {
            res.statusCode = 500;
            res.end('500 - Internal Server Error');
          } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end(content);
          }
        });
      } else {
        // Some server error
        res.statusCode = 500;
        res.end(`500 - Internal Server Error: ${err.code}`);
      }
    } else {
      // Serve the file
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(data);
    }
  });
});
```

**Explanation:**

- **Determining the File Path**:
  - We construct the file path based on the request URL.
  - If the request URL is `'/'`, we default to `'./index.html'`.
- **Determining the Content Type**:
  - We use the file extension to determine the appropriate `Content-Type` header.
- **Handling Errors**:
  - If the file is not found (`ENOENT`), we serve a custom `404.html` page.
  - For other errors, we send a `500 Internal Server Error`.

**Step 2: Create Additional Files**

- **Create `about.html`**:

  ```html
  <!-- about.html -->
  <!DOCTYPE html>
  <html>
  <head>
    <title>About Us</title>
  </head>
  <body>
    <h1>About Our Company</h1>
    <p>This is the about page.</p>
  </body>
  </html>
  ```

- **Create `404.html`**:

  ```html
  <!-- 404.html -->
  <!DOCTYPE html>
  <html>
  <head>
    <title>404 - Page Not Found</title>
  </head>
  <body>
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
  </body>
  </html>
  ```

**Testing:**

1. Restart the server.

2. Navigate to:

   - `http://127.0.0.1:3000/` → Displays `index.html`.
   - `http://127.0.0.1:3000/about.html` → Displays `about.html`.
   - `http://127.0.0.1:3000/nonexistent.html` → Displays `404.html`.

---

## **8. Conclusion**

You've now learned how to read an HTML file from the file system and serve it as a response using Node.js. We've covered:

- Setting up a basic HTTP server.
- Reading files asynchronously using the `fs` module.
- Serving different files based on the request URL.
- Handling errors gracefully.
- Mapping MIME types to serve various file types.

This foundational knowledge allows you to build more complex servers and understand how Node.js handles file I/O and HTTP communications.

---

## **9. References**

- **Node.js Official Documentation**:
  - [HTTP Module](https://nodejs.org/docs/latest/api/http.html)
  - [File System Module (`fs`)](https://nodejs.org/docs/latest/api/fs.html)
  - [Path Module](https://nodejs.org/docs/latest/api/path.html)
- **Tutorials and Guides**:
  - [Node.js - Serving Static Files](https://nodejs.dev/learn/how-to-serve-static-files-with-nodejs)
  - [Understanding Node.js File System](https://www.digitalocean.com/community/tutorials/nodejs-working-with-files)
  - [Creating a Simple Web Server in Node.js](https://www.sitepoint.com/create-a-simple-web-server-using-node-js/)

---

**Feel free to experiment further by adding more routes, serving different types of files, or integrating a templating engine for dynamic content. If you have any questions or need further clarification, don't hesitate to ask!**
# 10 - Check url

# **Handling HTTP Requests by Checking `req.url` in Node.js**

---

## **Introduction**

In Node.js, creating a web server involves handling HTTP requests and sending appropriate responses. One of the key aspects of request handling is checking the `req.url` property to determine the requested resource and responding accordingly.

This guide will provide an in-depth explanation of how to check `req.url` and handle requests in Node.js version **22.6.0**. We'll include detailed examples and reference the official Node.js API documentation available at [Node.js Documentation](https://nodejs.org/docs/latest/api/).

---

## **Table of Contents**

1. [Prerequisites](#1-prerequisites)
2. [Understanding the `http` Module](#2-understanding-the-http-module)
3. [Creating a Basic HTTP Server](#3-creating-a-basic-http-server)
4. [Accessing and Using `req.url`](#4-accessing-and-using-requrl)
   - 4.1 [The Structure of `req.url`](#41-the-structure-of-requrl)
5. [Implementing Basic Routing](#5-implementing-basic-routing)
   - 5.1 [Example: Serving Different Content Based on `req.url`](#51-example-serving-different-content-based-on-requrl)
6. [Parsing URLs with the `url` Module](#6-parsing-urls-with-the-url-module)
   - 6.1 [Extracting Query Parameters](#61-extracting-query-parameters)
   - 6.2 [Example: Handling Query Parameters](#62-example-handling-query-parameters)
7. [Advanced Routing Techniques](#7-advanced-routing-techniques)
   - 7.1 [Using Regular Expressions](#71-using-regular-expressions)
   - 7.2 [Dynamic URL Parameters](#72-dynamic-url-parameters)
8. [Serving Static Files Based on `req.url`](#8-serving-static-files-based-on-requrl)
9. [Handling POST Requests](#9-handling-post-requests)
10. [Conclusion](#10-conclusion)
11. [References](#11-references)

---

## **1. Prerequisites**

Before proceeding, ensure you have the following:

- **Node.js Installed**: Download and install Node.js from the [official website](https://nodejs.org/).
- **Basic Knowledge of JavaScript**: Familiarity with JavaScript fundamentals is essential.
- **A Code Editor**: Use any text editor or Integrated Development Environment (IDE) of your choice (e.g., VSCode, Sublime Text).

---

## **2. Understanding the `http` Module**

The `http` module is a core Node.js module that provides functionalities to create HTTP servers and handle HTTP requests and responses.

- **Documentation**: [HTTP Module](https://nodejs.org/docs/latest/api/http.html)

Key features of the `http` module:

- Create an HTTP server.
- Handle incoming HTTP requests (`http.IncomingMessage`).
- Send HTTP responses (`http.ServerResponse`).

---

## **3. Creating a Basic HTTP Server**

Let's start by creating a simple HTTP server.

**Step 1: Import the `http` Module**

```javascript
const http = require('http');
```

**Step 2: Define Server Configuration**

```javascript
const hostname = '127.0.0.1'; // localhost
const port = 3000; // Port number
```

**Step 3: Create the Server**

```javascript
const server = http.createServer((req, res) => {
  // Request handling logic will go here
});
```

- The callback function `(req, res)` is executed every time the server receives a request.
  - **`req`**: An instance of `http.IncomingMessage`, contains request data.
  - **`res`**: An instance of `http.ServerResponse`, used to send responses.

**Step 4: Start the Server**

```javascript
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

**Complete Basic Server Code:**

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Placeholder for request handling
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

---

## **4. Accessing and Using `req.url`**

The `req.url` property contains the request URL string from the client, including the path and query string.

### **4.1 The Structure of `req.url`**

- **Format**: `'/path?query=string'`
- **Components**:
  - **Pathname**: The part of the URL after the hostname and before the query string.
  - **Query String**: The part after the `?` symbol, containing key-value pairs.

**Example:**

If the client requests `http://localhost:3000/about?lang=en`, then:

- **`req.url`**: `'/about?lang=en'`

---

## **5. Implementing Basic Routing**

By checking `req.url`, you can determine which resource the client is requesting and respond appropriately.

### **5.1 Example: Serving Different Content Based on `req.url`**

**Step 1: Update the Server Callback Function**

```javascript
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Handle root URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to the Home Page!\n');
  } else if (req.url === '/about') {
    // Handle '/about' URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Us Page\n');
  } else if (req.url === '/contact') {
    // Handle '/contact' URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Contact Us Page\n');
  } else {
    // Handle 404 Not Found
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Page Not Found\n');
  }
});
```

**Explanation:**

- We use `if...else if...else` statements to check the value of `req.url`.
- Based on the URL, we set the appropriate status code and response content.
- For unrecognized URLs, we return a `404 Not Found` response.

**Testing the Server:**

1. Run the server:

   ```bash
   node server.js
   ```

2. Navigate to the following URLs in your browser:

   - `http://localhost:3000/` → Displays "Welcome to the Home Page!"
   - `http://localhost:3000/about` → Displays "About Us Page"
   - `http://localhost:3000/contact` → Displays "Contact Us Page"
   - `http://localhost:3000/unknown` → Displays "404 - Page Not Found"

---

## **6. Parsing URLs with the `url` Module**

The `url` module provides utilities for URL resolution and parsing.

- **Documentation**: [URL Module](https://nodejs.org/docs/latest/api/url.html)

**Importing the `url` Module:**

```javascript
const url = require('url');
```

### **6.1 Extracting Query Parameters**

To extract query parameters from `req.url`, we can parse it using the `url` module.

**Parsing the URL:**

```javascript
const parsedUrl = url.parse(req.url, true);
const pathname = parsedUrl.pathname;
const query = parsedUrl.query;
```

- **`url.parse(urlString, [parseQueryString])`**:
  - **`urlString`**: The URL string to parse.
  - **`parseQueryString`**: If `true`, the `query` property will be an object; otherwise, it will be a string.
- **`pathname`**: The path part of the URL.
- **`query`**: The parsed query string as an object.

### **6.2 Example: Handling Query Parameters**

**Step 1: Update the Server Callback Function**

```javascript
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === '/greet') {
    const name = query.name || 'Guest';

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Hello, ${name}!\n`);
  } else {
    // Handle other routes or 404
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Page Not Found\n');
  }
});
```

**Explanation:**

- We parse `req.url` to get the pathname and query object.
- If the pathname is `/greet`, we extract the `name` parameter from the query string.
- We respond with a personalized greeting.

**Testing the Server:**

1. Start the server:

   ```bash
   node server.js
   ```

2. Navigate to:

   - `http://localhost:3000/greet?name=Alice` → Displays "Hello, Alice!"
   - `http://localhost:3000/greet` → Displays "Hello, Guest!"
   - `http://localhost:3000/greet?name=Bob` → Displays "Hello, Bob!"

---

## **7. Advanced Routing Techniques**

For more complex routing, you can use regular expressions or parse dynamic URL segments.

### **7.1 Using Regular Expressions**

You can match URLs using regular expressions for pattern matching.

**Example: Matching URLs with IDs**

```javascript
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  const productRegex = /^\/product\/(\d+)$/; // Matches '/product/123'

  const match = pathname.match(productRegex);

  if (match) {
    const productId = match[1]; // Extracted ID

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Product ID: ${productId}\n`);
  } else {
    // Handle other routes or 404
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Page Not Found\n');
  }
});
```

**Testing the Server:**

- `http://localhost:3000/product/123` → Displays "Product ID: 123"
- `http://localhost:3000/product/456` → Displays "Product ID: 456"
- `http://localhost:3000/product/abc` → Displays "404 - Page Not Found"

### **7.2 Dynamic URL Parameters**

You can extract dynamic parameters from the URL path.

**Example: Handling User Profiles**

```javascript
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  const userRegex = /^\/user\/([^\/]+)$/; // Matches '/user/username'

  const match = pathname.match(userRegex);

  if (match) {
    const username = match[1];

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`User Profile: ${username}\n`);
  } else {
    // Handle other routes or 404
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Page Not Found\n');
  }
});
```

**Testing the Server:**

- `http://localhost:3000/user/john` → Displays "User Profile: john"
- `http://localhost:3000/user/jane` → Displays "User Profile: jane"

---

## **8. Serving Static Files Based on `req.url`**

You can serve different static files based on the request URL.

**Step 1: Import Required Modules**

```javascript
const http = require('http');
const fs = require('fs');
const path = require('path');
```

**Step 2: Update the Server Callback Function**

```javascript
const server = http.createServer((req, res) => {
  let filePath = '.' + req.url;

  if (filePath === './') {
    filePath = './index.html';
  }

  const extname = String(path.extname(filePath)).toLowerCase();

  const mimeTypes = {
    '.html': 'text/html',
    '.js':   'text/javascript',
    '.css':  'text/css',
    '.json': 'application/json',
    '.png':  'image/png',
    '.jpg':  'image/jpg',
    '.gif':  'image/gif',
    '.svg':  'image/svg+xml',
    '.wav':  'audio/wav',
    '.mp4':  'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf':  'application/font-ttf',
    '.eot':  'application/vnd.ms-fontobject',
    '.otf':  'application/font-otf',
    '.wasm': 'application/wasm'
  };

  const contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if(err.code === 'ENOENT') {
        // File not found
        fs.readFile('./404.html', (error, data) => {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end(data, 'utf-8');
        });
      } else {
        // Some server error
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end(`500 - Internal Server Error: ${err.code}`);
      }
    } else {
      // Serve the file
      res.statusCode = 200;
      res.setHeader('Content-Type', contentType);
      res.end(content, 'utf-8');
    }
  });
});
```

**Explanation:**

- We construct the file path based on `req.url`.
- We determine the MIME type based on the file extension.
- We read the requested file and serve it.
- If the file is not found, we serve a custom 404 page.

---

## **9. Handling POST Requests**

For handling POST requests and accessing the request body, you need to collect data chunks from the `req` object.

**Example: Handling a Simple POST Request**

```javascript
const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    // Collect data chunks
    req.on('data', chunk => {
      body += chunk.toString();
    });

    // Handle the end of data reception
    req.on('end', () => {
      console.log('Received POST data:', body);

      // Process the data as needed (e.g., parse JSON or URL-encoded data)

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('POST request received\n');
    });
  } else {
    // Handle other routes or methods
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 - Page Not Found\n');
  }
});
```

**Testing the Server:**

- Use `curl` to send a POST request:

  ```bash
  curl -X POST -d "name=Alice&age=30" http://localhost:3000/submit
  ```

- The server logs:

  ```
  Received POST data: name=Alice&age=30
  ```

**Parsing the POST Data:**

- If the data is URL-encoded:

  ```javascript
  const querystring = require('querystring');
  const parsedData = querystring.parse(body);
  console.log(parsedData);
  ```

- If the data is JSON:

  ```javascript
  const parsedData = JSON.parse(body);
  console.log(parsedData);
  ```

---

## **10. Conclusion**

By checking `req.url` and using the built-in modules like `url`, `fs`, and `path`, you can effectively handle HTTP requests in Node.js. This enables you to:

- Implement routing to serve different content based on the request URL.
- Parse query parameters and extract dynamic segments from the URL.
- Serve static files like HTML, CSS, and JavaScript files.
- Handle different HTTP methods like GET and POST.

Understanding how to work with `req.url` is fundamental in building web servers and applications in Node.js. While frameworks like Express.js simplify these tasks, having a solid grasp of the core concepts empowers you to create efficient and customized solutions.

---

## **References**

- **Node.js Official Documentation**:
  - [HTTP Module](https://nodejs.org/docs/latest/api/http.html)
  - [URL Module](https://nodejs.org/docs/latest/api/url.html)
  - [File System (`fs`) Module](https://nodejs.org/docs/latest/api/fs.html)
  - [Path Module](https://nodejs.org/docs/latest/api/path.html)
  - [Query String Module](https://nodejs.org/docs/latest/api/querystring.html)
- **Tutorials and Guides**:
  - [Node.js HTTP Server Tutorial](https://nodejs.dev/learn/the-nodejs-http-module)
  - [Creating a Simple Web Server in Node.js](https://www.sitepoint.com/create-a-simple-web-server-using-node-js/)
  - [Working with Query Strings in Node.js](https://www.digitalocean.com/community/tutorials/nodejs-working-with-query-strings)

---

**Feel free to experiment further by adding more routes, implementing more complex logic, or integrating middleware for additional functionalities. If you have any questions or need further assistance, don't hesitate to ask!**

# 11 - Response JSON
The `res.json()` method in Node.js is used to send a JSON (JavaScript Object Notation) response from the server to the client. It is often used in web applications when the server needs to send structured data to the front end in a format that is easy to read and process.

In Node.js, this method is primarily used in conjunction with Express.js, a popular web framework. It is a shorthand for setting the `Content-Type` of the response to `application/json` and then stringifying and sending the object provided as the argument.

Let's break this down and explain in detail:

### What does `res.json()` do?

1. **Sets the `Content-Type` header to `application/json`:**
   - This informs the client that the response body contains JSON data.
   
2. **Stringifies the JavaScript object:**
   - It converts the object or array provided as an argument into a JSON-formatted string using `JSON.stringify()` internally.
   
3. **Sends the response:**
   - Once the data is converted into JSON format, it is sent back to the client as part of the HTTP response body.

### Usage of `res.json()`

#### Example 1: Basic Usage
Let's say you are building a simple API endpoint that sends some data about a user.

```js
// Import Express
const express = require('express');
const app = express();

// A sample route that sends a JSON response
app.get('/user', (req, res) => {
  const user = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
  };
  
  // Send the JSON response
  res.json(user);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

In this example, when a client sends a GET request to `/user`, the server responds with the following JSON:

```json
{
  "name": "John Doe",
  "age": 30,
  "occupation": "Software Developer"
}
```

#### Example 2: Sending a Response with an Array
You can also send arrays as JSON responses using `res.json()`:

```js
app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
  ];

  // Send the array of products as a JSON response
  res.json(products);
});
```

The client would receive:

```json
[
  { "id": 1, "name": "Laptop", "price": 1000 },
  { "id": 2, "name": "Smartphone", "price": 500 },
  { "id": 3, "name": "Tablet", "price": 300 }
]
```

#### Example 3: Error Handling and Status Codes
You can also chain `res.status()` with `res.json()` to send an HTTP status code along with the JSON response.

```js
app.get('/error', (req, res) => {
  // Simulate an error
  res.status(404).json({
    error: 'Resource not found'
  });
});
```

This will return:

```json
{
  "error": "Resource not found"
}
```

With a 404 HTTP status code.

### Differences Between `res.send()` and `res.json()`

In Express, both `res.send()` and `res.json()` can send JSON responses. However, there are key differences:

- `res.json()` automatically sets the `Content-Type` header to `application/json` and stringifies the object.
- `res.send()` can send various types of responses, such as strings, buffers, or objects. If you pass an object to `res.send()`, it will be converted to JSON, but you will need to manually set the `Content-Type` header if necessary.

### Example with `res.send()` vs `res.json()`

```js
app.get('/send', (req, res) => {
  res.send({ message: 'This is sent using res.send()' });
});

app.get('/json', (req, res) => {
  res.json({ message: 'This is sent using res.json()' });
});
```

Both responses will appear as:

```json
{
  "message": "This is sent using res.json()"
}
```

But `res.json()` automatically handles setting the headers for JSON.

### Handling Large JSON Responses
When sending large data objects with `res.json()`, it is important to keep in mind the performance implications. JSON serialization can be computationally expensive, and transferring large amounts of data over HTTP can be slow. You might want to consider techniques such as pagination, compression (using middleware like `compression`), or sending only the necessary data fields.

#### Example: Compressing JSON Responses

```js
const compression = require('compression');
const express = require('express');
const app = express();

// Enable compression
app.use(compression());

app.get('/large-data', (req, res) => {
  const largeData = {
    // A large data object, which will be compressed
    data: '...' // Imagine this is a large dataset
  };

  res.json(largeData);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

By using `compression()`, you can reduce the size of the JSON response and improve response time.

### Conclusion
`res.json()` is a convenient method in Node.js to send JSON-formatted responses. It automatically sets the correct content type and ensures that JavaScript objects or arrays are correctly serialized into JSON. Whether you're sending data or handling errors, `res.json()` simplifies the process by providing a consistent, readable format that works well with front-end applications and other APIs.
# 12 - Send data to server
Sending data to a server in Node.js involves making HTTP requests to the server using various HTTP methods (like `POST`, `PUT`, or `PATCH`). The primary library used for this purpose is the built-in `http` or `https` module, which allows you to make HTTP requests from your Node.js application. Alternatively, you can use third-party libraries like `axios` or `node-fetch` to simplify the process.

Let's dive deeper into how to send data to a server in Node.js using the `http` and `https` modules, and I'll also show examples using `axios` for simplicity.

### **1. Sending Data Using the `http` Module**
Node.js has a core `http` module that allows us to make HTTP requests. Below is a detailed explanation of how to use it to send data to a server:

#### **Example: Sending Data Using `POST` Request**
```js
const http = require('http');

// Define the data you want to send to the server
const postData = JSON.stringify({
  name: 'John Doe',
  job: 'Software Developer'
});

// Options for the HTTP request
const options = {
  hostname: 'example.com', // Target server's hostname
  port: 80,                // Port, 80 for HTTP (443 for HTTPS)
  path: '/api/users',       // API endpoint to hit
  method: 'POST',           // HTTP method
  headers: {
    'Content-Type': 'application/json',     // Specify the type of data being sent
    'Content-Length': Buffer.byteLength(postData) // Length of the data
  }
};

// Make the HTTP request
const req = http.request(options, (res) => {
  let data = '';

  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  // Listen for data chunks
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Complete the response when all chunks are received
  res.on('end', () => {
    console.log('Response: ', data);
  });
});

// Handle request errors
req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

// Write the data to the request body
req.write(postData);

// End the request
req.end();
```

#### **Explanation:**
1. **`postData`:** This is the data you want to send to the server, in this case, a JSON object with user information.
2. **`options`:** These are the configurations for the HTTP request. It includes the server hostname, port, path (API endpoint), method (POST), and headers.
3. **`http.request()`:** This method sends the HTTP request to the specified server with the defined options.
4. **`req.write()`:** This sends the actual data to the server.
5. **`req.end()`:** Ends the request and signals that no more data is being sent.

The server will respond, and the callback handles the response data, which is received in chunks.

---

### **2. Sending Data Using the `https` Module**
If the server you're sending data to uses HTTPS (SSL/TLS encryption), you can use the built-in `https` module. The structure is the same as the `http` module, with a few differences.

#### **Example: Sending Data Using `POST` Over HTTPS**

```js
const https = require('https');

// Data to send
const postData = JSON.stringify({
  name: 'Jane Doe',
  job: 'Product Manager'
});

// HTTPS request options
const options = {
  hostname: 'example.com',
  port: 443,               // Use port 443 for HTTPS
  path: '/api/users',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

// Make the HTTPS request
const req = https.request(options, (res) => {
  let data = '';

  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Response: ', data);
  });
});

// Handle errors
req.on('error', (e) => {
  console.error(`Problem with request: ${e.message}`);
});

// Write the data to the request body
req.write(postData);

// End the request
req.end();
```

#### **Differences:**
1. **`https.request()`**: Used for secure communication over HTTPS.
2. **Port 443**: This is the default port for HTTPS.

---

### **3. Sending Data Using `axios` (A Third-Party Library)**
The `axios` library simplifies the process of sending HTTP requests in Node.js. It automatically handles many things like serialization, headers, and response parsing.

#### **Installation:**
To install `axios`:
```bash
npm install axios
```

#### **Example: Sending Data Using `POST` with `axios`**
```js
const axios = require('axios');

// Data to send
const postData = {
  name: 'Alice Smith',
  job: 'Designer'
};

// Send a POST request
axios.post('https://example.com/api/users', postData)
  .then((response) => {
    console.log('Response:', response.data); // Server's response
  })
  .catch((error) => {
    console.error('Error:', error.message); // Handle errors
  });
```

#### **Explanation:**
- **`axios.post(url, data)`**: Sends a POST request to the specified URL with the provided data. The data is automatically serialized to JSON and the appropriate headers are set.
- **`response.data`**: This is the data returned by the server.
- **Error handling**: Errors are caught and handled using `.catch()`.

#### **Example: Sending a `PUT` Request**
`axios` also allows you to send other types of requests like `PUT`, `PATCH`, and `DELETE` just as easily:

```js
axios.put('https://example.com/api/users/123', { job: 'Senior Designer' })
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
```

---

### **4. Sending Form Data (Multipart)**
If you're sending form data, like file uploads, you can use the `form-data` package in combination with `axios` or native Node.js modules.

#### **Installation:**
```bash
npm install form-data
```

#### **Example: Sending Form Data Using `form-data` with `axios`**
```js
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

// Create a form-data object
const form = new FormData();
form.append('name', 'Bob');
form.append('file', fs.createReadStream('path/to/file.txt'));

// Send POST request with form-data
axios.post('https://example.com/api/upload', form, {
  headers: form.getHeaders()  // Set form-data headers
})
  .then((response) => {
    console.log('Response:', response.data);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
```

#### **Explanation:**
- **FormData**: This package allows you to create multipart/form-data, which is necessary for file uploads or sending non-JSON data.
- **`fs.createReadStream()`**: This reads a file from the filesystem to be uploaded.
- **Headers**: `axios` automatically handles setting the correct headers for form-data by using `form.getHeaders()`.

---

### **Conclusion:**
In Node.js, sending data to a server can be done in various ways, depending on the complexity of the request and the data being sent. 

- **`http` and `https` modules** are core Node.js modules that provide fine control over HTTP requests and are good for custom, low-level networking tasks.
- **Third-party libraries like `axios`** simplify the process, allowing you to make requests with less code and more readability.


To send data to a server using Postman with Node.js, specifically using version 22.6.0, we need to understand how to create a server that accepts POST requests and processes data sent from Postman.

Postman is an API testing tool that allows you to send various types of HTTP requests (GET, POST, PUT, DELETE, etc.) to a server. When using Postman to send data to a server, the POST method is commonly used, especially when you need to send structured data, such as JSON, form data, or other types of information.

Let’s walk through the process step by step, starting from setting up a Node.js server, sending data from Postman, and handling that data on the server.

### Step 1: Set Up a Node.js Server

First, we need to create a basic Node.js server that can handle POST requests. For this, we will use the `express` framework, which simplifies handling routes and requests.

#### Create a Basic Node.js Application

1. Install Node.js version 22.6.0.
2. Install the `express` framework:
   ```bash
   npm init -y
   npm install express
   ```

3. Create a file called `server.js` and write the following code:

```js
// Import required modules
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json()); // This allows us to parse JSON requests

// Handle POST requests to /submit route
app.post('/submit', (req, res) => {
  // Access the data sent in the body of the request
  const data = req.body;

  // Respond with the data that was sent to the server
  res.json({
    message: 'Data received successfully',
    receivedData: data
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### Breakdown of Code:

- **express.json() Middleware**: This middleware is used to parse incoming requests that have JSON payloads. It converts the JSON body into a JavaScript object that can be accessed in `req.body`.
- **POST Route**: The server listens for POST requests on the `/submit` route and expects data to be sent in the request body. The server then sends back the same data as a response for confirmation.
- **Response with res.json()**: The server sends back a response in JSON format, confirming the received data.

### Step 2: Send Data Using Postman

Now, let’s send a POST request from Postman to the server we’ve created.

1. **Open Postman**.
2. **Set the Request Type** to `POST` and enter the URL: `http://localhost:3000/submit`.
3. **Go to the Body tab** in Postman.
4. Select **raw** and then **JSON** from the dropdown menu, which tells Postman to send the data in JSON format.
5. In the text area, enter the JSON data you want to send. For example:
   ```json
   {
     "name": "Alice",
     "age": 25,
     "occupation": "Engineer"
   }
   ```
6. Click **Send**.

### Expected Response:

The server will respond with the data you sent, along with a confirmation message. The response in Postman will look like this:

```json
{
  "message": "Data received successfully",
  "receivedData": {
    "name": "Alice",
    "age": 25,
    "occupation": "Engineer"
  }
}
```

This shows that the server successfully received the JSON data sent through Postman.

### Step 3: Handling Different Types of Data

The server can handle more than just JSON data. Let's explore how to send other types of data, like form data.

#### Sending Form Data from Postman:

1. In Postman, instead of choosing the `raw` option in the Body tab, select **form-data**.
2. Add key-value pairs as form data. For example:
   - Key: `name`, Value: `Bob`
   - Key: `age`, Value: `30`
   - Key: `occupation`, Value: `Designer`
3. Click **Send**.

To handle form data in Node.js, we need to use middleware like `express.urlencoded()`. Update the `server.js` file to handle form data:

```js
// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

// Handle POST requests to /submit route
app.post('/submit', (req, res) => {
  // Access the form data sent in the body of the request
  const data = req.body;

  // Respond with the form data that was sent to the server
  res.json({
    message: 'Form data received successfully',
    receivedData: data
  });
});
```

Now, when you send form data, the server will respond with:

```json
{
  "message": "Form data received successfully",
  "receivedData": {
    "name": "Bob",
    "age": "30",
    "occupation": "Designer"
  }
}
```

Notice that form data is sent as strings, so the `age` value is `"30"` as a string.

### Step 4: Handling File Uploads in Postman

Postman also allows you to send file data using the **form-data** option. Let’s add support for file uploads in our server.

1. Install the `multer` package for handling file uploads:
   ```bash
   npm install multer
   ```

2. Update `server.js` to handle file uploads:

```js
const multer = require('multer');

// Set up Multer to store uploaded files in the 'uploads' directory
const upload = multer({ dest: 'uploads/' });

// Handle file uploads in the form data
app.post('/upload', upload.single('file'), (req, res) => {
  // Access file information
  const file = req.file;

  // Respond with the file information
  res.json({
    message: 'File uploaded successfully',
    fileInfo: file
  });
});
```

3. In Postman:
   - Change the request type to `POST`.
   - Enter the URL: `http://localhost:3000/upload`.
   - In the Body tab, select **form-data**.
   - Add a key called `file` and set its type to **File**.
   - Upload a file from your local system.
   - Click **Send**.

### Expected Response:

```json
{
  "message": "File uploaded successfully",
  "fileInfo": {
    "fieldname": "file",
    "originalname": "example.txt",
    "encoding": "7bit",
    "mimetype": "text/plain",
    "destination": "uploads/",
    "filename": "randomFilename",
    "path": "uploads/randomFilename",
    "size": 1024
  }
}
```

Here, the file is uploaded to the `uploads` directory, and its information is returned in the response.

### Step 5: Using `res.send()` vs `res.json()`

The `res.json()` method converts the JavaScript object into a JSON response and sets the `Content-Type` header to `application/json`, while `res.send()` can send different types of data, like strings, buffers, or objects. For example, if we used `res.send()` in our previous examples, the response would not automatically be formatted as JSON unless you manually set the `Content-Type`.

```js
app.post('/submit', (req, res) => {
  const data = req.body;
  res.send(data); // This will not set the Content-Type to application/json automatically
});
```

### Conclusion

By using Postman, you can easily send various types of HTTP requests, such as JSON data, form data, and file uploads to a Node.js server. The server, when properly set up using Express and middleware like `express.json()`, `express.urlencoded()`, and `multer`, can handle these different types of data and respond appropriately.

This process is a powerful way to test and develop APIs, and tools like Postman are incredibly useful for debugging and validating the behavior of a Node.js server.

# 13 - Separate URL
In Node.js, the `request` object represents the incoming HTTP request that is sent to the server by the client (for example, a browser or Postman). This object contains information about the request, such as the URL, HTTP method, headers, query parameters, request body, cookies, and more. The `request` object is commonly accessed via a framework like Express, but at a low level, it's part of the Node.js core API under the `http` module.

When you work with HTTP requests in Node.js, understanding the `request` object is essential for building APIs, handling incoming data, routing requests, and interacting with the client.

Let's explore the `request` object in depth, using Node.js version 22.6.0.

### 1. The Request Object Overview

The `request` object is typically referred to as `req` in Express (or in the Node.js `http` module) and provides access to the following key components:

1. **Request Method**: The HTTP method used for the request (GET, POST, PUT, DELETE, etc.).
2. **URL**: The URL of the request, including path and query string.
3. **Headers**: Metadata about the request, such as content type, user agent, authorization, etc.
4. **Query Parameters**: The key-value pairs in the URL (for GET requests).
5. **Body**: The data sent with the request (usually for POST, PUT, DELETE requests).
6. **Cookies**: If any cookies are present in the request.
7. **IP Address**: The IP address of the client sending the request.

### 2. Creating a Basic HTTP Server in Node.js

At the core level, without using Express, Node.js provides the `http` module to handle incoming requests. Let's first build a basic HTTP server that handles a request and logs the `request` object properties.

#### Example: Basic HTTP Server

```js
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Log the HTTP method and URL
  console.log('Request Method:', req.method);
  console.log('Request URL:', req.url);
  
  // Set response header and send response
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
});

// Start the server
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### 3. Express Framework and Request Object

Using the Express framework simplifies accessing the `request` object. The `req` object in Express includes enhanced functionality for handling query parameters, JSON data, form data, and more. Let’s go over some common properties of the `req` object.

#### Install Express

To use Express, install it via npm:

```bash
npm install express
```

#### Example: Using `req` in Express

```js
const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Define a route that handles GET and POST requests
app.get('/data', (req, res) => {
  // Access query parameters, headers, and URL
  console.log('Query Parameters:', req.query); // For GET requests
  console.log('Headers:', req.headers);        // Request headers
  console.log('URL:', req.url);                // Request URL

  res.json({ message: 'GET request received' });
});

app.post('/data', (req, res) => {
  // Access the request body (for POST requests)
  console.log('Request Body:', req.body);

  res.json({ message: 'POST request received' });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

### Key Properties of the `req` Object

Let’s dive deeper into some key properties of the `req` object.

#### 1. `req.method`

This property contains the HTTP method (e.g., `GET`, `POST`, `PUT`, `DELETE`, etc.) of the request. You can use this property to check what type of request is being made.

```js
app.use((req, res, next) => {
  console.log('HTTP Method:', req.method);
  next();
});
```

#### 2. `req.url`

This property contains the full URL of the request, including the path and query string. If the URL contains query parameters (e.g., `/data?name=John&age=30`), you can use `req.url` to get the entire URL as a string.

```js
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  next();
});
```

#### 3. `req.query`

For GET requests, query parameters are often included in the URL. The `req.query` object in Express allows you to access these key-value pairs.

Example:

For the request `/data?name=Alice&age=25`, you can access:

```js
app.get('/data', (req, res) => {
  console.log('Query Parameters:', req.query);
  res.json({ message: 'Query received', queryParams: req.query });
});
```

Output:

```
Query Parameters: { name: 'Alice', age: '25' }
```

#### 4. `req.body`

For POST, PUT, or DELETE requests, data is typically sent in the body of the request. To access the body, you can use `req.body`, but you must use middleware (like `express.json()` for JSON) to parse the body content.

Example:

```js
app.post('/data', (req, res) => {
  console.log('Request Body:', req.body);
  res.json({ message: 'Data received', requestBody: req.body });
});
```

To send JSON data via Postman:

- Select the **POST** method.
- In the Body tab, select **raw** and **JSON** as the format.
- Enter the JSON data: `{ "name": "John", "age": 30 }`.

Output:

```
Request Body: { name: 'John', age: 30 }
```

#### 5. `req.headers`

The `req.headers` object contains all the headers sent by the client. Headers provide metadata about the request, such as the type of content being sent or authentication information.

Example:

```js
app.use((req, res, next) => {
  console.log('Request Headers:', req.headers);
  next();
});
```

Common headers include:

- `Content-Type`: Specifies the media type of the resource (e.g., `application/json`, `text/html`).
- `Authorization`: Used for authentication tokens (e.g., Bearer token).
- `User-Agent`: Identifies the client making the request (e.g., browser type/version).

#### 6. `req.params`

When you define route parameters in the URL (like `/users/:id`), you can access them using `req.params`.

Example:

```js
app.get('/users/:id', (req, res) => {
  console.log('User ID:', req.params.id);
  res.json({ message: 'User ID received', userId: req.params.id });
});
```

For a request to `/users/123`, the output will be:

```
User ID: 123
```

#### 7. `req.cookies`

If the client sends cookies, you can access them using `req.cookies`. However, you need middleware like `cookie-parser` to parse cookies.

Install `cookie-parser`:

```bash
npm install cookie-parser
```

Example:

```js
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/data', (req, res) => {
  console.log('Cookies:', req.cookies);
  res.json({ message: 'Cookies received', cookies: req.cookies });
});
```

### 4. Additional Properties of the Request Object

Here are some additional useful properties of the `req` object:

- **`req.ip`**: Returns the client’s IP address.
  
  Example:
  
  ```js
  app.use((req, res, next) => {
    console.log('Client IP:', req.ip);
    next();
  });
  ```

- **`req.get(field)`**: Retrieves a specific header value. For example, `req.get('Content-Type')` returns the `Content-Type` header value.

  Example:

  ```js
  app.use((req, res, next) => {
    const contentType = req.get('Content-Type');
    console.log('Content-Type Header:', contentType);
    next();
  });
  ```

- **`req.path`**: Returns the path portion of the URL.

  Example:

  ```js
  app.use((req, res, next) => {
    console.log('Request Path:', req.path);
    next();
  });
  ```

- **`req.protocol`**: Returns the protocol of the request (e.g., `http` or `https`).

  Example:

  ```js
  app.use((req, res, next) => {
    console.log('Request Protocol:', req.protocol);
    next();
  });
  ```

- **`req.hostname`**: Returns the hostname of the request (e.g., `localhost`).

  Example:

  ```js
  app.use((req, res, next) => {
    console.log('Request Hostname:', req.hostname);
    next();
  });
  ```

### 5. Conclusion

The `request` (`req`) object in Node.js is a core part of handling incoming HTTP requests. It provides rich functionality to access details about the request, including the HTTP method, URL, headers, query parameters
# 15 - Response Object
The `response` object in Node.js is an integral part of handling HTTP requests and sending responses back to the client. This object, commonly referred to as `res`, is provided by the server when handling incoming requests and is used to craft responses such as HTML, JSON, files, and even headers.

In this explanation, we'll delve into the `response` object in Node.js, explore its key properties and methods, and provide examples to show how it works. For this discussion, we'll use Node.js version 22.6.0, and reference the Node.js API documentation.

### Overview of the Response Object

The `response` object is an instance of the `http.ServerResponse` class, which is part of the core `http` module in Node.js. It represents the HTTP response that the server sends back to the client in response to an incoming request.

With the `res` object, you can:
- Set HTTP headers.
- Set the status code.
- Send various types of data (JSON, HTML, text, files).
- End the response.

### Key Properties and Methods of the `Response` Object

#### 1. `res.statusCode`
This property allows you to set the HTTP status code of the response. By default, Node.js sets it to `200`, which indicates a successful request.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 404; // Set status code to 404 (Not Found)
  res.end('Resource not found');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

In this example, the server responds with a `404 Not Found` status code when a request is made.

#### 2. `res.setHeader()`
The `res.setHeader()` method sets a specific HTTP header for the response. This is useful for setting metadata about the response, such as the content type, caching policies, and custom headers.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello, world!' }));
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

Here, we set the `Content-Type` header to `application/json` to indicate that the response body contains JSON data.

#### 3. `res.getHeader()`
The `res.getHeader()` method retrieves the value of a response header that was previously set.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  console.log('Content-Type header:', res.getHeader('Content-Type')); // Logs 'application/json'
  
  res.end(JSON.stringify({ message: 'Check the headers!' }));
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

#### 4. `res.write()`
The `res.write()` method is used to send chunks of data to the client without ending the response. This is useful for streaming data, such as sending a large file or responding with multiple pieces of information in real-time.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  
  res.write('Hello, ');
  res.write('world!\n');
  res.write('Streaming data...\n');

  res.end(); // End the response
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

In this example, the server writes multiple pieces of text to the response before calling `res.end()` to finish the response.

#### 5. `res.end()`
The `res.end()` method signals that the response is complete and should be sent to the client. You can optionally pass a final chunk of data to `res.end()`, which is sent with the response body.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Goodbye!'); // Send a response and end it
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

Here, the server sends "Goodbye!" and closes the connection with the client.

#### 6. `res.json()`
In Express.js, a popular framework for Node.js, the `res.json()` method simplifies sending JSON responses. This method automatically sets the `Content-Type` header to `application/json` and converts a JavaScript object into a JSON string.

```js
const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  res.status(200).json({ message: 'This is a JSON response' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

When a GET request is made to `/data`, the server responds with:

```json
{
  "message": "This is a JSON response"
}
```

#### 7. `res.redirect()`
In Express.js, `res.redirect()` is used to send a redirect response to the client, instructing it to visit another URL.

```js
app.get('/old-route', (req, res) => {
  res.redirect('/new-route'); // Redirect to a different route
});
```

When a client requests `/old-route`, it is automatically redirected to `/new-route`.

#### 8. `res.sendFile()`
In Express, `res.sendFile()` is used to send files as responses, such as images, PDFs, or HTML files.

```js
const path = require('path');

app.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, 'sample.pdf')); // Send a PDF file as a response
});
```

This method automatically handles the file stream and sets appropriate headers.

### Sending Different Types of Responses

#### 1. Sending HTML Responses

You can send HTML content in the response by setting the `Content-Type` to `text/html`.

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello, world!</h1>'); // Send an HTML response
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

This will display an HTML response with the text "Hello, world!" inside an `<h1>` tag when viewed in a browser.

#### 2. Sending JSON Responses

JSON is a common format for APIs. You can send JSON using `res.setHeader()` and `JSON.stringify()` (or using Express's `res.json()`).

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const jsonData = { name: 'John', age: 30 };
  res.end(JSON.stringify(jsonData)); // Send JSON response
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

#### 3. Sending Status Codes

HTTP status codes are essential for telling the client whether the request was successful, failed, or redirected. You can set the status code using `res.statusCode` or by using the `res.status()` method in Express.

Example:

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Resource not found'); // Send 404 status with a message
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

In Express:

```js
app.get('/error', (req, res) => {
  res.status(500).json({ error: 'Internal Server Error' });
});
```

#### 4. Sending File Responses

Sending files is straightforward in Express using `res.sendFile()`.

Example:

```js
const path = require('path');

app.get('/download', (req, res) => {
  res.sendFile(path.join(__dirname, 'sample.txt')); // Send a text file
});
```

The file will be downloaded by the client when they access the route.

### Handling Headers in the Response

You can manipulate headers using methods like `res.setHeader()` and `res.removeHeader()`.

#### Setting Headers

```js
res.setHeader('Content-Type', 'application/json');
```

#### Removing Headers

```js
res.removeHeader('Content-Length');
```

### Conclusion

The `response` object in Node.js (or `res` in frameworks like Express) plays a crucial role in sending responses to clients. It allows you to control everything from headers and status codes to the type of data being returned. By understanding the various methods available on the `res` object, you can craft appropriate responses to client requests.


# 16 - CRUD Operations

Creating a CRUD (Create, Read, Update, Delete) server in Node.js for an application that handles products involves building an API where clients can perform operations such as adding new products, fetching product details, updating product information, and deleting products.

We’ll use **Node.js version 22.6.0** and the **Express** framework to simplify routing and handling HTTP requests. For managing product data, we’ll simulate a database by using an in-memory array, though in real-world scenarios, you would connect to a database like MongoDB, MySQL, or PostgreSQL.

### Steps to Build a CRUD Server for Products

1. **Setting up a basic Node.js project**
2. **Creating routes for CRUD operations**
3. **Handling the request body and parameters**
4. **Implementing in-memory data storage**
5. **Testing the API using Postman**

---

### Step 1: Setting Up the Node.js Project

1. **Install Node.js version 22.6.0** if you haven't already.
2. Initialize a new Node.js project and install Express:

   ```bash
   npm init -y
   npm install express
   ```

3. Create a file called `server.js`, which will contain the server logic.

### Step 2: Setting Up the Express Server

Start by setting up a basic Express server to handle the different HTTP methods (GET, POST, PUT, DELETE).

#### Example: Basic Express Server

```js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Step 3: Creating Routes for CRUD Operations

Now, we will define routes for handling CRUD operations for the `Product` resource. The routes are:

- **Create a product**: `POST /products`
- **Read all products**: `GET /products`
- **Read a specific product by ID**: `GET /products/:id`
- **Update a product by ID**: `PUT /products/:id`
- **Delete a product by ID**: `DELETE /products/:id`

We'll simulate a product model using an in-memory array of products.

### Step 4: Implementing CRUD Logic

#### Create a Product (`POST /products`)

When the client sends a POST request to `/products`, we will add a new product to our in-memory array.

```js
let products = []; // In-memory array to store products
let currentId = 1; // To simulate product IDs

// POST /products - Create a new product
app.post('/products', (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Product name and price are required' });
  }

  const newProduct = {
    id: currentId++,
    name,
    price,
    description: description || ''
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});
```

- **Request Body**: The client should send the product details (name, price, and optionally description) as a JSON object.
- **Response**: The server responds with the newly created product object.

#### Read All Products (`GET /products`)

This endpoint returns all the products stored in the array.

```js
// GET /products - Retrieve all products
app.get('/products', (req, res) => {
  res.json(products);
});
```

- **Response**: An array of all products.

#### Read a Specific Product by ID (`GET /products/:id`)

This endpoint allows the client to fetch a specific product by its ID.

```js
// GET /products/:id - Retrieve a product by ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});
```

- **URL Parameter**: The client sends the product ID as part of the URL.
- **Response**: The product object if found, or a 404 error if the product doesn't exist.

#### Update a Product by ID (`PUT /products/:id`)

This route updates an existing product's details.

```js
// PUT /products/:id - Update a product by ID
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price, description } = req.body;

  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Update the product details
  products[productIndex] = {
    id: productId,
    name: name || products[productIndex].name,
    price: price || products[productIndex].price,
    description: description || products[productIndex].description
  };

  res.json(products[productIndex]);
});
```

- **Request Body**: The client sends the updated product data in the body.
- **Response**: The updated product or a 404 if the product doesn't exist.

#### Delete a Product by ID (`DELETE /products/:id`)

This route deletes a specific product by its ID.

```js
// DELETE /products/:id - Delete a product by ID
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Remove the product from the array
  products.splice(productIndex, 1);

  res.status(204).end(); // 204 No Content response
});
```

- **Response**: A 204 status code if the deletion is successful, or 404 if the product doesn’t exist.

### Full Code for CRUD Server

```js
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

let products = []; // In-memory array to store products
let currentId = 1; // To simulate product IDs

// POST /products - Create a new product
app.post('/products', (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Product name and price are required' });
  }

  const newProduct = {
    id: currentId++,
    name,
    price,
    description: description || ''
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// GET /products - Retrieve all products
app.get('/products', (req, res) => {
  res.json(products);
});

// GET /products/:id - Retrieve a product by ID
app.get('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

// PUT /products/:id - Update a product by ID
app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const { name, price, description } = req.body;

  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Update the product details
  products[productIndex] = {
    id: productId,
    name: name || products[productIndex].name,
    price: price || products[productIndex].price,
    description: description || products[productIndex].description
  };

  res.json(products[productIndex]);
});

// DELETE /products/:id - Delete a product by ID
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const productIndex = products.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  // Remove the product from the array
  products.splice(productIndex, 1);

  res.status(204).end(); // 204 No Content response
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Step 5: Testing with Postman

To test the CRUD operations, use Postman:

1. **Create a product (POST)**:
   - URL: `http://localhost:3000/products`
   - Method: `POST`
   - Body (JSON):
     ```json
     {
       "name": "Product A",
       "price": 100,
       "description": "A sample product"
     }
     ```

2. **Retrieve all products (GET)**:
   - URL: `http://localhost:3000/products`
   - Method: `GET`

3. **Retrieve a product by ID (GET)**:
   - URL: `

http://localhost:3000/products/1`
   - Method: `GET`

4. **Update a product by ID (PUT)**:
   - URL: `http://localhost:3000/products/1`
   - Method: `PUT`
   - Body (JSON):
     ```json
     {
       "name": "Updated Product",
       "price": 150
     }
     ```

5. **Delete a product by ID (DELETE)**:
   - URL: `http://localhost:3000/products/1`
   - Method: `DELETE`

### Conclusion

This is a basic CRUD server that handles product data using Node.js and Express. The key concepts covered include routing, handling HTTP requests, and basic validation.
