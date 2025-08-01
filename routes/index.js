const router = require("express").Router();
const api = require("./api");
const Tweet = require("../database/models/tweet.model");

router.use("/api", api);

router.get("/tweet/new", (req, res) => {
  res.status(200).render("tweets/tweet-form");
});

router.get("/", (req, res) => {
  res.status(200).render("tweets/tweet-list.pug");
});

module.exports = router;
