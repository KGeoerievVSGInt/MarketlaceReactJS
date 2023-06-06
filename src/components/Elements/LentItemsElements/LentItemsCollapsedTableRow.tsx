import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  IconButton,
} from "@mui/material";
import { CheckBoxOutlineBlank, CheckBox } from "@mui/icons-material";
import { useGetBorrowerOrdersQuery } from "../../../services/lentItemsService";
import { useState, useEffect } from "react";
import { BorrowedItemsType } from "../../../types";
import { useCompleteLentOrderMutation } from "../../../services/lentItemsService";
import { toast } from "react-toastify";
import { dateFormat } from "../../../utils/dataFormat";

const LentItemsCollapsedTableRow = ({ email }: { email: string }) => {
  const [rows, setRows] = useState<BorrowedItemsType[]>([]);
  const { data } = useGetBorrowerOrdersQuery(email);
  const [completeLentOrder] = useCompleteLentOrderMutation();

  const returnItem = (id: number) => {
    completeLentOrder(id)
      .unwrap()
      .then(() => toast.success("Item returned successfully!"))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    if (data) setRows(data);
  }, [data]);
  return (
    <Box sx={{ margin: 1 }}>
      <Typography variant="h6" gutterBottom>
        Lent Items
      </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                fontWeight: "700",
              }}
            >
              Order ID
            </TableCell>
            <TableCell
              style={{
                fontWeight: "700",
              }}
            >
              Name
            </TableCell>
            <TableCell
              style={{
                fontWeight: "700",
              }}
            >
              Quantity
            </TableCell>
            <TableCell
              style={{
                fontWeight: "700",
              }}
            >
              Loan Start Date
            </TableCell>
            <TableCell
              style={{
                fontWeight: "700",
              }}
            >
              Loan End Date
            </TableCell>
            <TableCell
              style={{
                fontWeight: "700",
              }}
            >
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            console.log(row.loanEndDate);

            return (
              <TableRow key={row.id}>
                <TableCell>{row.itemId}</TableCell>
                <TableCell>{row.orderedBy}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{dateFormat(row.loanStartDate)}</TableCell>
                <TableCell>
                  {row.loanEndDate ? dateFormat(row.loanStartDate) : "Ongoing"}
                </TableCell>
                <TableCell>
                  {row.loanEndDate ? (
                    <CheckBox color="primary" />
                  ) : (
                    <IconButton
                      onClick={() => {
                        returnItem(row.id);
                      }}
                    >
                      <CheckBoxOutlineBlank />
                    </IconButton>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default LentItemsCollapsedTableRow;
