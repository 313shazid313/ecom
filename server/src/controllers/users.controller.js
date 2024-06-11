//packages



// files
const UserModelSchema = require("../model/users.model");
const { responseForSuccess } = require("../controllers/res.controller");
const { findUserById } = require("../services/find.user.by.id");

// controllers logic

// getting all users at a time
const getAllUsers = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const searchRegularExpression = new RegExp(".*" + search + ".*", "i");

    const filter = {
      isAdmin: { $ne: true }, //! $ne means "not equal"
      //* isAdmin: false, //we can alse do this insted of //isAdmin: { $ne: true }//

      $or: [
        { name: { $regex: searchRegularExpression } },
        { email: { $regex: searchRegularExpression } },
        { name: { $regex: searchRegularExpression } },
      ],
    };

    const options = { password: 0 };
    //* another way  const options = { password: false };

    const allUsers = await UserModelSchema.find(filter, options)
      .limit(limit)
      .skip((page - 1) * limit);

    const count = await UserModelSchema.find(filter).countDocuments();

    if (!allUsers) throw createError(404, "no users");

    //! success handeling -------------> method 1
    // res.status(200).send({
    //   message: "users are : ",
    //   allUsers,
    //   pagination: {
    //     totalPages: Math.ceil(count / limit),
    //     currentPage: page,
    //     previouspage: page - 1 > 0 ? page - 1 : null,
    //     nextPAge: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
    //   },
    // });

    //! success handeling -------------> method 2
    return responseForSuccess(res, {
      statusCode: 200,
      message: "Getting all users",
      payload: {
        allUsers,
        pagination: {
          totalPages: Math.ceil(count / limit),
          currentPage: page,
          previouspage: page - 1 > 0 ? page - 1 : null,
          nextPAge: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

// getting a single user at a time
const gettingASingleUser = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const anUser = await findUserById(userId);

    return responseForSuccess(res, {
      statusCode: 200,
      message: "User is getting successfully",
      payload: { anUser },
    });
  } catch (error) {
    // for handeling any mongoose error

    next(error);
  }
};

module.exports = { getAllUsers, gettingASingleUser };
