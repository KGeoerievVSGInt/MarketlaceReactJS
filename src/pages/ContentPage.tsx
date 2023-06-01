import { PagesObj } from "../types";
import Header from "../components/Layout/Header";
import Navigation from "../components/Layout/Navigation";
import InventoryPage from "../components/Pages/InventoryPage";
import MarketplacePage from "../components/Pages/MarketplacePage";
import MyOrdersPage from "../components/Pages/MyOrdersPage";
import PendingOrdersPage from "../components/Pages/PendingOrdersPage";
import { useLocation } from "react-router-dom";
import { HamburgerCtx } from "../context/hamburgerCtx";
import { useContext } from "react";
const pages: PagesObj = {
  "/marketplace": <MarketplacePage />,
  "/inventory": <InventoryPage />,
  "/pending": <PendingOrdersPage />,
  "/myorders": <MyOrdersPage />,
};

const ContentPage = () => {
  const loc = useLocation();
  const { isMenuShown } = useContext(HamburgerCtx);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Navigation />
        {!isMenuShown && pages[loc.pathname as keyof PagesObj]}
      </div>
    </div>
  );
};

export default ContentPage;
