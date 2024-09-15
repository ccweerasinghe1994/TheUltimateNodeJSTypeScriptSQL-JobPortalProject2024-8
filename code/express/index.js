const express = require("express");
const app = express();
const port = 3000;
const path = require("node:path");
const fs = require("node:fs");

const products = [
  {
    id: 111,
    name: "product1",
    price: 100,
  },
  {
    id: 222,
    name: "product2",
    price: 200,
  },
  {
    id: 333,
    name: "product3",
    price: 300,
  },
];

app.get("/", (req, res) => {
  res.status(200).send(products);
});

app.get("/products/:produtId", (req, res) => {
  const productID = parseInt(req.params.produtId);

  const findIndex = products.findIndex((product) => product.id === productID);

  if (isNaN(productID)) {
    return res.status(400).send("Invalid product id ");
  }

  if (findIndex === -1) {
    return res.status(404).send("Product not found");
  }

  res.status(200).send(products[findIndex]);
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

app.delete("/products/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);

  const findIndex = products.findIndex((product) => product.id === productId);

  if (findIndex === -1) {
    return res.status(404).send("Product not found");
  }

  products.splice(findIndex, 1);

  res.status(200).send("Product deleted successfully");
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
