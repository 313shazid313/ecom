const express = require("express");
const userRouter = express.Router();

const {
  getAllUsers,
  gettingASingleUser,
  deletingASingleUser,
  registerUser
} = require("../controllers/users.controller");

userRouter.get("/", getAllUsers);
userRouter.get("/:id", gettingASingleUser);
userRouter.delete("/:id", deletingASingleUser);
userRouter.post("/register-user", registerUser);

module.exports = userRouter;
