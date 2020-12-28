import { hydrate } from 'react-dom';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import { Provider } from 'react-redux';

// import configureStore from './store';
import GlobalStyle from './styles/GlobalStyle';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

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

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// sagaMiddleware.run()
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



