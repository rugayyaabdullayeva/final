const express = require("express");
const productController = require("../controller/productController");

const router = express.Router();

router.post("/products", productController.AddProduct);
router.get("/products", productController.GetProduct);
router.get("/products/:id", productController.GetProductById);
router.delete("/products/:id", productController.DeleteProduct);
router.put("/products/:id", productController.UpdateProduct);

module.exports = router;
