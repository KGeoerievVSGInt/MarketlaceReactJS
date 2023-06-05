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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HamburgerCtxProvider from "./context/hamburgerCtx.tsx";
import LentItemContextProvider from "./context/lentItemCtx.tsx";
const msalInstance = new PublicClientApplication(msalConfig);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <Provider store={store}>
        <AuthCtxProvider>
          <BrowserRouter>
            <HamburgerCtxProvider>
              <LentItemContextProvider>
                <App />
              </LentItemContextProvider>
            </HamburgerCtxProvider>
            <ToastContainer position="bottom-right" autoClose={1000} />
          </BrowserRouter>
        </AuthCtxProvider>
      </Provider>
    </MsalProvider>
  </React.StrictMode>
);
