const router = require("express").Router();

router.post("/", (req, res) => {
  console.log("Route OK");
  res.end();
});

module.exports = router;
