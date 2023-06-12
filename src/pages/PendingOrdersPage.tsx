import PendingOrdersTableRow from "../components/Elements/PendingOrdersElements/PendingOrdersTableRow";
import { useGetPendingOrdersQuery } from "../services/pendingService";
import { PendingOrdersRowType } from "../types";
import EmptyTableRowElement from "../components/Layout/EmptyTableRowElement";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Layout/LoadingSpinner";
const PendingOrdersPage = () => {
  const { data, isLoading, error } = useGetPendingOrdersQuery("");

  // token expiration check
  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="main-content">
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
              <EmptyTableRowElement
                text="There are no pending orders"
                numofCols={6}
              />
            )}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default PendingOrdersPage;