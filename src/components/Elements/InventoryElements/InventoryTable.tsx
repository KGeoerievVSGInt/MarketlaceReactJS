import { Paper, TableContainer, IconButton, Stack } from "@mui/material";
import { Edit, DeleteOutline } from "@mui/icons-material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { InvenotryTableProps } from "../../../types";
import { Tooltip } from "react-tooltip";
import { useState } from "react";
import InventoryPopupElement from "./InventoryPopupElement";

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
        const [isVisible, setIsVisible] = useState(false); // local state and toggle for single row
        const togglePopup = () => {
          setIsVisible((prevState) => !prevState);
        };
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
              data-tooltip-id={`my-tooltip-${id}`}
              onClick={togglePopup}
            >
              <DeleteOutline
                sx={{
                  color: "#ed1c25",
                }}
              />
            </IconButton>
            {isVisible && (
              <Tooltip
                id={`my-tooltip-${id}`}
                isOpen={isVisible}
                place="bottom"
                closeOnEsc
                variant="light"
                className="tooltip"
                clickable={true}
                style={{
                  whiteSpace: "normal",
                  zIndex: "5",
                }}
              >
                <InventoryPopupElement onToggle={togglePopup} id={id} />
              </Tooltip>
            )}
          </Stack>
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
