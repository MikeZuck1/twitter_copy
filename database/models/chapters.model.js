const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chapterSchema = new schema(
  {
    title: String,
    nbrOfLessons: { type: Number, require: true },
    index: Number,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

chapterSchema.pre("save", function () {
  return Chapters.countDocuments()
    .exec()
    .then((nbr) => (this.index = nbr + 1));
});

const Chapter = mongoose.model("chapters", chapterSchema);

module.exports = Chapter;
