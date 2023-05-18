import CardItem from "../Elements/MarketplaceElements/CardItem";
import useGetData from "../../hooks/useGetData";
import { CardItemProps } from "../../types";
const MarketplacePage = () => {
  const data = useGetData<CardItemProps>("/Marketplace");
  if (Array.isArray(data))
    return (
      <main className="main-content">
        <div className="cardItem-container">
          {data.map((item: CardItemProps) => (
            <CardItem key={item.code} {...item} />
          ))}
        </div>
      </main>
    );
  return null;
};
export default MarketplacePage;
