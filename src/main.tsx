import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import AuthCtxProvider from "./context/authCtx.tsx";
import "./styles.scss";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthCtxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthCtxProvider>
  </React.StrictMode>
);
