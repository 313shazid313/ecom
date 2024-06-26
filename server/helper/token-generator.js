const jwt = require("jsonwebtoken");
const createJWTtoken = (expiresIn) => {
  var token = jwt.sign({ foo: "bar" }, "shhhhh");
  {
    expiresIn: "10m";
  }
};

module.exports = { createJWTtoken };
