import delIcon from "../../../assets/myOrders/Vector_delete.svg";
const MyOrdersTableRow = () => {
  return (
    <tr>
      <td>MacBook Pro 16” M1 Max 32GB 1TB</td>
      <td>1</td>
      <td>5000BGN</td>
      <td>2023-03-13 16:30</td>
      <td className="action">
        <p>Pending</p>
        <button>
          <img src={delIcon} alt="Delete Pending Order Button" />
        </button>
      </td>
    </tr>
  );
};

export default MyOrdersTableRow;
