import MyOrdersTableRow from "../Elements/MyOrdersElements/MyOrdersTableRow";
import { useGetMyOrdersQuery } from "../../redux/dataSlice";


const MyOrdersPage = () => {
  const { data } = useGetMyOrdersQuery("");

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
            {data &&
              data.map((row) => {
                return <MyOrdersTableRow key={row.code} {...row} />;
              })}
          </tbody>
        </table>
      </main>
    );

};

export default MyOrdersPage;
