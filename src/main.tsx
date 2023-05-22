import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AuthCtxProvider from "./context/authCtx.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./auth/authConfig.tsx";
import App from "./App.tsx";
import "./styles.scss";
import { PublicClientApplication } from "@azure/msal-browser";

const msalInstance = new PublicClientApplication(msalConfig);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <AuthCtxProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthCtxProvider>
      </Provider>
    </MsalProvider>
  </React.StrictMode>
);
