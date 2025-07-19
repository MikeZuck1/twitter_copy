const path = require("path");
const express = require("express");
const app = express();
const morgan = require("morgan");
require("./database"); // Import the database connection
const api = require("./routes/api");
const index = require("./routes");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug ");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.use("/api", api); // define our API routes.
app.use(index); // define our routes.

app.listen(3000);
