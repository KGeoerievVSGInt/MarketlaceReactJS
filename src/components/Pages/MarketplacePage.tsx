import CardItem from "../Elements/MarketplaceElements/CardItem";
import { useGetMarketDataQuery } from "../../redux/dataSlice";

const MarketplacePage = () => {
  const { data } = useGetMarketDataQuery("");

  if (data && Array.isArray(data))
    return (
      <main className="main-content">
        <div className="cardItem-container">
          {data.map((item) => (
            <CardItem key={item.code} {...item} />
          ))}
        </div>
      </main>
    );
  return null;
};
export default MarketplacePage;
