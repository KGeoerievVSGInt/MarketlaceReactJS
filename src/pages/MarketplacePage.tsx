import LoadingSpinner from "../components/Layout/LoadingSpinner";
import CardItem from "../components/Elements/MarketplaceElements/CardItem";
import { useGetMarketDataQuery } from "../services/marketService";
import { HamburgerCtx } from "../context/hamburgerCtx";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const MarketplacePage = () => {
  const { data, isLoading, error } = useGetMarketDataQuery("");
  const { isMenuShown } = useContext(HamburgerCtx);
  if (isMenuShown) return null; // menu toggle

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
          {!data || !Array.isArray(data) || data.length == 0 ? ( // no card items element
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
