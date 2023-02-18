import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

import "./index.scss";
import { store } from "./Services/Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <IntlProvider locale={navigator.language}>
          <App />
        </IntlProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
