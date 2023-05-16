import { PagesObj } from "../../types";
import Header from "../Layout/Header";
import Navigation from "../Layout/Navigation";
import InventoryPage from "./InventoryPage";
import MarketplacePage from "./MarketplacePage";
import MyOrdersPage from "./MyOrdersPage";
import PendingOrdersPage from "./PendingOrdersPage";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { AuthCtx } from "../../context/authCtx";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
const pages: PagesObj = {
  "/marketplace": <MarketplacePage />,
  "/inventory": <InventoryPage />,
  "/pending": <PendingOrdersPage />,
  "/myorders": <MyOrdersPage />,
};
const ContentPage = () => {
  // useMsalAuthentication(InteractionType.Redirect);
  const loc = useLocation();

  // const { name } = useContext(AuthCtx);
  // function Render() {
  //   const { accounts } = useMsal();
  //   console.log(accounts);

  //   try {
  //     const username = accounts[0].username;
  //     nameSetter(username);
  //   } catch (e) {
  //     console.log(e);

  //   }
  // }

  // if (name != "")
  //   return (
  //     <div className="wrapper">
  //       <Header />
  //       <div className="content">
  //         <Navigation />
  //         {pages[loc as keyof PagesObj]}
  //       </div>
  //     </div>
  //   );
  // else
  //   return (
  //     <>
  //       {/* {Render()} */}
  //       <div>Please wait...</div>
  //     </>
  //   );
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Navigation />
        {pages[loc.pathname as keyof PagesObj]}
      </div>
    </div>
  );
};

export default ContentPage;
