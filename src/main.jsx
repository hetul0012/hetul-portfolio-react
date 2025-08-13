import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// existing CSS
import "../src/styles/styles.css";
import "../src/styles/mediaquery.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
