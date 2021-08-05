import { gql } from "@apollo/client";
const CREATE_POST = gql`
  mutation createPost($postInput: postInput) {
    createPost(post: $postInput) {
      user {
        username
        email
      }
      createdAt
      comments {
        body
      }
      body
    }
  }
`;
const UPDATE_POST = gql`
  mutation updatePost($postId: ID!, $updateBody: postInput) {
    updatePost(postId: $postId, post: $updateBody) {
      body
      createdAt
      images
      user {
        username
        email
      }
    }
  }
`;
const DELETE_POST = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export { CREATE_POST, UPDATE_POST, DELETE_POST };
