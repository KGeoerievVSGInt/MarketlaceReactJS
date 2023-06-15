import HomePage from "./pages/HomePage";
import { Routes, Route, Outlet } from "react-router-dom";
import Protected from "./routes/Protected";
import NotFoundPage from "./pages/NotFoundPage";
import { useContext } from "react";
import Navigation from "./components/Layout/Navigation";
import { HamburgerCtx } from "./context/hamburgerCtx";
import MarketplacePage from "./pages/MarketplacePage";
import MyOrdersPage from "./pages/MyOrdersPage";
import InventoryPage from "./pages/InventoryPage";
import PendingOrdersPage from "./pages/PendingOrdersPage";
import LentItemsPage from "./pages/LentItemsPage";
import BorrowedItemsPage from "./pages/BorrowedItemsPage";
import Header from "./components/Layout/Header";

const App = () => {
  const { isMenuShown } = useContext(HamburgerCtx);

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
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
