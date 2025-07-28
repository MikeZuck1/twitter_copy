const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).render("tweets/tweet-list.pug");
});

module.exports = router;
