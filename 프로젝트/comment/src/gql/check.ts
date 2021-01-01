import { gql } from "@apollo/react-hooks";


export const CHECK = gql`
  mutation check($username: String!) {
    check(username: $username) {
      id
      email
      username
      createdAt
    }
  }
`;



