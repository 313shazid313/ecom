const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "username is required"],
      trim: true, //? used to remove empty space,
      minlenghh: [3, "minlength is 3"],
      maxlenghh: [31, "maxlength is 31"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true, //? used to remove empty space,
      unique: true,
      lowercase: true,
      minlenghh: [3, "minlength is 3"],
      maxlenghh: [20, "maxlength is 31"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlenghh: [6, "minlength is 6"],
      maxlenghh: [31, "maxlength is 31"],
    },
    address: {
      type: String,
      required: [true, "user address is required"],
    },
    phone: {
      type: String,
      required: [true, "user phone is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModelSchema = new mongoose.model("User", userModel);
module.exports = UserModelSchema;
