import { gql, useMutation } from "@apollo/react-hooks";



export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

const [addUser] = useMutation(LOGIN, {
    update(proxy, result) {
      console.log(result)
    },
    onError(err:any) {
      console.log(err)
    },
    variables: {
      username: "ydh2244",
      password: "1127star",
    },
  });