const { AuthenticationError } = require("apollo-server-express");
const Post = require("../../model/post");
const User = require("../../model/user");
const { checkAuth } = require("../../utils/check-auth");

module.exports = {
  Query: {
    async getPosts(_, args, context) {
      const { req, res } = context;
      await checkAuth(req);

      const posts = await Post.find()
        .populate("comments")
        .sort({ createdAt: -1 });

      return posts;
    },
    async getPost(_, { postId }, context) {
      const { req, res } = context;

      await checkAuth(req);

      const post = await Post.findById(postId).populate("comments");

      return post;
    },
  },
  Mutation: {
    async createPost(_, { post: { body } }, context) {
      const { req, res } = context;

      const { userId } = await checkAuth(req);

      const newPost = await Post.create({ body, user: userId });
      const post = await Post.findById(newPost._id).populate("comments");
      return post;
    },
    async updatePost(_, { postId, post: { body } }, context) {
      const { req, res } = context;

      await checkAuth(req);

      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { body },
        {
          new: true,
        }
      );

      return updatedPost;
    },
    async deletePost(_, { postId }, context) {
      const { req, res } = context;

      await checkAuth(req);

      await Post.findByIdAndDelete(postId);
      return true;
    },
  },
};
