const express = require("express");
const UsersController = require("../controllers/UsersControllers");
const router = express.Router();

router.post('/users/create', UsersController.create);
router.put('/users/updateByName/:user_name', UsersController.updateByName)
router.get('/users/showAll', UsersController.showAll)
router.get('/users/selectUsersByID/:id', UsersController.selectUserByID)
router.delete('/users/deleteByID/:id', UsersController.deleteByID)

module.exports = router;