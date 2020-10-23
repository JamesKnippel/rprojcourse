// System Imports
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { searchRobots, requestRobots } from "./redux/reducers";
import thunkMiddleware from 'redux-thunk';


// Global Styling
import "./index.scss";
import "tachyons";

// Components
import App from "./containers/App";

// Misc
import * as serviceWorker from "./serviceWorker";

const rootReducer = combineReducers({ searchRobots, requestRobots });
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
