const express = require("express");
const ProductsController = require("../controllers/ProductsController.js");
const router = express.Router();

router.post('/products/create', ProductsController.create);
router.put('/products/updateByID/:id', ProductsController.updateByID);
router.get('/products/getAll', ProductsController.getAll);
router.get('/products/getByID/:id', ProductsController.getByID);
router.get('/products/orderDesc', ProductsController.orderDesc);
router.get('/products/getByName/:name', ProductsController.getByName);
router.delete('products/deleteByID/:id', ProductsController.deleteByID)

module.exports = router;