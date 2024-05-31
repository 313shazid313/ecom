const data = require("../data");
const UserModelSchema = require("../model/users.model");

const seedUser = async (req, res, next) => {
  try {
    await UserModelSchema.deleteMany({});

    const allUser = await UserModelSchema.insertMany(data.users);

    return res.status(201).json(allUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { seedUser };
