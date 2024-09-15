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
