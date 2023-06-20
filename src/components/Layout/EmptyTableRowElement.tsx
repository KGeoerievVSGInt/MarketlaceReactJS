import { EmptyTableRow } from "../../types";
import { TableRow } from "@mui/material";
import { StyledCell } from "./Table/StyledTableComponents";

const EmptyTableRowElement = ({ text, numofCols }: EmptyTableRow) => {
  return (
    <TableRow>
      <StyledCell colSpan={numofCols} className="empty-cell">
        {text}
      </StyledCell>
    </TableRow>
  );
};

export default EmptyTableRowElement;
