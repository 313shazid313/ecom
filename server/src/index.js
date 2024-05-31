const app = require("./app");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/ecom")
  .then(() => {
    console.log("connected");
    app.listen(process.env.PORT, () => {
      console.log(`lisenng at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("failed", error);
  });
