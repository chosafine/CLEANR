import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./utils/index";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// We are wrapping the app in a Provider as we're using redux for our store
// and would like the store to be globally available as context to the app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// Registering Service Worker
serviceWorker.register();
