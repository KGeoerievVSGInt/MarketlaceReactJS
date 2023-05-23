import { PendingOrdersRowType } from "../../../types";
import { dateFormat } from "../../../utils/dataFormat";

const PendingOrdersTableRow = ({
  code,
  orderPrice,
  orderDate,
  orderedBy,
  quantity,
}: PendingOrdersRowType) => {
  return (
    <tr>
      <td>{code}</td>
      <td>{quantity}</td>
      <td>{orderPrice}BGN</td>
      <td>{orderedBy}</td>
      <td>{dateFormat(orderDate)}</td>
      <td className="action">
        <button>Complete</button>
      </td>
    </tr>
  );
};

export default PendingOrdersTableRow;
