import { hydrate } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ApolloProvider } from '@apollo/react-hooks';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { server_url } from './lib/server_url';

const client = new ApolloClient({
  link: new HttpLink({
    uri: server_url,
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }),
  cache: new InMemoryCache(),
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

loadableReady(() => {
  const rootElement = document.getElementById('root');
  hydrate(
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>,
    rootElement,
  );
});

if (module.hot) {
  module.hot.accept();
}



