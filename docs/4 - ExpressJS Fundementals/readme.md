# 4 - ExpressJS Fundementals

This is the readme file for the 4 - ExpressJS Fundementals folder.

## 1 - Introduction to NPM
### **Introduction to NPM (Node Package Manager)**
NPM (Node Package Manager) is a tool that comes installed with **Node.js**. It is the default package manager for JavaScript developers working in a **Node.js** environment. NPM allows you to **install**, **manage**, **update**, and **remove** packages (reusable pieces of code) in your Node.js projects. It also helps in managing dependencies and their versions efficiently, making it a vital tool in any JavaScript/Node.js project.

NPM has three main components:
1. **NPM CLI**: The command-line interface that helps you interact with the NPM ecosystem.
2. **NPM Registry**: A large collection of open-source JavaScript packages.
3. **NPM Website**: A website where you can search for and explore packages (https://www.npmjs.com).

In this explanation, I will introduce you to **NPM v10.8.3**, explain its usage, and show examples of how to work with it in your Node.js projects.

### **Key Features of NPM:**
1. **Package Installation**: Install packages globally or locally to your project.
2. **Package Management**: Manage project dependencies through the `package.json` file.
3. **Version Control**: Track and control package versions.
4. **Scripts Management**: Automate tasks by defining custom scripts.

---

### **1. Installing NPM and Verifying NPM Version**

When you install **Node.js**, NPM is automatically installed with it. To check if you have NPM installed and to verify its version, run the following commands:

```bash
npm -v
```

This will display the installed version of NPM. If you have **NPM 10.8.3**, it will return:

```bash
10.8.3
```

If NPM is not installed, you can download Node.js from [nodejs.org](https://nodejs.org/en/) which will include NPM by default.

---

### **2. Initializing a New Node.js Project**

To start a new Node.js project and use NPM to manage dependencies, you need to create a `package.json` file. This file keeps track of your project's dependencies and configurations.

To create a `package.json` file, use the following command:

```bash
npm init
```

This command will prompt you for some basic information like:
- **Package name**: The name of your project.
- **Version**: Version of your project.
- **Description**: A brief description of the project.
- **Entry point**: The main file of your project (default is `index.js`).
- **Test command**: Command to run tests.
- **Git repository**: Git repository URL (optional).
- **Keywords**: Search keywords for your project.
- **Author**: Your name.
- **License**: License for your project (default is `ISC`).

After answering the prompts, it will generate a `package.json` file, which might look something like this:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A simple Node.js project",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "Your Name",
  "license": "ISC"
}
```

You can also run `npm init -y` to skip the questions and automatically create a `package.json` file with default values.

---

### **3. Installing Packages**

#### **Installing a Local Package**
To install a package locally (only for this project), you can use the following command:

```bash
npm install <package-name>
```

For example, let’s install **lodash**, a popular utility library:

```bash
npm install lodash
```

This will:
- Download the `lodash` package from the NPM registry.
- Create a `node_modules` folder (if it doesn't exist) where the installed package and its dependencies are stored.
- Add an entry for `lodash` in the `package.json` file under `dependencies`.

The `package.json` file now includes the dependency:

```json
{
  "dependencies": {
    "lodash": "^4.17.21"
  }
}
```

The `^` indicates that minor updates (non-breaking changes) are allowed, but major updates will not be installed automatically.

#### **Installing a Global Package**
If you want to install a package globally (accessible from anywhere on your system), use the `-g` flag:

```bash
npm install -g <package-name>
```

For example, to install the **nodemon** tool globally (which automatically restarts your Node.js application when files change), use:

```bash
npm install -g nodemon
```

This installs `nodemon` globally, and you can now run the `nodemon` command in your terminal.

---

### **4. Using Installed Packages**

Once you’ve installed a package locally, you can use it in your project by importing it in your JavaScript files.

#### Example: Using Lodash

```js
// index.js
const _ = require('lodash');

const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse(array.slice());

console.log('Reversed Array:', reversedArray);
```

In this example, we installed `lodash` locally and then used its `reverse` function to reverse an array.

---

### **5. Removing Packages**

If you want to remove a package from your project, you can use the following command:

```bash
npm uninstall <package-name>
```

For example, to remove `lodash`:

```bash
npm uninstall lodash
```

This will:
- Remove the package from the `node_modules` folder.
- Remove the entry from the `package.json` file under `dependencies`.

---

### **6. Using `package.json` for Dependency Management**

The `package.json` file is central to managing a Node.js project. It helps define the dependencies of the project, manage versions, and automate tasks.

#### **Dependencies Section**

This section lists all the packages your project depends on, along with the version ranges allowed.

```json
"dependencies": {
  "express": "^4.17.1",
  "lodash": "^4.17.21"
}
```

The **`^`** symbol before the version number allows for automatic patch or minor updates but prevents breaking major updates.

#### **Scripts Section**

The `scripts` section allows you to define custom commands for automating tasks in your project. For example:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
}
```

In this case:
- **`npm start`**: Runs `node index.js` (starts the app).
- **`npm run dev`**: Runs `nodemon index.js` (starts the app with auto-reload).
- **`npm test`**: Runs a test command (currently just a placeholder).

You can run these scripts by using:

```bash
npm start
npm run dev
npm test
```

---

### **7. Semantic Versioning (SemVer)**

NPM follows **Semantic Versioning (SemVer)** for package versions, represented as `MAJOR.MINOR.PATCH`. This versioning scheme ensures consistency and helps avoid breaking changes during package updates.

- **MAJOR**: Introduces breaking changes.
- **MINOR**: Adds new features without breaking existing functionality.
- **PATCH**: Introduces bug fixes or small improvements without affecting functionality.

For example, `"lodash": "^4.17.21"` means that:
- `^` allows updates up to but not including the next major version (e.g., it will allow 4.18.x but not 5.x.x).

---

### **8. Lock Files (`package-lock.json`)**

When you install packages, NPM creates a **`package-lock.json`** file that locks the exact versions of the installed dependencies. This ensures that if someone else clones your project and runs `npm install`, they will get the exact same versions of the dependencies as you have.

---

### **9. Updating Packages**

To update a package to its latest version, you can use the following command:

```bash
npm update <package-name>
```

This updates the package to the latest version allowed by the version range specified in `package.json`.

If you want to update a package to a version that exceeds the specified range, you can use:

```bash
npm install <package-name>@latest
```

---

### **10. NPM Audit**

NPM provides a built-in command to check for security vulnerabilities in your project’s dependencies.

```bash
npm audit
```

This will scan your dependencies and alert you to any known vulnerabilities, along with instructions for how to fix them.

---

### **Conclusion**

**NPM v10.8.3** is a powerful tool that simplifies dependency management in Node.js projects. By using `npm install`, `npm uninstall`, `npm update`, and other commands, you can easily manage the lifecycle of packages in your project. With **`package.json`** and **`package-lock.json`**, you can keep track of your dependencies and ensure that they remain consistent across different environments.

This introduction should give you a good start with NPM, making it easier to install, manage, and use packages effectively in your Node.js projects.
## 2 - What is ExpressJS
**Express.js** (or simply Express) is a fast, unopinionated, and minimalist web framework for **Node.js**. It provides robust features for building web and mobile applications. Express simplifies the development process by providing a layer of basic web application features on top of Node.js's native HTTP modules.

### **Key Features of Express.js:**
1. **Routing**: Express provides a robust routing mechanism for handling different HTTP methods (`GET`, `POST`, etc.) and defining URL patterns.
2. **Middleware**: Middleware functions in Express allow you to process requests at various stages. It’s commonly used for logging, authentication, parsing request bodies, etc.
3. **Templating**: Express supports view engines such as **EJS**, **Pug**, and others, which enable dynamic content rendering.
4. **Error Handling**: Express provides mechanisms to handle application-level errors efficiently.
5. **Built-in HTTP Methods and Middleware**: Express offers simple integration of HTTP methods and JSON/URL-encoded form parsing.

### **Using Express.js:**

#### **1. Setting Up Express:**
To install Express in your Node.js project:

```bash
npm install express
```

#### **2. Basic Express Server Example:**

```js
const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

This code creates an Express server that listens on port `3000` and responds with "Hello, Express!" when a `GET` request is made to the root URL (`/`).

---

### **Routing in Express:**

Express provides methods to define routes for different HTTP methods:

```js
app.get('/', (req, res) => res.send('GET request to the homepage'));
app.post('/', (req, res) => res.send('POST request to the homepage'));
```

---

### **Middleware in Express:**

Middleware functions are functions that have access to the request and response objects, and they can end the request-response cycle or pass control to the next middleware function.

```js
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});
```

You can check more advanced features and explore the official API documentation for Express.js v5 at the [Express.js official site](https://expressjs.com/en/5x/api.html).


## 3 - Create a web server
To create a web server using **Express.js**, you can follow these steps. Express.js simplifies the process of building web servers by abstracting much of the complexity involved in handling HTTP requests and responses.

Here’s how to set up a basic Express.js web server:

### **Step-by-Step Guide to Creating an Express.js Web Server**

#### **1. Install Node.js and Express**

First, ensure that **Node.js** is installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

Then, initialize a new Node.js project and install Express:

```bash
mkdir my-express-server
cd my-express-server
npm init -y
npm install express
```

#### **2. Create the Server File**

Create a new file named `server.js` (or any name you prefer) in the project directory.

```bash
touch server.js
```

#### **3. Writing the Express Server Code**

Open the `server.js` file and write the following code:

```js
// Import the Express module
const express = require('express');

