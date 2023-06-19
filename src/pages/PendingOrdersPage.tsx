import { useGetPendingOrdersQuery } from "../services/pendingService";
import { PendingOrdersRowType } from "../types";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Layout/LoadingSpinner";
import Table from "../components/Layout/Table/Table";
const PendingOrdersPage = () => {
  const { data, isLoading, error } = useGetPendingOrdersQuery("");

  // token expiration check

  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  const columns: (keyof PendingOrdersRowType)[] = [
    "itemCode",
    "quantity",
    "orderPrice",
    "orderedBy",
    "orderDate",
  ];
  return (
    <main className="main-content">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Table<PendingOrdersRowType>
          data={data}
          columns={columns}
          type="pending"
          maxItems={7}
        />
      )}
    </main>
  );
};

export default PendingOrdersPage;
