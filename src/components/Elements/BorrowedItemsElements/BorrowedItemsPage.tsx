import BorrowedItemsTableRow from "./BorrowedItemsTableRow";
import EmptyTableRowElement from "../../Layout/EmptyTableRowElement";
import LoadingSpinner from "../../Layout/LoadingSpinner";
import { useGetBorrowerOrdersQuery } from "../../../services/lentItemsService";
import { Navigate } from "react-router-dom";
import { useMsal } from "@azure/msal-react";

const BorrowedItemsPage = () => {
  const { instance } = useMsal();
  const username = instance.getActiveAccount()?.username;
  const { data, isLoading, error } = useGetBorrowerOrdersQuery(username ?? "");
  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="main-content">
      {isLoading ? (
        <LoadingSpinner /> //loading element
      ) : (
        <table className="pending-orders">
          <thead>
            <tr>
              <th>Name</th>
              <th>QTY</th>
              <th>Loan Start Date</th>
              <th>Loand End Date</th>
            </tr>
          </thead>
          <tbody>
            {(!data || data.length === 0) && (
              <EmptyTableRowElement
                text="You don't have recent orders"
                numofCols={4}
              />
            )}
            {data &&
              data.map((row) => {
                return <BorrowedItemsTableRow key={row.id} {...row} />;
              })}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default BorrowedItemsPage;
