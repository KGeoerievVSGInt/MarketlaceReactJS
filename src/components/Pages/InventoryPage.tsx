import { useState } from "react";
import InventoryModal from "../Elements/InventoryElements/InventoryModal";
import InventoryTable from "../Elements/InventoryElements/InventoryTable";
import { Stack, TextField, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
const InventoryPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalHandler = () => {
    setModalVisible((prevState) => !prevState);
  };
  return (
    <main className="main-content-inventory">
      <Stack direction={"row"} marginBottom={3} spacing={2}>
        <TextField variant="standard"/>
        <Button variant="contained" color="success" startIcon={<Add />}>
          Add New
        </Button>
      </Stack>
      {/* <form className="add-new">
        <div className="add-new-input">
          <input type="text" placeholder="Search..." id="new-add" />
        </div>
        <button className="add-new-button" onClick={modalHandler} type="button">
          <i className="fa-regular fa-plus"></i>
          <p className="add-new-button-text"> Add New</p>
        </button>
      </form> */}
      <InventoryTable onToggle={modalHandler} />
      <InventoryModal open={modalVisible} onClose={modalHandler} />
    </main>
  );
};

export default InventoryPage;
