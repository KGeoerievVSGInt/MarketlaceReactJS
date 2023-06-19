import { useGetMyOrdersQuery } from "../services/myOrdersService";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/Layout/LoadingSpinner";
import Table from "../components/Layout/Table/Table";
import { MyOrdersRowType } from "../types";
const MyOrdersPage = () => {
  const { data, isLoading, error } = useGetMyOrdersQuery("");

  // token expiration check
  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  const columns: (keyof MyOrdersRowType)[] = [
    "name",
    "quantity",
    "orderPrice",
    "orderDate",
  ];
  return (
    <main className="main-content">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Table<MyOrdersRowType>
          data={data}
          columns={columns}
          type="myOrders"
          maxItems={10}
        />
      )}
    </main>
  );
};

export default MyOrdersPage;
