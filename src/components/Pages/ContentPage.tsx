import { PagesObj } from "../../types";
import Header from "../Layout/Header";
import Navigation from "../Layout/Navigation";
import InventoryPage from "./InventoryPage";
import MarketplacePage from "./MarketplacePage";
import MyOrdersPage from "./MyOrdersPage";
import PendingOrdersPage from "./PendingOrdersPage";

const pages: PagesObj = {
  "/marketplace": <MarketplacePage />,
  "/inventory": <InventoryPage />,
  "/pending": <PendingOrdersPage />,
  "/myorders": <MyOrdersPage />,
};
const ContentPage = () => {
  const loc = location.pathname;

  
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Navigation />
        {pages[loc as keyof PagesObj]}
      </div>
    </div>
  );
};

export default ContentPage;
