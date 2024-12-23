import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/onest";
import "./index.css";
import { Router } from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router />
    <ToastContainer />
  </StrictMode>
);
