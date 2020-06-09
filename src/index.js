import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { history } from "./routers/AppRouter";
import { firebase } from "./firebase/firebase";
import { login, logout } from './actions/auth';
import Store from "./store";

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
    hasRendered = true;
  }
};
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.uid)
    Store.dispatch(login(user.uid));
    // Store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    // });
  } else {
    console.log('yes')
    Store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
