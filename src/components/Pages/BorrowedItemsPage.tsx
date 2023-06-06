import { useContext } from "react";
import { AuthCtx } from "../../context/authCtx";
import { useGetBorrowerOrdersQuery } from "../../services/lentItemsService";
import BorrowedItemsTableRow from "../Elements/BorrowedItemsElements/BorrowedItemsTableRow";
import EmptyTableRowElement from "../Layout/EmptyTableRowElement";
import { getUsername } from "../../utils/getUsername";


const BorrowedItemsPage = () => {
  const { user } = useContext(AuthCtx);
  const { data } = useGetBorrowerOrdersQuery(getUsername(user));


  return (
    <main className="main-content-pending">
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
    </main>
  );
};

export default BorrowedItemsPage;
