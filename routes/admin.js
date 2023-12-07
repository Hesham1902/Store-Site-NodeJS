const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");
const isAuth = require("../middleware/isAuth");
const { check, body } = require("express-validator");
const {productValidation} = require("../middleware/validations");
const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get("/products", isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post(
  "/add-product",
  productValidation,
  isAuth,
  adminController.postAddProduct
);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post(
  "/edit-product",
  productValidation,
  isAuth,
  adminController.postEditProduct
);

router.delete("/delete-product/:productId", isAuth, adminController.deleteProduct);

module.exports = router;
