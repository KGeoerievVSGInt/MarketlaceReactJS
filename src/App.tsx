import HomePage from "./pages/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";
import Protected from "./routes/Protected";
import NotFoundPage from "./pages/NotFoundPage";
import { useIsAuthenticated, useMsalAuthentication } from "@azure/msal-react";
import { useEffect, useContext } from "react";
import { InteractionType } from "@azure/msal-browser";
import Navigation from "./components/Layout/Navigation";
import { HamburgerCtx } from "./context/hamburgerCtx";
import MarketplacePage from "./pages/MarketplacePage";
import MyOrdersPage from "./pages/MyOrdersPage";
import InventoryPage from "./pages/InventoryPage";
import PendingOrdersPage from "./pages/PendingOrdersPage";
import LentItemsPage from "./pages/LentItemsPage";
import BorrowedItemsPage from "./components/Elements/BorrowedItemsElements/BorrowedItemsPage";
import Header from "./components/Layout/Header";

const App = () => {
  const { isMenuShown } = useContext(HamburgerCtx);
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
        <Route
          path="/"
          element={
            <div className="wrapper">
              <Header />
              <div className="content">
                <Navigation />
                {!isMenuShown && <Outlet />}
              </div>
            </div>
          }
        >
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/myorders" element={<MyOrdersPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/pending" element={<PendingOrdersPage />} />
          <Route path="/lent" element={<LentItemsPage />} />
          <Route path="/borrowed" element={<BorrowedItemsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
