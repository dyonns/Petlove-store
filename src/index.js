import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { App } from "./pages/App";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("app")).render(
  //   <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //   </Provider>
);
