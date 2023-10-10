import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { UrlProvider } from "../src/Context/UrlContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UrlProvider>
    <App />
  </UrlProvider>
);
