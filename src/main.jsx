import React from "react";
import Info from "./Info";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from "./App";
import Open from "./Open";

import "./index.css";
import "./App.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>

    <Routes>

   <Route
  path="/"
  element={<Open />}
/>
<Route
  path="/info"
  element={<Info />}
/>
<Route
  path="/dashboard"
  element={<App />}
/>
    </Routes>

  </BrowserRouter>
);