const express = require("express");
const CategoriesController = require("../controllers/CategoriesController.js");
const router = express.Router();

router.post('/create', CategoriesController.create);
router.put('/updateByID/:id', CategoriesController.updateByID);
router.get('/getAll', CategoriesController.getAll);
router.get('/getByID/:id', CategoriesController.getByID);

module.exports = router;