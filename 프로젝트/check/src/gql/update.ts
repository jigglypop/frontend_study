import { gql } from "@apollo/react-hooks";

export const UPDATEPOST = gql`
  mutation updatePost($postId:String!, $body: String!, $summary: String!, $title: String!) {
    updatePost(postId: $postId, body: $body, summary: $summary, title: $title) {
      id
      title
      summary
      body
    }
  }
`;



