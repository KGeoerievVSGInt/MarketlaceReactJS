import {
  TableRow as MUIRow,
  TableCell,
  Button,
  IconButton,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { dateFormat } from "../../../utils/dataFormat";
import { useCompleteOrderMutation } from "../../../services/pendingService";
import { toast } from "react-toastify";
import MyOrdersPopup from "../../Elements/MyOrdersElements/MyOrdersPopup";

const TableRow = <T extends { id: number; status?: string }>({
  item,
  columns,
  type,
}: {
  item: T;
  columns: (keyof T)[];
  type: string;
}) => {
  const [visible, setVisible] = useState(false);
  const [completeOrder] = useCompleteOrderMutation();
  const togglePopup = () => {
    setVisible((prevState) => !prevState);
  };
  const completeOrderHandler = (id: number) => {
    completeOrder(id)
      .unwrap()
      .then(() => toast.success("Order Completed!"))
      .catch((e) => console.log(e));
  };
  return (
    <MUIRow>
      {columns.map((column) => {
        if (column === "orderDate" || column === "loanStartDate")
          return (
            <TableCell key={column as string}>
              {dateFormat(item[column] as string)}
            </TableCell>
          );
        if (column === "orderPrice")
          return (
            <TableCell key={column as string}>
              {item[column] as string} BGN
            </TableCell>
          );
        if (column === "loanEndDate")
          return (
            <TableCell key={column as string}>
              {dateFormat(item[column] as string) ?? "Ongoing"}
            </TableCell>
          );
        return (
          <TableCell key={column as string}>
            {item[column] as React.ReactNode}
          </TableCell>
        );
      })}
      {type === "pending" && (
        <TableCell>
          <Button
            onClick={() => {
              completeOrderHandler(item.id);
            }}
          >
            Complete
          </Button>
        </TableCell>
      )}
      {type === "myOrders" && (
        <TableCell>
          {item.status}
          {item.status === "Pending" && (
            <IconButton
              onClick={togglePopup}
              data-tooltip-id={`my-tooltip-${item.id}`}
            >
              <ClearIcon color="error" />
            </IconButton>
          )}
          {visible && (
            <Tooltip
              id={`my-tooltip-${item.id}`}
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
              <MyOrdersPopup onToggle={togglePopup} id={item.id} />
            </Tooltip>
          )}
        </TableCell>
      )}
    </MUIRow>
  );
};

export default TableRow;
