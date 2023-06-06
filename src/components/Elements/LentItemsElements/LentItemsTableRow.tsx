import { TableRow, TableCell, IconButton, Collapse } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import { LentItemsType } from "../../../types";
import LentItemsCollapsedTableRow from "./LentItemsCollapsedTableRow";

const LentItemsTableRow = ({ email, count }: LentItemsType) => {
  const [open, setOpen] = useState(false);

  const toggleRow = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton onClick={toggleRow}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{count}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell colSpan={3} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout={300} unmountOnExit>
            {open && <LentItemsCollapsedTableRow email={email} />}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default LentItemsTableRow;
