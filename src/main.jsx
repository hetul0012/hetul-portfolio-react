import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Your original CSS files (copied below)
import "../src/styles/styles.css";
import "../src/styles/mediaquery.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
