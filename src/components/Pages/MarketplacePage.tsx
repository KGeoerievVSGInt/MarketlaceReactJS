import CardItem from "../Elements/MarketplaceElements/CardItem";
import { useGetMarketDataQuery } from "../../redux/dataSlice";
import { useContext } from "react";
import { HamburgerCtx } from "../../context/hamburgerCtx";

const MarketplacePage = () => {
  const { data } = useGetMarketDataQuery("");
  const { isMenuShown } = useContext(HamburgerCtx);
  if (!data || !Array.isArray(data) || isMenuShown) return null; // check for Array data
  return (
    <main className="main-content">
      <div className="cardItem-container">
        {data.map((item) => (
          <CardItem key={item.code} {...item} />
        ))}
      </div>
    </main>
  );
};
export default MarketplacePage;
