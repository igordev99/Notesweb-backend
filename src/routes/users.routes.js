const { Router } = require("express");

const UsersController = require("../controllers/Users.Controller");

const usersRoutes = Router();

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);

module.exports = usersRoutes;