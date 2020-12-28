import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
