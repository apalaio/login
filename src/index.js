import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import configureStore from "./reducer/configure-store";
import { Provider } from "react-redux";

import "./index.css";

import RegisterForm from "./components/RegisterForm";
import App from "./components/App";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <RegisterForm path="register" />
        <App path="/" />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
