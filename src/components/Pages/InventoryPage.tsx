import { useState } from "react";
import InventoryModal from "../Elements/InventoryElements/InventoryModal";
import InventoryTable from "../Elements/InventoryElements/InventoryTable";
import { Stack, TextField, Button, InputAdornment } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { GridRowId } from "@mui/x-data-grid";
import { InventoryItemType } from "../../types";
import { useGetInventoryDataQuery } from "../../redux/inventorySlice";

const InventoryPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<InventoryItemType | null>(null);
  const { data } = useGetInventoryDataQuery("");
  const rows: InventoryItemType[] = [];
  if (data)
    data.forEach((el) => {
      rows.push({ ...el, id: el.code });
    });

  const modalHandler = (num?: GridRowId) => {
    setModalVisible((prevState) => !prevState);
    if (num) {
      const rowData = rows.find((el) => el.id === num);
      if (rowData) setModalData(rowData);
    }
  };
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
