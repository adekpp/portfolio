import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

const btnDefault = localStorage.getItem("btn");
if (btnDefault === null) {
  localStorage.setItem("btn", "#333");
}
const themeDefault = localStorage.getItem("mode");
if (themeDefault === null) {
  localStorage.setItem("mode", "light");
}

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);
