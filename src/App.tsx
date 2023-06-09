import HomePage from "./components/Elements/HomeElements/HomePage";
import ContentPage from "./pages/ContentPage";
import { Routes, Route } from "react-router-dom";
import Protected from "./routes/Protected";
import NotFoundPage from "./pages/NotFoundPage";
import { useIsAuthenticated, useMsalAuthentication } from "@azure/msal-react";
import { useEffect } from "react";
import { InteractionType } from "@azure/msal-browser";

const App = () => {
  const { result, error } = useMsalAuthentication(InteractionType.Silent, {
    scopes: ["user.read"],
  });
  const isAuthenticated = useIsAuthenticated();
  useEffect(() => {
    if (isAuthenticated) {
      if (!!error) {
        console.log(error);
        return;
      }
      if (result) {
        const { idToken } = result;
        sessionStorage.setItem("token", idToken);
      }
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<Protected />}>
        <Route path="/marketplace" element={<ContentPage />} />
        <Route path="/myorders" element={<ContentPage />} />
        <Route path="/inventory" element={<ContentPage />} />
        <Route path="/pending" element={<ContentPage />} />
        <Route path="/lent" element={<ContentPage />} />
        <Route path="/borrowed" element={<ContentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
