const express = require("express");
const {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductsById,
  updateProduct,
} = require("../controllers/product.controller");


const Router = express.Router();


Router.get("/", getAllProducts);
Router.get("/:produtId", getProductsById);
Router.post("", createProduct);
Router.put("/:productId", updateProduct);
Router.delete("/:productId", deleteProduct);
module.exports = Router;
