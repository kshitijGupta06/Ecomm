import express from "express";
import ProductController from "C:/Users/kshitij/Ecomm/src/controllers/ProductController"; // Default import

const router = express.Router();

// Directly using static methods from ProductController
router.post("/products", ProductController.createProduct);
router.get("/products/:id", ProductController.getProduct);
router.put("/products/:id", ProductController.updateProduct);
router.delete("/products/:id", ProductController.deleteProduct);

export default router;
