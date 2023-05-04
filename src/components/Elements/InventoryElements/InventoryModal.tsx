import InventoryModalInputDiv from "./InventoryModalInputDiv";
import chevron from "../../../assets/marketPage/chevron_up.svg";
import noImagePlaceholder from "../../../assets/inventory/no_image-placeholder.png";
import closeIcon from "../../../assets/marketPage/Vector_close.svg";
import { useModalToggle } from "../../../hooks/useModalToggle";
import { InvenotryTableRowsProps } from "../../../types";
const InventoryModal = ({ onToggle }: InvenotryTableRowsProps) => {
  const {
    modalRef,
    backdropRef,
    backdropClassName,
    modalClassName,
    closeAnimationHandler,
  } = useModalToggle(onToggle);
  return (
    <div className="modal">
      <div className={`item-management ${modalClassName}`} ref={modalRef}>
        <form className="item-data">
          <div className="item-data-form">
            <div className="item-data-form-left">
              <InventoryModalInputDiv
                id="code"
                type="text"
                text="Code *"
                data={null}
                name="code"
              />
              <InventoryModalInputDiv
                id="name"
                type="text"
                text="Name *"
                data={null}
                name="name"
              />
              <div>
                <textarea
                  name="description"
                  id="item-description-area"
                  cols={40}
                  rows={6}
                  placeholder=" "
                ></textarea>
                <label htmlFor="item-description-area">Description</label>
              </div>
              <div className="category-dropdown">
                <button>
                  <span>Categoty *</span>
                  <img src={chevron} alt="Category Dropdown Arrow" />
                  <ul className="dropdown-child">
                    <li className="dropdown-option">Laptops</li>
                    <li className="dropdown-option">Furniture</li>
                    <li className="dropdown-option">Office Tools</li>
                    <li className="dropdown-option">Misc</li>
                  </ul>
                </button>
              </div>
              <InventoryModalInputDiv
                id="qty-for-sale"
                type="number"
                text="Qty For Sale"
                data={null}
                name="quantityForSale"
              />
              <InventoryModalInputDiv
                id="sale-price"
                type="number"
                text="Sale Price"
                data={null}
                name="price"
              />
              <InventoryModalInputDiv
                id="qty"
                type="number"
                text="QTY *"
                data={null}
                name="quantity"
              />
            </div>
            <div className="item-data-form-right">
              <img src={noImagePlaceholder} alt="Hard coded Image Text" />
              <button className="button button-waring">Upload</button>
              <input
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                className="button-hidden"
              />
              <button className="button button-remove">Remove</button>
            </div>
          </div>
          <div className="item-data-button-container">
            <button className="button button-success">Add</button>
          </div>
          <button type="button" onClick={closeAnimationHandler}>
            <img
              src={closeIcon}
              alt="Close Inventory Modal"
              className="close-button"
            />
          </button>
        </form>
      </div>
      <div className={`backdrop ${backdropClassName}`} ref={backdropRef}></div>
    </div>
  );
};

export default InventoryModal;
