const products = require("../models/product.model");

const getAllProducts = (req, res) => {
  res.status(200).send(products);
};

const getProductsById = (req, res) => {
  const productID = parseInt(req.params.produtId);

  const findIndex = products.findIndex((product) => product.id === productID);

  if (isNaN(productID)) {
    return res.status(400).send("Invalid product id ");
  }

  if (findIndex === -1) {
    return res.status(404).send("Product not found");
  }

  res.status(200).send(products[findIndex]);
};

const createProduct = (req, res) => {
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
};

const updateProduct = (req, res) => {
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
};

const deleteProduct = (req, res) => {
  const productId = parseInt(req.params.productId);

  const findIndex = products.findIndex((product) => product.id === productId);

  if (findIndex === -1) {
    return res.status(404).send("Product not found");
  }

  products.splice(findIndex, 1);

  res.status(200).send("Product deleted successfully");
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProduct,
  updateProduct,
  deleteProduct,
};
