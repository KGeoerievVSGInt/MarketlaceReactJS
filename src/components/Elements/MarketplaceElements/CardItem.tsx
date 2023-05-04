import defaultProductImage from "../../../assets/marketPage/product-image.png";
import chevron from "../../../assets/marketPage/chevron_up.svg";
import dollar from "../../../assets/marketPage/Vector_dollar.svg";
import { useDropdownToggle } from "../../../hooks/useDropdownToggle";
import { useState } from "react";
import QuantityDropdownElement from "./QuantityDropdownElement";
import MarketPopupElement from "./MarketPopupElement";
import { createPortal } from "react-dom";
import MarketModal from "./MarketModal";
const CardItem = () => {
  const [value, setValue] = useState("2");
  const [popupVisible, setPopupVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { visible, setVisible, buttonRef } = useDropdownToggle(false);
  const changeValueHandler = (refObj: React.RefObject<HTMLDivElement>) => {
    if (refObj.current?.textContent != undefined) {
      setValue(refObj.current?.textContent);
      setVisible((prevState) => !prevState);
    }
  };
  const toggleModal = () => {
    setModalVisible((prevState) => !prevState);
  };
  const togglePopup = () => {
    setPopupVisible((prevState) => !prevState);
  };
  return (
    <div className="card-item">
      <a href="#" onClick={toggleModal}>
        <img src={defaultProductImage} alt="Product Image" />
      </a>
      <div className="item-options">
        <div className="item-options-info">
          <span>5000BGN</span>
          <span className="item-options-info-category">Laptops</span>
        </div>
        <div className="item-options-purchase">
          <div className="dropdown">
            <span>Qty</span>
            <button
              ref={buttonRef}
              className="dropdown-button"
              onClick={() =>
                setVisible((prevState: boolean): boolean => !prevState)
              }
            >
              <span>{value}</span>
              <img src={chevron} alt="dropdown arrow" />
            </button>
            {visible && (
              <QuantityDropdownElement
                changeValueHandler={changeValueHandler}
              />
            )}
          </div>
          <button className="purchase-button" onClick={togglePopup}>
            <img src={dollar} alt="Purchase Button" />
          </button>
        </div>
      </div>
      {popupVisible && <MarketPopupElement />}
      {modalVisible &&
        createPortal(
          <MarketModal onClose={toggleModal} />,
          document.querySelector("#modal")!
        )}
    </div>
  );
};

export default CardItem;
