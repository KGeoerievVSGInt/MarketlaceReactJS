import PendingOrdersTableRow from "../Elements/PendingOrdersElements/PendingOrdersTableRow";

const PendingOrdersPage = () => {
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
          <PendingOrdersTableRow />
        </tbody>
      </table>
    </main>
  );
};

export default PendingOrdersPage;
