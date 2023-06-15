import { Paper, TableContainer } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { InvenotryTableProps } from "../../../types";
import InventoryActionCell from "./InventoryActionCell";

const InventoryTable = ({ onToggle, data }: InvenotryTableProps) => {
  const columns: GridColDef[] = [
    {
      field: "code",
      renderHeader: () => <strong>Code</strong>,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "name",
      renderHeader: () => <strong>Name</strong>,
      disableColumnMenu: true,
      flex: 3,
    },
    {
      field: "category",
      renderHeader: () => <strong>Category</strong>,
      disableColumnMenu: true,
      flex: 2,
    },
    {
      field: "location",
      renderHeader: () => <strong>Location</strong>,
      disableColumnMenu: true,
      flex: 2,
    },
    {
      field: "quantityForSale",
      renderHeader: () => <strong>For Sale</strong>,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "quantity",
      renderHeader: () => <strong>QTY</strong>,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "availableQuantity",
      renderHeader: () => <strong>Available</strong>,
      disableColumnMenu: true,
      flex: 1,
    },
    {
      field: "actions",
      renderHeader: () => <strong>Actions</strong>,
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: ({ id }) => {
        const el = data.find((el) => el.id === id);

        return (
          <InventoryActionCell
            onToggle={onToggle}
            cellId={id as number}
            hasAvailable={!!el?.availableQuantity ?? false}
          />
        );
      },
    },
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        flexGrow: "1",
        width: "100%",
        boxShadow: "none",
      }}
    >
      <DataGrid
        columns={columns}
        rows={data}
        pageSizeOptions={[1]}
        disableRowSelectionOnClick
        disableColumnSelector
        sx={{
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
        }}
      />
    </TableContainer>
  );
};

export default InventoryTable;
