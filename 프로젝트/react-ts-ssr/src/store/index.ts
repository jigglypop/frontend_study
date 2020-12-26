import { createStore, Store, compose } from 'redux';
import rootReducer, { RootState } from './reducers';

// declare global {
//   interface Window {
//     __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//   }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState?: RootState): Store =>
  createStore(rootReducer, preloadedState);

export default configureStore;
