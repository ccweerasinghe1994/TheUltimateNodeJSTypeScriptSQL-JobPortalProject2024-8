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


```js
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

## 4 - Response in express.js

```js
const express = require("express");
const app = express();
const port = 3000;

const products = {
  id: 111,
  name: "product1",
  price: 100,
};

app.get("/", (req, res) => {
  res.status(200).send(products);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

```

## 5 - Explore HTTP method in express.js
```js
const express = require("express");
const app = express();
const port = 3000;
const path = require("node:path");
const fs = require("node:fs");

const products = {
  id: 111,
  name: "product1",
  price: 100,
};

app.get("/", (req, res) => {
  res.status(200).send(products);
});

app.get("/about", async (req, res) => {
  const aboutPageHTML = path.join(__dirname, "static", "aboutPage.html");
  fs.readFile(aboutPageHTML, "utf8", (err, html) => {
    if (err) {
      return res.status(500).send("Sorry, something went wrong");
    }
    return res.status(200).send(html);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

```
## 6 - Explore parts of URL
To access **query parameters** in Express.js, you can use the **`req.query`** object, which contains the query string parameters sent by the client in the URL. 

Query parameters are typically passed after the question mark (`?`) in a URL. For example, in the URL:

```
http://localhost:3000/search?term=express&category=node
```

- `term` is the name of the first query parameter, and `express` is its value.
- `category` is the name of the second query parameter, and `node` is its value.

### **Example of Accessing Query Parameters in Express.js:**

Here’s how you can access these parameters in an Express route:

#### **1. Create a Route that Handles Query Parameters**

In your **Express.js** server file (e.g., `server.js`), define a route that listens for incoming requests with query parameters.

```js
const express = require('express');
const app = express();
const port = 3000;

// Route to handle query parameters
app.get('/search', (req, res) => {
  // Access query parameters using req.query
  const searchTerm = req.query.term;
  const category = req.query.category;
  
  res.send(`Search term: ${searchTerm}, Category: ${category}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

#### **2. Running the Server**

Start the server with the command:

```bash
node server.js
```

Now, if you visit `http://localhost:3000/search?term=express&category=node` in your browser, the server will respond with:

```
Search term: express, Category: node
```

### **Explanation:**

- **`req.query`**: This is an object that contains all the query string parameters. In this example, `req.query.term` refers to the value of the `term` parameter (`express`), and `req.query.category` refers to the value of the `category` parameter (`node`).

- **`app.get('/search', ...)`**: This route listens for `GET` requests made to the `/search` endpoint.

### **Handling Multiple Query Parameters**

If the URL contains multiple query parameters, `req.query` will have all of them as key-value pairs. For example, for a URL like:

```
http://localhost:3000/search?term=express&category=node&sort=asc
```

The `req.query` object will be:

```js
{
  term: 'express',
  category: 'node',
  sort: 'asc'
}
```

You can access each parameter using `req.query.<param_name>`.

### **Conclusion**

Using `req.query`, you can easily access and manipulate query parameters in an Express.js application. This is useful for handling search requests, filters, and other forms of data that are passed via the URL.

In **Express.js**, you can access **route parameters** (also known as URL parameters) using the **`req.params`** object. Route parameters are part of the URL and are used to capture dynamic values that are passed as part of the URL path.

Here’s how you can access route parameters using `req.params`.

### **Route Parameters Example**

If you define a route with a dynamic segment like `:id`, that segment can capture a value from the URL and make it available via the `req.params` object.

### **Example of Accessing Route Parameters in Express.js:**

In your **Express.js** server file (e.g., `server.js`), define a route that listens for incoming requests with dynamic route parameters.

#### **1. Creating a Route with Parameters**

```js
const express = require('express');
const app = express();
const port = 3000;

// Route with a dynamic parameter ':id'
app.get('/users/:id', (req, res) => {
  // Access the 'id' parameter using req.params
  const userId = req.params.id;
  
  res.send(`User ID: ${userId}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

#### **2. Running the Server**

Start the server using the command:

```bash
node server.js
```

#### **3. Accessing the Route with a Parameter**

Now, if you visit `http://localhost:3000/users/123` in your browser, the server will respond with:

```
User ID: 123
```

The value `123` is passed as the `id` parameter, and it's accessed via `req.params.id`.

### **Explanation:**

- **`app.get('/users/:id', ...)`**: This route is defined with a dynamic segment `:id`. The `:id` portion of the URL acts as a placeholder for any value that can be captured from the URL.
  
- **`req.params`**: This is an object that contains any route parameters. In this example, `req.params.id` refers to the value of the `id` parameter in the URL (`123` in this case).

### **Multiple Route Parameters Example**

You can define multiple route parameters. For example:

```js
app.get('/users/:id/posts/:postId', (req, res) => {
  const userId = req.params.id;
  const postId = req.params.postId;
  
  res.send(`User ID: ${userId}, Post ID: ${postId}`);
});
```

Now, if you visit `http://localhost:3000/users/123/posts/456`, the server will respond with:

```
User ID: 123, Post ID: 456
```

In this case:
- `req.params.id` is `123`
- `req.params.postId` is `456`

### **Conclusion**

- **`req.params`** allows you to access dynamic values in the URL that are specified as route parameters.
- Route parameters are defined by using a colon (`:`) followed by the parameter name in the route definition.
- This is commonly used in applications to handle things like user IDs, product IDs, or other dynamic values passed in the URL.

You can explore more details about handling route parameters in the [official Express documentation](https://expressjs.com/en/5x/api.html).

```js
const express = require("express");
const app = express();
const port = 3000;
const path = require("node:path");
const fs = require("node:fs");

const products = {
  id: 111,
  name: "product1",
  price: 100,
};

app.get("/", (req, res) => {
  res.status(200).send(products);
});

app.get("/products/:produtId", (req, res) => {
  const products = parseInt(req.params.produtId);

  if (isNaN(products)) {
    return res.status(400).send("Invalid product id");
  }

  res.status(200).send(`Product id is ${products}`);
});

app.get("/about", async (req, res) => {
  const aboutPageHTML = path.join(__dirname, "static", "aboutPage.html");
  fs.readFile(aboutPageHTML, "utf8", (err, html) => {
    if (err) {
      return res.status(500).send("Sorry, something went wrong");
    }
    return res.status(200).send(html);
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

```

## 7 - What is a RESTRESTFUL API
A **RESTful API** (Representational State Transfer API) is an architectural style for designing networked applications, where the API interacts with resources (data) on a server using standard HTTP methods. It allows communication between clients (such as browsers or mobile apps) and servers, typically over the web.

### **What is REST?**

**REST** (Representational State Transfer) is an architectural style for designing distributed systems and networked applications. It was introduced by Roy Fielding in his doctoral dissertation in 2000. REST is based on a set of guidelines and principles for building scalable, stateless, and easy-to-use web services.

A **RESTful API** is simply an API that adheres to the principles of REST.

### **Key Principles of REST:**
1. **Stateless**: Each request from the client to the server must contain all the necessary information to understand and process the request. The server doesn’t store the state of the client between requests. This makes RESTful APIs scalable.
   
2. **Client-Server Architecture**: The client and the server are separate entities. The client is responsible for the user interface, and the server handles the backend and data processing. This separation allows them to evolve independently.
   
3. **Uniform Interface**: REST relies on a uniform way to interact with resources. All interactions are done using standard HTTP methods like GET, POST, PUT, DELETE, etc., which ensures simplicity and consistency.

4. **Resource Representation**: Resources (data or objects) are represented as URLs or URIs (Uniform Resource Identifiers). Each resource has a unique identifier, and it is accessed via a URL.

5. **Representation of Resources**: REST uses standard formats like **JSON** or **XML** to represent resources. The client can request a specific format using the HTTP headers, typically through `Content-Type` or `Accept`.

6. **Cacheable**: Responses from the server should be cacheable, allowing the client to reduce server load and improve performance by caching frequently accessed resources.

7. **Layered System**: The client does not need to know whether it is communicating directly with the server or through intermediaries, such as proxies or gateways, which adds scalability and security to the system.

---

### **HTTP Methods in RESTful APIs**

In RESTful APIs, **HTTP methods** are used to perform operations on resources. Each method corresponds to a specific operation:

1. **GET**: 
   - Retrieves data from the server.
   - It’s safe and idempotent (does not modify resources and can be called multiple times without changing the result).
   
   **Example**: 
   ```http
   GET /users
   GET /users/123
   ```

2. **POST**: 
   - Creates a new resource on the server.
   - The request body contains the data for the new resource.
   
   **Example**: 
   ```http
   POST /users
   ```

3. **PUT**: 
   - Updates an existing resource on the server or creates one if it doesn’t exist.
   
   **Example**: 
   ```http
   PUT /users/123
   ```

4. **PATCH**: 
   - Partially updates a resource on the server.
   
   **Example**: 
   ```http
   PATCH /users/123
   ```

5. **DELETE**: 
   - Deletes a resource on the server.
   
   **Example**: 
   ```http
   DELETE /users/123
   ```

---

### **Example of a RESTful API**

Consider a **User Management System** where you can manage user data through an API. The API allows the client to perform operations such as creating, reading, updating, and deleting user data.

Here’s a breakdown of how RESTful API requests might look:

1. **GET** (Retrieve all users):
   ```http
   GET /users
   ```
   **Response**:
   ```json
   [
     { "id": 1, "name": "John Doe" },
     { "id": 2, "name": "Jane Smith" }
   ]
   ```

2. **GET** (Retrieve a single user by ID):
   ```http
   GET /users/1
   ```
   **Response**:
   ```json
   { "id": 1, "name": "John Doe" }
   ```

3. **POST** (Create a new user):
   ```http
   POST /users
   ```
   **Request Body**:
   ```json
   { "name": "New User" }
   ```

4. **PUT** (Update an existing user):
   ```http
   PUT /users/1
   ```
   **Request Body**:
   ```json
   { "name": "Updated User" }
   ```

5. **DELETE** (Delete a user):
   ```http
   DELETE /users/1
   ```

---

### **Benefits of RESTful APIs:**

1. **Scalability**: The stateless nature of REST makes it easy to scale, as each request contains all the necessary information.
   
2. **Simplicity**: REST uses standard HTTP methods and is easy to understand and implement.
   
3. **Performance**: RESTful APIs can leverage caching mechanisms, reducing the server’s workload and improving performance.

4. **Flexibility**: Clients can request different formats (e.g., JSON, XML) for the same resource, allowing for a more flexible API.

5. **Modularity**: The separation between client and server allows for independent evolution of the frontend and backend.

---

### **REST vs. RESTful**

- **REST** is the overarching architectural style, with a set of principles and guidelines for designing networked systems.
- **RESTful** refers to a web service that adheres to the REST architectural principles. When an API is described as "RESTful," it follows REST conventions like using HTTP methods, statelessness, resource identification, etc.

---

### **Conclusion**

A **RESTful API** is an API that adheres to the principles of REST, providing a way to interact with resources via standard HTTP methods like GET, POST, PUT, DELETE, etc. It is a scalable, simple, and widely-adopted way to design APIs for web services, allowing different clients (web, mobile, etc.) to communicate with the server in a standardized manner.
## 8 - Get one item
```js
app.get("/products/:produtId", (req, res) => {
  const productID = parseInt(req.params.produtId);

  const findIndex = products.findIndex((product) => product.id === productID);

  if (isNaN(productID)) {
    return res.status(400).send("Invalid product id");
  }

  if (findIndex === -1) {
    return res.status(404).send("Product not found");
  }

  res.status(200).send(products[findIndex]);
});
```
## 9 - Auto restart server
To enable **auto-restart** for a **Node.js** server, you can use either the **built-in watch mode** in **Node.js v22.6.0** or the popular tool **nodemon**. Both of these options allow the Node.js server to automatically restart whenever file changes are detected, which is extremely useful during development.

### **1. Auto-Restart Server Using Node.js `--watch` Mode**

**Node.js v22.6.0** introduced a built-in feature for auto-restarting the server when file changes are detected, using the `--watch` flag. This is a simpler and more lightweight solution compared to external tools like `nodemon`.

#### **Example:**

1. **Create a Simple Express Server**

```bash
mkdir auto-restart-example
cd auto-restart-example
npm init -y
npm install express
```

Create a file called `server.js`:

```js
// server.js
const express = require('express');
const app = express();
const port = 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world! Auto-restart with Node.js watch mode.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

2. **Run the Server with Watch Mode:**

```bash
node --watch server.js
```

This command will start the server in **watch mode**, and it will automatically restart the server whenever changes are made to the `server.js` file.

#### **How it Works:**
- **`--watch` flag**: This tells Node.js to monitor the files in the current working directory for changes.
- **Automatic restart**: Whenever a file is saved with changes, the server restarts automatically. For example, if you modify the message in the `res.send()` response, the server will restart and reflect the updated output.

#### **Customizing Watch Behavior:**

You can ignore certain directories or files from being watched, such as `node_modules` or test files, by using the `NODE_OPTIONS` environment variable:

```bash
NODE_OPTIONS='--watch-ignore-directory=**/node_modules/**' node --watch server.js
```

This will ignore the `node_modules` folder, which you typically don’t want to restart the server for when installing dependencies.

### **2. Using `nodemon` for Auto-Restarting Node.js Servers**

While the built-in **watch mode** in Node.js is a great solution, **`nodemon`** is a more popular and feature-rich tool for auto-restarting a Node.js server during development. `nodemon` monitors the entire project for file changes and automatically restarts the server when changes are detected.

#### **Installing `nodemon`:**

You can install `nodemon` globally or as a development dependency.

- **Globally** (so you can use it for any project):

```bash
npm install -g nodemon
```

- **Locally (development dependency)**:

```bash
npm install nodemon --save-dev
```

#### **Example with `nodemon`:**

1. **Create an Express Server (if not already created)**

Create `server.js`:

```js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from nodemon auto-restart!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

2. **Running the Server with `nodemon`:**

If `nodemon` is installed globally, you can run the server like this:

```bash
nodemon server.js
```

If `nodemon` is installed as a local development dependency, you can modify your `package.json` to include a script that runs `nodemon`:

```json
{
  "scripts": {
    "dev": "nodemon server.js"
  }
}
```

Now you can start your server with:

```bash
npm run dev
```

#### **How `nodemon` Works:**
- **Automatic monitoring**: `nodemon` automatically watches all files in the project directory and will restart the server whenever any file is changed.
- **No need for additional configuration**: By default, `nodemon` watches `.js`, `.json`, and `.mjs` files.
- **Customizable**: You can configure `nodemon` to watch additional file extensions, ignore certain files or directories, or change the restart delay.

#### **Advanced `nodemon` Configuration:**

You can create a `nodemon.json` configuration file to customize how `nodemon` behaves. Here’s an example `nodemon.json`:

```json
{
  "watch": ["src"],
  "ext": "js,json,ts",
  "ignore": ["node_modules", "tests"],
  "exec": "node --inspect server.js"
}
```

- **`watch`**: Specifies directories or files to watch.
- **`ext`**: Tells `nodemon` to watch specific file extensions (e.g., `.js`, `.json`, `.ts`).
- **`ignore`**: Defines files or directories to ignore.
- **`exec`**: Executes the command when a file change is detected (e.g., running the Node.js server with debugging enabled).

#### **Command-line Options for `nodemon`:**

You can pass options to `nodemon` directly from the command line:

- **Watch additional files**:

```bash
nodemon --watch app.js --watch config.json
```

- **Ignore files**:

```bash
nodemon --ignore tests/
```

- **Change file extensions to watch**:

```bash
nodemon --ext js,json
```

---

### **Comparison of Built-in Watch Mode vs. `nodemon`**

| Feature                | Node.js Built-in Watch Mode                     | `nodemon`                                           |
| ---------------------- | ----------------------------------------------- | --------------------------------------------------- |
| Setup                  | Simple, just use `--watch`                      | Requires installation                               |
| File Watching          | Watches `.js`, `.json`, `.mjs` files by default | Watches all project files                           |
| Configuration          | Limited (via `NODE_OPTIONS`)                    | Highly configurable (`nodemon.json`)                |
| Ignoring files/folders | Requires `NODE_OPTIONS`                         | Easy with `nodemon --ignore` flag or `nodemon.json` |
| Extensibility          | Basic                                           | Supports custom extensions and execution commands   |

### **Conclusion**

Both **Node.js watch mode** and **nodemon** provide effective ways to auto-restart a Node.js server when files change, helping developers by reducing the manual restart overhead.

- **Node.js built-in watch mode** is suitable for smaller projects or simpler setups, requiring minimal configuration.
- **`nodemon`** offers more features and flexibility, making it more suitable for larger projects or more complex workflows.

You can choose between the two based on the complexity of your project and your development needs.
## 10 - Create item
```js
app.post("/products", (req, res) => {
  const { id, name, price } = req.body;

  if (!id || !name || !price) {
    return res.status(400).send("Invalid request");
  }

  const newProduct = {
    id,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).send(newProduct);
});
```
## 11 - Update item
```js

app.put("/products/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).send("Invalid request");
  }

  const findIndex = products.findIndex((product) => product.id === productId);

  if (findIndex === -1) {
    return res.status(404).send("Product not found");
  }

  products[findIndex] = {
    ...products[findIndex],
    name,
    price,
  };

  res.status(200).send(products[findIndex]);
});
```
## 12 - Delete item
```js
app.delete("/products/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);

  const findIndex = products.findIndex((product) => product.id === productId);

  if (findIndex === -1) {
    return res.status(404).send("Product not found");
  }

  products.splice(findIndex, 1);

  res.status(200).send("Product deleted successfully");
});
```
## 13 - Middleware

## 14 - Model View Controller (MVC)

## 15 - Refactor code to MVC

## 16 - Router in express.js

