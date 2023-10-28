const express = require("express");
const CategoriesController = require("../controllers/CategoriesController.js");
const router = express.Router();

router.post('/categories/create', CategoriesController.create);
router.put('/categories/updateByID/:id', CategoriesController.updateByID);
router.get('/categories/getAll', CategoriesController.getAll);
router.get('/categories/getByID/:id', CategoriesController.getByID);

module.exports = router;