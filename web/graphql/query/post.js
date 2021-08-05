import { gql } from "@apollo/client";

const GET_ALL_POSTS = gql`
  query Get_Posts {
    getPosts {
      id
      user {
        username
        email
      }
      comments {
        body
        createdAt
        user {
          username
        }
      }
      createdAt
      body
      images
    }
  }
`;

const GET_POST = gql`
  query getPost($postId: ID!) {
    getPost(postId: $postId) {
      body
      createdAt
      user {
        username
        email
      }
      comments {
        body
        createdAt
        user {
          username
        }
      }
      images
    }
  }
`;

export { GET_ALL_POSTS, GET_POST };
