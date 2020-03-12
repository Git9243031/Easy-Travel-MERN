import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import axios from "axios";
import { IntlProvider } from "react-intl";
import { local, messages } from "./locales";

import "./theme/reset.css";
import GlobalStyle from "./theme/globalStyles";
import "antd/dist/antd.css";

import App from "./App";
import { configureStore } from "./redux/configureStore";
import * as serviceWorker from "./serviceWorker";

require("dotenv").config();

const store = configureStore();

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

// axios.interceptors.response

// axios.interceptors.request.use(config => {
//   const userData = localStorage.getItem("auth");

//   if (!userData) return config;

//   const token = JSON.parse(userData).token;

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <IntlProvider locale={local} messages={messages}>
        <App />
      </IntlProvider>
    </Provider>
  </>,
  document.getElementById("root")
);
serviceWorker.unregister();
