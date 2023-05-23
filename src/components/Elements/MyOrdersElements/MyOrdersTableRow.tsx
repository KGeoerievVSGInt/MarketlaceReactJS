import { Tooltip } from "react-tooltip";
import delIcon from "../../../assets/myOrders/Vector_delete.svg";
import { MyOrdersRowType } from "../../../types";
import { dateFormat } from "../../../utils/dataFormat";
import { useState } from "react";
import MyOrdersPopup from "./MyOrdersPopup";
const MyOrdersTableRow = ({
  i,
  name,
  orderDate,
  orderPrice,
  quantity,
  status,
}: MyOrdersRowType) => {
  const [visible, setVisible] = useState(false);

  const togglePopup = () => {
    setVisible((prevState) => !prevState);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{orderPrice}BGN</td>
      <td>{dateFormat(orderDate)}</td>
      <td className="action">
        <p>{status}</p>
        {status === "Pending" && (
          <button data-tooltip-id={`my-tooltip-${i}`} onClick={togglePopup}>
            <img src={delIcon} alt="Delete Pending Order Button" />
          </button>
        )}
        {visible && (
          <Tooltip
            id={`my-tooltip-${i}`}
            isOpen={visible}
            place="bottom"
            closeOnEsc
            variant="light"
            className="tooltip"
            clickable={true}
            style={{
              zIndex: "5",
            }}
          >
            <MyOrdersPopup onToggle={togglePopup} />
          </Tooltip>
        )}
      </td>
    </tr>
  );
};

export default MyOrdersTableRow;
