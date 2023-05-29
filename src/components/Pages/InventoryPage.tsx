import { useState, useEffect } from "react";
import InventoryModal from "../Elements/InventoryElements/InventoryModal";
import InventoryTable from "../Elements/InventoryElements/InventoryTable";
import { Stack, TextField, Button, InputAdornment } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { GridRowId } from "@mui/x-data-grid";
import { InventoryItemType } from "../../types";
import { useGetInventoryDataQuery } from "../../redux/dataSlice";
import { Navigate } from "react-router-dom";
const InventoryPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<InventoryItemType | null>(null);
  const { data, error } = useGetInventoryDataQuery("");
  const [rows, setRows] = useState<InventoryItemType[]>([]);

  useEffect(() => {
    if (data) {
      const moddedRows = data.map((row) => ({ ...row, id: row.code }));
      setRows(moddedRows);
    }
  }, [data]);
  const modalHandler = (num?: GridRowId) => {
    setModalVisible((prevState) => !prevState);
    if (num) {
      const rowData = rows.find((el) => el.id === num);
      if (rowData) setModalData(rowData);
    }
  };
  if (error && "data" in error && error.status === 401) {
    return <Navigate to="/" replace />;
  }
  return (
    <main className="main-content-inventory">
      <Stack direction={"row"} marginBottom={3} spacing={2}>
        <TextField
          id="standard-start-adornment"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search
                  sx={{
                    color: "#000",
                  }}
                />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
        <Button
          variant="contained"
          color="success"
          startIcon={<Add />}
          onClick={() => {
            setModalVisible((prevState) => !prevState);
            setModalData(null);
          }}
        >
          Add New
        </Button>
      </Stack>
      <InventoryTable onToggle={modalHandler} data={rows} />
      {modalVisible && (
        <InventoryModal
          open={modalVisible}
          onClose={modalHandler}
          product={modalData}
        />
      )}
    </main>
  );
};

export default InventoryPage;
