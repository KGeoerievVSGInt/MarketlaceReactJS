import PendingOrdersTableRow from "../Elements/PendingOrdersElements/PendingOrdersTableRow";
import { useGetPendingOrdersQuery } from "../../redux/dataSlice";
import { PendingOrdersRowType } from "../../types";
import EmptyTableRowElement from "../Layout/EmptyTableRowElement";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../Layout/LoadingSpinner";
const PendingOrdersPage = () => {
  const { data, isLoading, error } = useGetPendingOrdersQuery("");

  // token expiration check
  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="main-content-pending">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <table className="pending-orders">
          <thead>
            <tr>
              <th>Code</th>
              <th>QTY</th>
              <th>Price</th>
              <th>Ordered By</th>
              <th>Order Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((order: PendingOrdersRowType) => (
                <PendingOrdersTableRow key={order.id} {...order} />
              ))}
            {(!data || data.length == 0) && (
              <EmptyTableRowElement text="There are no pending orders" />
            )}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default PendingOrdersPage;
