const express = require("express");
const api = require("./api");

const router = express.Router();

router.use("/api", api);

router.get("/", (req, res) => {
  res.status(200).render("home");
});

module.exports = router;
