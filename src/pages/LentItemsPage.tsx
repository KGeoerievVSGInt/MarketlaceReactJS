import { useGetLentItemsQuery } from "../services/lentItemsService";
import {
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import LentItemsTableRow from "../components/Elements/LentItemsElements/LentItemsTableRow";
import LoadingSpinner from "../components/Layout/LoadingSpinner";
import { Navigate } from "react-router-dom";
import { useGetAllUserQuery } from "../redux/userSlice";
import { useState, useEffect } from "react";
import { UserType } from "../types";
const LentItemsPage = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const { data, isLoading, error } = useGetLentItemsQuery();
  const { data: fetchedUsers } = useGetAllUserQuery();

  useEffect(() => {
    if (fetchedUsers) setUsers(fetchedUsers.employees);
  }, [fetchedUsers]);

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
                  <LentItemsTableRow
                    key={user.email}
                    {...user}
                    avatar={users.find(
                      (filtered) => user.email === filtered.email
                    )}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </main>
  );
};

export default LentItemsPage;
