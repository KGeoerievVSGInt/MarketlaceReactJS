import CardItem from "../Elements/MarketplaceElements/CardItem";
import { useGetMarketDataQuery } from "../../redux/dataSlice";
import { useContext } from "react";
import { HamburgerCtx } from "../../context/hamburgerCtx";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Layout/LoadingSpinner";

const MarketplacePage = () => {
  const { data, isLoading, error } = useGetMarketDataQuery("");
  const { isMenuShown } = useContext(HamburgerCtx);
  if (!data || !Array.isArray(data) || isMenuShown) return null; // check for Array data

  // token expiration check
  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="main-content">
      {isLoading ? (
        <LoadingSpinner /> //loading element
      ) : (
        <div className="cardItem-container">
          {data.length == 0 ? ( // no card items element
            <Typography
              color={"#9a9a9a"}
              textAlign={"center"}
              fontWeight={700}
              fontSize={24}
            >
              No Items To display
            </Typography>
          ) : (
            data.map((item) => <CardItem key={item.code} {...item} />)
          )}
        </div>
      )}
    </main>
  );
};
export default MarketplacePage;
