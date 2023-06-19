import {
  Paper,
  TableContainer,
  Table as MuiTable,
  TableBody,
  Stack,
} from "@mui/material";
import { CustomTableProps } from "../../../types";
import TableHead from "./TableHead";
import EmptyTableRowElement from "../EmptyTableRowElement";
import { useEffect, useState } from "react";
import { usePagination } from "../../../hooks/usePagination";
import Pagination from "../Pagination";
import TableRow from "./TableRow";
//variables
const tableCols = {
  pending: ["Code", "QTY", "Price", "Ordered By", "Order Date", "Action"],
  myOrders: ["Name", "QTY", "Price", "Order Date", "Status"],
  borrowed: ["Name", "QTY", "Loan Start Date", "Loan End Date"],
};
const emptyText = {
  pending: "There are no pending orders",
  myOrders: "You have no current orders",
  borrowed: "You have no borrowed items",
};
//component
const Table = <T extends { id: number; status?: string }>({
  data,
  columns,
  type,
  maxItems,
}: CustomTableProps<T>) => {
  //states
  const [rows, setRows] = useState<T[]>([]);

  //RTQ Querry

  //pagination hook
  const { nextPage, prevPage, currentPage, maxPage, items } = usePagination<T>(
    rows,
    maxItems
  );
  //rows set
  useEffect(() => {
    if (data) setRows(data);
  }, [data]);
  //handlers

  return (
    <Stack direction={"column"} height={"100%"}>
      <TableContainer component={Paper}>
        <MuiTable>
          <TableHead columns={tableCols[type]} />
          <TableBody>
            {items.length === 0 && (
              <EmptyTableRowElement
                numofCols={tableCols[type].length}
                text={emptyText[type]}
              />
            )}
            {items.map((row, index) => (
              <TableRow<T>
                item={row}
                columns={columns}
                type={type}
                key={index}
              />
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
      <Pagination
        nextPage={nextPage}
        prevPage={prevPage}
        currPage={currentPage}
        maxPage={maxPage}
      />
    </Stack>
  );
};

export default Table;
