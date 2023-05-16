import CardItem from "../Elements/MarketplaceElements/CardItem";
import useGetData from "../../hooks/useGetData";
import { CardItemProps } from "../../types";
const MarketplacePage = () => {
  const data = useGetData("/Marketplace");
  console.log(data);

  return (
    <main className="main-content">
      <div className="cardItem-container">
        {data.map((item: CardItemProps) => (
          <CardItem key={item.code} {...item} />
        ))}
      </div>
    </main>
  );
};
export default MarketplacePage;
