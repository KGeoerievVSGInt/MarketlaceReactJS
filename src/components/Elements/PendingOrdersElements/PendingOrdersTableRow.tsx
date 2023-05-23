import { PendingOrdersRowType } from "../../../types";
import { dateFormat } from "../../../utils/dataFormat";
import { useCompleteOrderMutation } from "../../../redux/dataSlice";

const PendingOrdersTableRow = ({
  code,
  orderPrice,
  orderDate,
  orderedBy,
  quantity,
}: PendingOrdersRowType) => {
  const [completeOrder] = useCompleteOrderMutation();
  const completeOrderHandler = () => {
    completeOrder(code);
  };
  return (
    <tr>
      <td>{code}</td>
      <td>{quantity}</td>
      <td>{orderPrice}BGN</td>
      <td>{orderedBy}</td>
      <td>{dateFormat(orderDate)}</td>
      <td className="action">
        <button onClick={completeOrderHandler}>Complete</button>
      </td>
    </tr>
  );
};

export default PendingOrdersTableRow;
