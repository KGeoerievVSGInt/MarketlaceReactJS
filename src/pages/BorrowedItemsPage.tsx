import LoadingSpinner from "../components/Layout/LoadingSpinner";
import { useGetBorrowerOrdersQuery } from "../services/lentItemsService";
import { Navigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import Table from "../components/Layout/Table/Table";
import { BorrowedItemsType } from "../types";
const columns: (keyof BorrowedItemsType)[] = [
  "orderedBy",
  "quantity",
  "loanStartDate",
  "loanEndDate",
];
const BorrowedItemsPage = () => {
  //Auth hooks
  const { instance } = useMsal();
  const username = instance.getActiveAccount()?.username;
  //RTK Query
  const { data, isLoading, error } = useGetBorrowerOrdersQuery(username ?? "");
  //token expiration check
  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="main-content">
      {isLoading ? (
        <LoadingSpinner /> //loading element
      ) : (
        <Table<BorrowedItemsType>
          data={data}
          columns={columns}
          maxItems={7}
          type="borrowed"
        />
      )}
    </main>
  );
};

export default BorrowedItemsPage;
