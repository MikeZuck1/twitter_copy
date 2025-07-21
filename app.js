const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
require("./database"); // Import the database connection
const routing = require("./routes"); // check by default index.js
const port = process.env.PORT;

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "pug ");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
// define our routes.
app.use(routing); 

app.listen(port);
