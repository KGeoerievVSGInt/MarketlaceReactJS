import InventoryTableRow from "../Elements/InventoryElements/InventoryTableRow";
import { useState } from "react";
import { createPortal } from "react-dom";
import InventoryModal from "../Elements/InventoryElements/InventoryModal";
const InventoryPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const modalHandler = () => {
    setModalVisible((prevState) => !prevState);
  };
  return (
    <main className="main-content-inventory">
      <form className="add-new">
        <div className="add-new-input">
          <input type="text" placeholder="Search..." id="new-add" />
        </div>
        <button className="add-new-button" onClick={modalHandler} type="button">
          <i className="fa-regular fa-plus"></i>
          <p className="add-new-button-text"> Add New</p>
        </button>
      </form>
      <div className="table">
        <table className="inventory-content">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Category</th>
              <th>For Sale</th>
              <th>Qty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <InventoryTableRow onToggle={modalHandler} />
          </tbody>
        </table>
        <div className="pagination-container"></div>
      </div>
      {modalVisible &&
        createPortal(<InventoryModal onToggle={modalHandler} />, document.querySelector("#modal")!)}
    </main>
  );
};

export default InventoryPage;
