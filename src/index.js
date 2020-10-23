// System Imports
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider, Connect } from "react-redux";
import { createStore } from "redux";
import { searchRobots } from "./redux/reducers";

// Global Styling
import "./index.scss";
import "tachyons";

// Components
import App from "./containers/App";

// Misc
import * as serviceWorker from "./serviceWorker";

const store = createStore(searchRobots);

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
