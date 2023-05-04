import MyOrdersTableRow from "../Elements/MyOrdersElements/MyOrdersTableRow";

const MyOrdersPage = () => {
  return (
    <main className="main-content-orders">
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
          <MyOrdersTableRow />
        </tbody>
      </table>
    </main>
  );
};

export default MyOrdersPage;
