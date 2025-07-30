const express = require("express");
const morgan = require("morgan");
const path = require("path");
const index = require("./routes");
const dotenv = require("dotenv").config();
require('./database');

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("combined"));

// define our routes.
app.use(index); // put index instead of routing -- remove routing

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
