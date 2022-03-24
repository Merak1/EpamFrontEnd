import React from "react";
import ReactDOM from "react-dom";
import "./Styles/App.css";
import "./Styles/helpers/index.css";
import "./Styles/helpers/componentsIdentifiers.css";

import App from "./App";

// redux
import { Provider } from "react-redux";
// import { store } from "./store";
import store from "./store";

// webvitals
import reportWebVitals from "./reportWebVitals";
// React Router
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
