import React from "react";
import ReactDOM from "react-dom/client";
import { IntlProvider } from "react-intl";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

import "./index.scss";
import { store } from "./Services/Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"))

// Specific test for gh-pages on project p14
const localPath = window.location.pathname.startsWith("/ocr_p14_wealth_health") ? "/ocr_p14_wealth_health" : ""
console.log(localPath)

root.render(
  <React.StrictMode>
    <BrowserRouter basename={localPath}>
      <Provider store={store}>
        <IntlProvider locale={navigator.language}>
          <App />
        </IntlProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
