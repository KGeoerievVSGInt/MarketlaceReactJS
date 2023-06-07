import { useGetLentItemsQuery } from "../../../services/lentItemsService";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import LentItemsTableRow from "./LentItemsTableRow";
import LoadingSpinner from "../../Layout/LoadingSpinner";
import { Navigate } from "react-router-dom";
const LentItemsPage = () => {
  const { data, isLoading, error } = useGetLentItemsQuery("");

  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="main-content">
      {isLoading ? (
        <LoadingSpinner /> //loading element
      ) : (
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
      )}
    </main>
  );
};

export default LentItemsPage;
