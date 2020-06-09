import React from "react";
import logo from "./logo.svg";
import "./scss/App.scss";
import Store from "./store";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import "./firebase/firebase";

function App() {
  return (
    // <div className="App">
    <div>
      <Provider store={Store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

export default App;
