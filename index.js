import React from "react";
import ReactDOM from "react-dom/client";
import App, { router } from "./src/App";
import { RouterProvider } from "react-router-dom";
import "./main.css";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
