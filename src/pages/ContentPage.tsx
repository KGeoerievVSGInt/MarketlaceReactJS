import { PagesObj } from "../types";
import Header from "../components/Layout/Header";
import Navigation from "../components/Layout/Navigation";
import InventoryPage from "../components/Elements/InventoryElements/InventoryPage";
import MarketplacePage from "../components/Elements/MarketplaceElements/MarketplacePage";
import MyOrdersPage from "../components/Elements/MyOrdersElements/MyOrdersPage";
import PendingOrdersPage from "../components/Elements/PendingOrdersElements/PendingOrdersPage";
import { useLocation } from "react-router-dom";
import { HamburgerCtx } from "../context/hamburgerCtx";
import { useContext } from "react";
import LentItemsPage from "../components/Elements/LentItemsElements/LentItemsPage";
import BorrowedItemsPage from "../components/Elements/BorrowedItemsElements/BorrowedItemsPage";
const pages: PagesObj = {
  "/marketplace": <MarketplacePage />,
  "/inventory": <InventoryPage />,
  "/pending": <PendingOrdersPage />,
  "/myorders": <MyOrdersPage />,
  "/lent": <LentItemsPage />,
  "/borrowed": <BorrowedItemsPage />,
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
