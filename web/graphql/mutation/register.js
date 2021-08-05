import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation Register($registerInput: registerInput) {
    register(user: $registerInput) {
      username
      email
      token
      createdAt
    }
  }
`;

export default REGISTER_USER;
