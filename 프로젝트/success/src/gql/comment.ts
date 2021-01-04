import { gql } from "@apollo/react-hooks";

export const COMMENTREAD = gql`
  query($postId: ID!) {
    readComment(postId: $postId) {
      comments {
        id
        body
        username
        createdAt
      }
    }
  }
`;


export const COMMENTWRITE = gql`
  mutation writeComment($postId: String!, $body: String!) {
    writeComment(postId: $postId, body: $body) {
      id
      body
      likes {
        id
        username
      }
    }
  }
`;
export const COMMENTDELETE = gql`
  mutation deleteComment($postId: ID!, $commentId: ID!) {
    deleteComment(postId: $postId, commentId: $commentId) {
      id
    }
  }
`;