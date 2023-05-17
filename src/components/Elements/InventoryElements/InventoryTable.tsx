import { Paper, TableContainer, IconButton, Stack } from "@mui/material";
import { Edit, DeleteOutline } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { InvenotryTableProps } from "../../../types";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import MarketPopupElement from "../MarketplaceElements/MarketPopupElement";
const InventoryTable = ({ onToggle, data }: InvenotryTableProps) => {
  const [popupVisible, setPopupVisible] = useState(false);
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
      flex: 4,
    },
    {
      field: "category",
      renderHeader: () => <strong>Category</strong>,
      disableColumnMenu: true,
      flex: 2,
    },
    {
      field: "quantityForSale",
      renderHeader: () => <strong>For Sale</strong>,
      disableColumnMenu: true,
      flex: 2,
    },
    {
      field: "quantity",
      renderHeader: () => <strong>QTY</strong>,
      disableColumnMenu: true,
      flex: 2,
    },
    {
      field: "actions",
      renderHeader: () => <strong>Actions</strong>,
      sortable: false,
      disableColumnMenu: true,
      flex: 1,
      renderCell: ({ id }) => {
        return (
          <Stack direction={"row"}>
            <IconButton
              onClick={() => {
                onToggle(id);
              }}
              size="small"
            >
              <Edit
                sx={{
                  color: "#ed1c25",
                }}
              />
            </IconButton>
            <IconButton
              size="small"
              data-tooltip-id="my-tooltip"
              onClick={togglePopup}
            >
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

  const togglePopup = () => {
    setPopupVisible((prevState) => !prevState);
  };
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
