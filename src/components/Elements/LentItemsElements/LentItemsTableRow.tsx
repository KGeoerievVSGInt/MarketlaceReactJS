import {
  TableRow,
  TableCell,
  IconButton,
  Collapse,
  Avatar,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import { LentItemsType } from "../../../types";
import LentItemsCollapsedTableRow from "./LentItemsCollapsedTableRow";
import defaultUser from "../../../assets/marketPage/Profile Img.png";

const LentItemsTableRow = ({ email, count, avatar }: LentItemsType) => {
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
        <TableCell>
          <Avatar
            src={avatar?.avatar ?? defaultUser}
            alt={avatar?.name ?? "Profile avatar"}
          />
        </TableCell>
        <TableCell>{email}</TableCell>
        <TableCell>{count}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell colSpan={4} style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Collapse in={open} timeout={300} unmountOnExit>
            {open && <LentItemsCollapsedTableRow email={email} />}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default LentItemsTableRow;
