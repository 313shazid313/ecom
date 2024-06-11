const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require("http-errors");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/users.route");
const seedforRoutingTest = require("./routers/seed.router");
const { responseForError } = require("./controllers/res.controller");
//! for adding package to devDependencies insted of dipendencies (morgan , nodemon are devDependencies)
//! command =====>  npm install --save-dev morgan
//! app.use middleware works for all the requrst in the project. it is an application lavel middleware

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 10,
  message: "too manu requist, please try again later",
});

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(rateLimiter);
app.use("/api/users", userRouter);
app.use("/all", seedforRoutingTest);

//!cliant error handeling middleware for handeling invalid router error-------->
app.use((req, res, next) => {
  return next(createError(404, "route not found"));
});

//! server error handeling middleware ---------->
app.use((err, req, res, next) => {
  // return res.status(err.status || 500).json({
  //   passed: false,
  //   message: err.message,
  // });

  //? seprate error handeling
  return responseForError(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
