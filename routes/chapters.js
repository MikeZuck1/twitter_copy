const router = require("express").Router();
// const Chapter = require("../database/models/chapters.model");
const Chapters = require("../database/models/chapters.model");

router.post("/", (req, res) => {
  console.log("Route OK");
  const body = req.body;
  console.log({ body });
  const newChapter = new Chapters({
    ...body, // get each body (values)
    active: body.active ? true : false, // return true or false bc active is a boolean.
  });

  console.log({ newChapter });

  newChapter
    .save()
    .then((chapter) => {
      console.log({ chapter });
      res.redirect("/");
    })
    .catch((err) => {
      const errors = err.errors;
      console.log(
        util.inspet(errors, {
          compact: true,
          depth: 5,
          breakLength: 80,
          colors: true,
        })
      );
      res.status(404).render("index");
    });
});

module.exports = router;
