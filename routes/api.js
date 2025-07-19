const express = require("express");
const router = express.Router();
const Chapter = require("../database/models/chapters.model");

router.get("/", (req, res) => {
  Chapter.find({})
    .exc()
    .then((doc) => {
      res.json(doc);
    });
});

module.exports = router;
