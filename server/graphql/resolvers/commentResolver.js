const Comment = require("../../model/comment");
const { checkAuth } = require("../../utils/check-auth");

module.exports = {
  Query: {
    async getComments(_, { postId }, context) {
      const { req, res } = context;
      await checkAuth(req);

      const comments = await Comment.find({ post: postId }).sort({
        createdAt: -1,
      });
      console.log(comments);
      return comments;
    },
    async getComment(_, { commentId }, context) {
      const { req, res } = context;
      await checkAuth(req);

      const comment = await Comment.findById(commentId);
      return comment;
    },
  },
  Mutation: {
    async createComment(_, { comment: { body, post } }, context) {
      const { req, res } = context;
      const { userId } = await checkAuth(req);

      const newComment = await Comment.create({ body, user: userId, post });
      const comment = await Comment.findById(newComment._id);
      return comment;
    },
  },
};
