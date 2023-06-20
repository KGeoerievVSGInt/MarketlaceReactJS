import { TableHead as MUITableHead, TableRow } from "@mui/material";
import { TableHeadProps } from "../../../types";
import { StyledCell } from "./StyledTableComponents";

const TableHead = ({ columns, fractions }: TableHeadProps) => {
  return (
    <MUITableHead>
      <TableRow>
        {columns.map((column, index) => (
          <StyledCell key={column} width={fractions[index]}>
            {column}
          </StyledCell>
        ))}
      </TableRow>
    </MUITableHead>
  );
};

export default TableHead;
