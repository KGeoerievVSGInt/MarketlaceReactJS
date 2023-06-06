import { useGetLentItemsQuery } from "../../services/lentItemsService";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import LentItemsTableRow from "../Elements/LentItemsElements/LentItemsTableRow";
const LentItemsPage = () => {
  const { data } = useGetLentItemsQuery("");

  return (
    <main className="main-content">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell
                style={{
                  fontWeight: "700",
                }}
              >
                {" "}
                Borrower Email
              </TableCell>
              <TableCell
                style={{
                  fontWeight: "700",
                }}
              >
                {" "}
                Number of Orders
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((user) => (
                <LentItemsTableRow key={user.email} {...user} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
};

export default LentItemsPage;
