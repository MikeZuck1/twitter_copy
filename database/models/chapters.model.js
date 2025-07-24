const mongoose = require("mongoose");
const schema = mongoose.Schema;

const chapterSchema = new schema(
  {
    title: {
      type: {
        type: String,
        required: true,
        enum: ["chapter", "section", "sub-section"], // check if field match with the array values.
        trim: true,
      },
      required: [true, "title is required..."],
      minlength: [3, "very short title"],
      maxlength: [10, "long title.. must be less than 10..."],
    },
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
