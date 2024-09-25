const express = require("express");
const { userRegistration, userLogin } = require("../Controllers/UserController");
const route= express.Router();

route.post("/createUser",userRegistration);
route.post("/loginUser",userLogin);

module.exports=route;