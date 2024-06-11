//packages
const createError = require("http-errors");
const mongoose = require("mongoose");

//imports
const UserModelSchema = require("../model/users.model");

//logics
const findUserById = async (userId) => {
  try {
    const removeAnOption = { password: 0 };
    const item = await UserModelSchema.findById(userId, removeAnOption);

    // if data does not found
    if (!item) {
      // using http-reeors package
      throw createError(404, "user does not exist // invalid user id");
      // without usin http-error package
      // throw res.json(404, { mesasge: "User does not exist" });
    }
    return item;
  } catch (error) {
    // wrong id
    if (error instanceof mongoose.Error) {
      throw createError(400, "user does not exist or invalid user id");
    }
    throw error;
  }
};

module.exports = { findUserById };
