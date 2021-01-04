import { gql } from "@apollo/react-hooks";

export const DELETE = gql`
  mutation deletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;