import { gql } from "@apollo/react-hooks";

export const LIST= gql`
query($page: Int!) {
  listPosts(page: $page) {
    id
    title
    summary
    username
    createdAt
    likes {
      id
      username
    }
    comments {
      id
      username
      body
    }
  }
}
`;