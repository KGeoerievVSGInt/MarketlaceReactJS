import { Paper, Table, TableCell, tableCellClasses } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledPaper = styled(Paper)(() => ({
  boxShadow: "none",
}));

export const StyledTable = styled(Table)(() => ({
  borderCollapse: "separate",
  borderSpacing: "0 20px",
}));

export const StyledCell = styled(TableCell)(() => ({
  padding: "12px",
  borderTop: "1px solid #dadcdd",
  borderBottom: "1px solid #dadcdd",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#dadcdd",
    fontWeight: 700,
  },
  "&:last-child": {
    borderRadius: "0 10px 10px 0",
    borderRight: "1px solid #dadcdd",
    textAlign: "center",
  },
  "&:first-of-type": {
    borderRadius: "10px 0 0 10px",
    borderLeft: "1px solid #dadcdd",
  },
}));
