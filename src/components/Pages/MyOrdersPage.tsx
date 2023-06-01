import MyOrdersTableRow from "../Elements/MyOrdersElements/MyOrdersTableRow";
import { useGetMyOrdersQuery } from "../../redux/dataSlice";
import EmptyTableRowElement from "../Layout/EmptyTableRowElement";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Layout/LoadingSpinner";
const MyOrdersPage = () => {
  const { data, isLoading, error } = useGetMyOrdersQuery("");

  // token expiration check
  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="main-content-orders">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <table className="pending-orders">
          <thead>
            <tr>
              <th>Name</th>
              <th>QTY</th>
              <th>Price</th>
              <th>Order Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((row) => {
                return <MyOrdersTableRow key={row.id} {...row} />;
              })}
            {(!data || data.length > 0) && (
              <EmptyTableRowElement text="You don't have recent orders" />
            )}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default MyOrdersPage;
