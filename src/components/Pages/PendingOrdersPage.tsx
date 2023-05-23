import PendingOrdersTableRow from "../Elements/PendingOrdersElements/PendingOrdersTableRow";
import { useGetPendingOrdersQuery } from "../../redux/dataSlice";
import { PendingOrdersRowType } from "../../types";
const PendingOrdersPage = () => {
  const { data, isLoading } = useGetPendingOrdersQuery("");
  return (
    <main className="main-content-pending">
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
          {isLoading && <tr> Please wait</tr>}
          {data &&
            data.map((order: PendingOrdersRowType) => (
              <PendingOrdersTableRow key={order.code} {...order} />
            ))}
        </tbody>
      </table>
    </main>
  );
};

export default PendingOrdersPage;
