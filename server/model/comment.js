const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    body: String,

    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

commentSchema.pre(/^find/, function () {
  this.populate({
    path: "user",
  }).populate({
    path: "post",
  });
});
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
