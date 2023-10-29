const express = require("express");
const OrdersController = require("../controllers/OrdersControllers");
const router = express.Router();

router.post('/orders/create', OrdersController.create)
router.get('/orders/showAll', OrdersController.showAll)

module.exports = router;