const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals },
  }
);

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
