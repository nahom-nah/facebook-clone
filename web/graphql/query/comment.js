import { gql } from "@apollo/client";

const GET_ALL_COMMENTS = gql`
  query Get_Comments($postId: ID!) {
    getComments(postId: $postId) {
      body
      createdAt
      user {
        username
        email
      }

      post {
        body
        images
      }
    }
  }
`;

export { GET_ALL_COMMENTS };
