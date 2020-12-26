import { createStore, Store, applyMiddleware } from 'redux';
import rootReducer, { RootState } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState?: RootState): Store =>
  createStore(rootReducer, preloadedState,composeWithDevTools());

export default configureStore;
