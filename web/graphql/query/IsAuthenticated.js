import { gql } from "@apollo/client";

const IS_AUTHENTICATED = gql`
  query {
    IsAuthenticated {
      user {
        username
        email
      }
      isAuthenticated
    }
  }
`;

export default IS_AUTHENTICATED;
