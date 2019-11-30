import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import theme from "helpers/theme";
import App from "./App";

const MOUNT_NODE = document.getElementById("mount");

import "./style.css";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  MOUNT_NODE
);
