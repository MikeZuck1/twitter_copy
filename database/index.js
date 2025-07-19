const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/chapters", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
