const express = require("express");
const userRouter = express.Router();
const {
  getAllUsers,
  gettingASingleUser,
  deletingASingleUser
} = require("../controllers/users.controller");

userRouter.get("/", getAllUsers);
userRouter.get("/:id", gettingASingleUser);
userRouter.delete("/:id", deletingASingleUser);

module.exports = userRouter;
