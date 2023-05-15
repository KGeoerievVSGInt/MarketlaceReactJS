import { useState } from "react";
import InventoryModal from "../Elements/InventoryElements/InventoryModal";
import InventoryTable from "../Elements/InventoryElements/InventoryTable";
import { Stack, TextField, Button, InputAdornment } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { GridRowId } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    code: "1",
    name: "Laptop Macbook Pro 16” M1 Max",
    category: "Laptops",
    forSale: "2",
    qty: "5",
  },
  {
    id: 2,
    code: "1",
    name: "Laptop Macbook Pro 16” M1 Max",
    category: "Laptops",
    forSale: "2",
    qty: "5",
  },
];

const InventoryPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState<number | null>(null);
  const modalHandler = (num?: GridRowId) => {
    setModalVisible((prevState) => !prevState);
    if (num) {
      if (typeof num === "number") {
        setModalData(rows[num - 1].id);
      } else {
        setModalData(rows[Number(num) - 1].id);
      }
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
      <InventoryModal
        open={modalVisible}
        onClose={modalHandler}
        productId={modalData}
      />
    </main>
  );
};

export default InventoryPage;
