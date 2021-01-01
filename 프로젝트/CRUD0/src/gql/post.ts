import { gql } from "@apollo/react-hooks";

export const POST = gql`
  query($postId: ID!) {
    readPost(postId: $postId) {
      id
      title
      body
      username
      createdAt
      likes {
        id
      }
    }
  }
`;