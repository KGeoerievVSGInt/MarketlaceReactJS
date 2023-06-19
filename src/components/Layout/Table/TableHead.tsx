import { TableHead as MUITableHead, TableRow, TableCell } from "@mui/material";

const TableHead = ({ columns }: { columns: string[] }) => {
  return (
    <MUITableHead>
      <TableRow>
        {columns.map((column) => (
          <TableCell key={column}>{column}</TableCell>
        ))}
      </TableRow>
    </MUITableHead>
  );
};

export default TableHead;
