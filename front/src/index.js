import React from "react";
import App from "./App.js";
import { render } from "react-dom";
import GlobalStyle from "./theme/globalStyles";

import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";

import { IntlProvider } from "react-intl";
import { local, messages } from "./locales";

const store = configureStore();

const renderApp = () =>
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
if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./App.js", renderApp);
}
renderApp();
