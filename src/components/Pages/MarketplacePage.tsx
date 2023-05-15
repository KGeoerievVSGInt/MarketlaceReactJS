import CardItem from "../Elements/MarketplaceElements/CardItem";
import useGetData from "../../hooks/useGetData";
const MarketplacePage = () => {
  const data = useGetData("https://localhost:7245/Marketplace");
  console.log(data);

  return (
    <main className="main-content">
      <div className="cardItem-container">
        <CardItem />
      </div>
    </main>
  );
};
export default MarketplacePage;
