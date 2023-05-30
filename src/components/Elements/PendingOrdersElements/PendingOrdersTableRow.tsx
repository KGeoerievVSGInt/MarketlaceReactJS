import { PendingOrdersRowType } from "../../../types";
import { dateFormat } from "../../../utils/dataFormat";
import { useCompleteOrderMutation } from "../../../redux/dataSlice";
import { toast } from "react-toastify";

const PendingOrdersTableRow = ({
  itemCode,
  code,
  orderPrice,
  orderDate,
  orderedBy,
  quantity,
}: PendingOrdersRowType) => {
  const [completeOrder] = useCompleteOrderMutation();
  const completeOrderHandler = () => {
    completeOrder(code)
      .unwrap()
      .then(() => toast.success("Order Completed!"))
      .catch((e) => console.log(e));
  };
  return (
    <tr>
      <td>{itemCode}</td>
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
