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

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
// sagaMiddleware.run()
loadableReady(() => {
  const rootElement = document.getElementById('root');
  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Provider>,
    rootElement,
  );
});

if (module.hot) {
  module.hot.accept();
}
