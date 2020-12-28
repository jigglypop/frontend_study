import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';


import { ApolloProvider } from '@apollo/react-hooks';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:5000/graphql',
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

reportWebVitals();
