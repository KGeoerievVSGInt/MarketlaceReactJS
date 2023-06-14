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
  EventType,
  AuthenticationResult,
} from "@azure/msal-browser";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HamburgerCtxProvider from "./context/hamburgerCtx.tsx";
import LentItemContextProvider from "./context/lentItemCtx.tsx";

const pca = new PublicClientApplication({
  auth: {
    clientId: "86ceffd4-8632-4677-bbb6-e7badafa26ec",
    authority:
      "https://login.microsoftonline.com/50ae1bf7-d359-4aff-91ac-b084dc52111e",
    redirectUri: "/",
  },
});
pca.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    pca.setActiveAccount(account);
  }
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
          <ToastContainer position="bottom-right" autoClose={1000} />
        </BrowserRouter>
      </Provider>
    </MsalProvider>
  </React.StrictMode>
);
