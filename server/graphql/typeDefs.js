const { gql } = require("apollo-server-express");
module.exports = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    token: String!
    createdAt: String!
  }
  input registerInput {
    username: String!
    email: String!
    password: String!
    confirmPassword: String!
  }
  input loginInput {
    email: String!
    password: String!
  }
  type authenticatedUser {
    user: User!
    isAuthenticated: Boolean!
  }
  type Post {
    id: ID!
    body: String!
    images: [String]!
    createdAt: String!
    comments: [Comment]
    user: User!
  }
  input postInput {
    body: String!
  }
  type Comment {
    body: String!
    createdAt: String!
    user: User!
    post: Post!
  }
  type Query {
    hello: String!
    IsAuthenticated: authenticatedUser!
    getPosts: [Post]!
    getPost(postId: ID!): Post!
    getComments(postId: ID!): [Comment]!
    getComment(commentId: ID!): Comment!
  }

  input CommentInput {
    body: String!
    post: ID!
  }
  input LikeInput {
    postId: ID
    commentId: ID
  }
  type Mutation {
    register(user: registerInput): User!
    login(user: loginInput): User!
    createPost(post: postInput): Post!
    updatePost(postId: ID!, post: postInput): Post!
    deletePost(postId: ID!): Boolean!
    createComment(comment: CommentInput): Comment!
    like(like: LikeInput): Boolean
    unlike(like: LikeInput): Boolean
  }
`;
