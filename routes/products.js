const express = require("express");
const ProductsController = require("../controllers/ProductsController.js");
const router = express.Router();

router.post('/create', ProductsController.create);
router.put('/updateByID/:id', ProductsController.updateByID);
router.get('/getAll', ProductsController.getAll);
router.get('/getByID/:id', ProductsController.getByID);
router.get('/orderDesc', ProductsController.orderDesc);
router.get('/getByName/:name', ProductsController.getByName);
router.delete('deleteByID/:id', ProductsController.deleteByID)

module.exports = router;