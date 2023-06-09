import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { MsalProvider } from "@azure/msal-react";
import App from "./App.tsx";
import "./styles.scss";
import {
  PublicClientApplication,
} from "@azure/msal-browser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HamburgerCtxProvider from "./context/hamburgerCtx.tsx";
import LentItemContextProvider from "./context/lentItemCtx.tsx";

export const pca = new PublicClientApplication({
  auth: {
    clientId: "86ceffd4-8632-4677-bbb6-e7badafa26ec",
    authority:
      "https://login.microsoftonline.com/50ae1bf7-d359-4aff-91ac-b084dc52111e",
    redirectUri: "/",
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MsalProvider instance={pca}>
      <Provider store={store}>
        <BrowserRouter>
          <HamburgerCtxProvider>
            <LentItemContextProvider>
              <App />
            </LentItemContextProvider>
          </HamburgerCtxProvider>
        </BrowserRouter>
      </Provider>
    </MsalProvider>
    <ToastContainer position="bottom-right" autoClose={2000} />
  </React.StrictMode>
);
