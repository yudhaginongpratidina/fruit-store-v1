import express from "express";
import UserController from "./controller/UserController.js";

const router = express.Router();

// AUTH
router.post("/register", UserController.register)
router.post("/login", UserController.login)
router.get("/account/:id", UserController.account)
router.patch("/account/:id/update_password", UserController.updatePassword)

// CATEGORY PRODUCT
router.get("/category", (req, res) => {})
router.get("/category/:id", (req, res) => {})
router.post("/category", (req, res) => {})
router.patch("/category/:id", (req, res) => {})
router.delete("/category/:id", (req, res) => {})

// PRODUCT
router.get("/product", (req, res) => {})
router.get("/product/:id", (req, res) => {})
router.post("/product", (req, res) => {})
router.patch("/product/:id", (req, res) => {})
router.delete("/product/:id", (req, res) => {})


export default router