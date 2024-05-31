const express = require("express");
const userRouter = express.Router();
const { getAllUsers } = require("../controllers/users.controller");

//! using isLoggedin middleware
userRouter.get("/", getAllUsers);

module.exports = userRouter;
