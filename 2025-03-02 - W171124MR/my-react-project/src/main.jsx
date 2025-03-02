import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")).render(
  React.createElement(App, null)
);

// 1. no need to to use the file extension in imports as long as the extension is (js, jsx)
// 2. for js files using jsx call them .jsx
// 3. can import css files, nothing is returned, during build include this css file
// 4. when the module is custom module from must start with "./", "../" if the module from "node_modules" the from will start with the name of the package "react"
