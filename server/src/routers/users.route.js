const express = require("express");
const userRouter = express.Router();
const {
  getAllUsers,
  gettingASingleUser,
} = require("../controllers/users.controller");

userRouter.get("/", getAllUsers);
userRouter.get("/:id", gettingASingleUser);

module.exports = userRouter;
