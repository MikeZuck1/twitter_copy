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

const Chapter = mongoose.model("chapters", chapterSchema);

module.exports = Chapter;