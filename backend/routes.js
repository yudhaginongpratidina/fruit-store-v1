import express from "express";
import UserController from "./controller/UserController.js";
import CategoryController from "./controller/CategoryController.js";
import ProductController from "./controller/ProductController.js";

const router = express.Router();

// AUTH
router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.get("/account/:id", UserController.account)
router.patch("/account/:id/update_password", UserController.updatePassword)

// CATEGORY PRODUCT
router.get("/category", CategoryController.getCategory)
router.get("/category/:id", CategoryController.getCategoryById)
router.post("/category", CategoryController.createCategory)
router.patch("/category/:id", CategoryController.updateCategory)
router.delete("/category/:id", CategoryController.deleteCategory)

// PRODUCT
router.get("/product", ProductController.getProduct)
router.get("/product/:id", ProductController.getProductById)
router.post("/product", ProductController.createProduct)
router.patch("/product/:id", ProductController.updateProduct)
router.delete("/product/:id", ProductController.deleteProduct)


export default router