// Initialize an Express application
const app = express();

// Define a port
const port = 3000;

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server!');
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

#### **4. Running the Server**

Run the server using Node.js:

```bash
node server.js
```

You will see output like:

```
Server is running at http://localhost:3000
```

#### **5. Accessing the Server**

Open your browser and navigate to `http://localhost:3000`. You will see the message **"Welcome to the Express Server!"**.

### **Explanation of the Code:**

- **`express()`**: This initializes a new instance of Express.
- **`app.get()`**: This method defines a route handler for `GET` requests to the root path (`'/'`). When someone visits this URL, it responds with a message (`'Welcome to the Express Server!'`).
- **`app.listen()`**: This method starts the server on the specified port (`3000`), and the callback function is triggered once the server is running.

---

### **Advanced Features**

You can add more routes and middleware to your Express server. For example, to add a route that responds with JSON data:

```js
app.get('/data', (req, res) => {
  res.json({ message: 'Hello, JSON!' });
});
```

Now, if you visit `http://localhost:3000/data`, you will receive a JSON response:

```json
{
  "message": "Hello, JSON!"
}
```

### **Conclusion**

This simple Express.js server responds to HTTP `GET` requests, but you can expand it to handle many other types of requests, serve static files, use middleware for authentication, logging, and much more.
## 4 - Response in express.js

## 5 - Explore HTTP method in express.js

## 6 - Explore parts of URL

## 7 - What is a RESTRESTFUL API

## 8 - Get one item

## 9 - Auto restart server

## 10 - Create item

## 11 - Update item

## 12 - Delete item

## 13 - Middleware

## 14 - Model View Controller (MVC)

## 15 - Refactor code to MVC

## 16 - Router in express.js

