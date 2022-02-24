const express = require("express");
const routes = express.Router();

const loginController = require("../controller/login.controller");

routes.post("/login/:user/:pass", loginController.postLogin);

module.exports = routes;
