import { Tooltip } from "react-tooltip";
import delIcon from "../../../assets/myOrders/Vector_delete.svg";
import { MyOrdersRowType } from "../../../types";
import { dateFormat } from "../../../utils/dataFormat";
import { useState } from "react";
import MyOrdersPopup from "./MyOrdersPopup";
const MyOrdersTableRow = ({
  id,
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
          <button
            data-tooltip-id={`my-tooltip-${id}`}
            onClick={togglePopup}
            className="delete-button"
          >
            <img src={delIcon} alt="Delete Pending Order Button" />
          </button>
        )}
        {visible && (
          <Tooltip
            id={`my-tooltip-${id}`}
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
            <MyOrdersPopup onToggle={togglePopup} id={id} />
          </Tooltip>
        )}
      </td>
    </tr>
  );
};

export default MyOrdersTableRow;
