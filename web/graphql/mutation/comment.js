import { gql } from "@apollo/client";

const CREATE_COMMENT = gql`
  mutation createComment($commentInput: CommentInput) {
    createComment(comment: $commentInput) {
      body
      createdAt
      user {
        username
        email
      }
      post {
        id
        body
        images
      }
    }
  }
`;

export { CREATE_COMMENT };
