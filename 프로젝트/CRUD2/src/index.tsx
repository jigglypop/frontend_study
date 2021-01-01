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
import { tempSetUser } from './modules/check/actions';

const client = new ApolloClient({
  link: new HttpLink({
    uri: server_url,
    headers: {
      authorization: "Bearer " + localStorage.getItem('token'),
    },
  }),
  cache: new InMemoryCache(),
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

function checkUser(){
  try{
    const username = localStorage.getItem("username")
    if (!username) return
    store.dispatch(tempSetUser(username))
  }catch(e){
    console.log(e)
  }
}

if (process.env.NODE_ENV !== 'production') {
  loadableReady(() => {
    checkUser()
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
}
if (module.hot) {
  module.hot.accept();
}



