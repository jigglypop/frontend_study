import { gql } from "@apollo/react-hooks";

export const WRITEPOST = gql`
  mutation writePost($body: String!, $summary: String!, $title: String!) {
    writePost(body: $body, summary: $summary, title: $title) {
      id
      title
      summary
      body
    }
  }
`;



