const mongoose = require("mongoose");

const databaseConnection = () => {
  mongoose
    .connect("mongodb://localhost:27017/pagination1")
    .then(() => {
      console.log("Database connected successfully !");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = databaseConnection;
