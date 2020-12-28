import React, { useEffect } from 'react'
import Mouse from './components/Mouse'
import SaveButton from './components/SaveButton'
import SaveButtonConstructor from './components/SaveButtonConstructor'

import { useMutation, useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';


const POST_GQL = gql`
  query($postId: ID!) {
    readPost(postId: $postId) {
      id
      title
      body
      username
    }
  }
`;

const App = ()=> {
  const postId = "5fe91e7f53a5501da8005c66";
  const { data } = useQuery(POST_GQL, {
    variables: {
      postId,
    },
  });
  useEffect(()=>{
    console.log(data)
  },[data])
  return (
    <div>
      <SaveButton/>
      <SaveButtonConstructor/>
      <Mouse/>
      <button >클릭</button>
    </div>
  );
}

export default App;
