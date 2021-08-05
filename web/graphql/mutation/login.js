import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation Login($loginInput: loginInput) {
    login(user: $loginInput) {
      username
      email
      token
      createdAt
    }
  }
`;

export default LOGIN_USER;
