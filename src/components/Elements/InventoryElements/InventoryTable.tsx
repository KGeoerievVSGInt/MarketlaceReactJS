import { Paper, TableContainer, IconButton, Stack } from "@mui/material";
import { Edit, DeleteOutline } from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { InvenotryTableProps } from "../../../types";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import MarketPopupElement from "../MarketplaceElements/MarketPopupElement";
const InventoryTable = ({ onToggle }: InvenotryTableProps) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const columns = [
    { field: "code", headerName: "Code", width: 100, disableColumnMenu: true },
    { field: "name", headerName: "Name", width: 320, disableColumnMenu: true },
    {
      field: "category",
      headerName: "Category",
      width: 250,
      disableColumnMenu: true,
    },
    {
      field: "forSale",
      headerName: "For Sale",
      width: 160,
      disableColumnMenu: true,
    },
    { field: "qty", headerName: "Qty", width: 160, disableColumnMenu: true },
    {
      field: "actions",
      headerName: "Actions",
      width: 140,
      sortable: false,
      disableColumnMenu: true,
      renderCell: () => {
        return (
          <Stack direction={"row"}>
            <IconButton onClick={onToggle} size="small">
              <Edit
                sx={{
                  color: "#ed1c25",
                }}
              />
            </IconButton>
            <IconButton size="small" data-tooltip-id="my-tooltip" onClick={togglePopup}>
              <DeleteOutline
                sx={{
                  color: "#ed1c25",
                }}
              />
            </IconButton>
          </Stack>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      code: "1",
      name: "Laptop Macbook Pro 16” M1 Max",
      category: "Laptops",
      forSale: "2",
      qty: "5",
    },
  ];
  const togglePopup = () => {
    setPopupVisible((prevState) => !prevState);
  };
  return (
    <TableContainer
      component={Paper}
      sx={{
        flexGrow: "1",
        width: "100%",
      }}
    >
      <DataGrid
        columns={columns}
        rows={rows}
        pageSizeOptions={[10]}
        disableRowSelectionOnClick
        disableColumnSelector
        sx={{
          "&.MuiDataGrid-root .MuiDataGrid-cell:focus-within": {
            outline: "none !important",
          },
        }}
      />
      <Tooltip
        id="my-tooltip"
        isOpen={popupVisible}
        place="bottom"
        closeOnEsc
        variant="light"
        className="tooltip"
        clickable={true}
      >
        {" "}
        <MarketPopupElement onToggle={togglePopup} type="inventory" />
      </Tooltip>
    </TableContainer>
  );
};

export default InventoryTable;
