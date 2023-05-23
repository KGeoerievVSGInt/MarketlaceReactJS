import delIcon from "../../../assets/myOrders/Vector_delete.svg";
import { MyOrdersRowType } from "../../../types";
import { dateFormat } from "../../../utils/dataFormat";
const MyOrdersTableRow = ({
  name,
  orderDate,
  orderPrice,
  quantity,
  status,
}: MyOrdersRowType) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{orderPrice}BGN</td>
      <td>{dateFormat(orderDate)}</td>
      <td className="action">
        <p>{status}</p>
        {status === "Pending" && (
          <button>
            <img src={delIcon} alt="Delete Pending Order Button" />
          </button>
        )}
      </td>
    </tr>
  );
};

export default MyOrdersTableRow;
