const router = require("express").Router();

router.get("/tweet/new", (req, res) => {
  res.status(200).render("tweets/tweet-form");
});

router.get("/", (req, res) => {
  res.status(200).render("tweets/tweet-list.pug");
});

module.exports = router;