import { TableRow as MUIRow, Button, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import { dateFormat } from "../../../utils/dataFormat";
import { useCompleteOrderMutation } from "../../../services/pendingService";
import { toast } from "react-toastify";
import MyOrdersPopup from "../../Elements/MyOrdersElements/MyOrdersPopup";
import { CustomTableRowProps } from "../../../types";
import { StyledCell } from "./StyledTableComponents";

const TableRow = <T extends { id: number; status?: string }>({
  item,
  columns,
  type,
}: CustomTableRowProps<T>) => {
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
            <StyledCell key={column as string}>
              {dateFormat(item[column] as string)}
            </StyledCell>
          );
        if (column === "orderPrice")
          return (
            <StyledCell key={column as string}>
              {item[column] as string} BGN
            </StyledCell>
          );
        if (column === "loanEndDate")
          return (
            <StyledCell key={column as string}>
              {dateFormat(item[column] as string) ?? "Ongoing"}
            </StyledCell>
          );
        return (
          <StyledCell key={column as string}>
            {item[column] as React.ReactNode}
          </StyledCell>
        );
      })}
      {type === "pending" && (
        <StyledCell>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#ed1c25",
              color: "#FFF",
              fontWeight: 700,
              ":hover": {
                bgcolor: "#f69296",
              },
            }}
            onClick={() => {
              completeOrderHandler(item.id);
            }}
          >
            Complete
          </Button>
        </StyledCell>
      )}
      {type === "myOrders" && (
        <StyledCell>
          {item.status}
          {item.status === "Pending" && (
            <IconButton
              sx={{
                padding: 0,
                marginLeft: "8px",
              }}
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
        </StyledCell>
      )}
    </MUIRow>
  );
};

export default TableRow;
