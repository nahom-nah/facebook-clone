const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    body: String,
    images: [String],

    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.virtual("comments", {
  foreignField: "post",
  localField: "_id",
  ref: "Comment",
});
postSchema.pre(/^find/, function () {
  this.populate({
    path: "user",
  });
});
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
