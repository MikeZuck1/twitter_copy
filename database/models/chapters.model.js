const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chapterSchema = new schema({
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    nbrOfLessons: { type: Number, required: true },
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
