import CardItem from "../Elements/MarketplaceElements/CardItem";
import useGetData from "../../hooks/useGetData";
import { CardItemProps } from "../../types";
const MarketplacePage = () => {
    const data = useGetData<CardItemProps>("/products");
    console.log(data);

    if (Array.isArray(data))
        return (
            <main className="main-content">
                <div className="cardItem-container">
                    {data.map((item: CardItemProps) => {
                        console.log(item);

                        return <CardItem key={item.id} id={item.id} />;
                    })}
                </div>
            </main>
        );
};
export default MarketplacePage;
