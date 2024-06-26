//packages
const createError = require("http-errors");
const mongoose = require("mongoose");

//imports
// const UserModelSchema = require("../model/users.model");

//logics for find an item,product,user from database
const findsomethingWithId = async (
  SchemaModel,
  userId,
  removeAnOption = {}
) => {
  try {
    // const removeAnOption = { password: 0 };
    const item = await SchemaModel.findById(userId, removeAnOption);

    // if data does not found
    if (!item) {
      // using http-reeors package
      throw createError(
        404,
        "item does not exist" //! using string literal
      );
      // without using http-error package
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
//logics for deleting an item,product,user from database

module.exports = { findsomethingWithId };
