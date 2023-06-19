import LoadingSpinner from "../components/Layout/LoadingSpinner";
import CardItem from "../components/Elements/MarketplaceElements/CardItem";
import { useGetMarketDataQuery } from "../services/marketService";
import { HamburgerCtx } from "../context/hamburgerCtx";
import { Typography } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { FetcherDataType } from "../types";
import Pagination from "../components/Layout/Pagination";
import { usePagination } from "../hooks/usePagination";

const MarketplacePage = () => {
  const [cards, setCards] = useState<FetcherDataType[]>([]);
  const { data, isLoading, error } = useGetMarketDataQuery("");
  const { isMenuShown } = useContext(HamburgerCtx);
  useEffect(() => {
    if (data && Array.isArray(data)) setCards(data);
  }, [data]);
  const { nextPage, prevPage, maxPage, currentPage, items } =
    usePagination<FetcherDataType>(cards);
  // menu toggle
  if (isMenuShown) return null;


  // token expiration check
  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="main-content main-market">
      {isLoading ? (
        //loading element
        <LoadingSpinner />
      ) : (
        <div className="cardItem-container">
          {items.length == 0 ? (
            // no card items element
            <Typography
              color={"#9a9a9a"}
              textAlign={"center"}
              fontWeight={700}
              fontSize={24}
            >
              No Items To display
            </Typography>
          ) : (
            items.map((item) => <CardItem key={item.code} {...item} />)
          )}
        </div>
      )}
      {data && Array.isArray(data) && data.length > 12 && (
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          currPage={currentPage}
          maxPage={maxPage}
        />
      )}
    </main>
  );
};
export default MarketplacePage;
