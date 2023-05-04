import closeIcon from "../../../assets/marketPage/Vector_close.svg";
import defaultImage from "../../../assets/marketPage/product-image.png";
import bubbles from "../../../assets/marketPage/bubbles.png";
import { MarketplaceModalProps } from "../../../types";
import { useModalToggle } from "../../../hooks/useModalToggle";
const MarketModal = ({ onClose }: MarketplaceModalProps) => {
  const {
    modalClassName,
    backdropClassName,
    modalRef,
    backdropRef,
    closeAnimationHandler,
  } = useModalToggle(onClose);
  return (
    <div className="modal">
      <div className={`modal-content ${modalClassName}`} ref={modalRef}>
        <button onClick={closeAnimationHandler}>
          <img src={closeIcon} alt="Close Details Modal" />
        </button>
        <img src={defaultImage} alt="Hard coded description" />
        <div className="item-info">
          <div className="item-info-left">
            <div className="item-info-left-name">
              Laptop MacBook Pro 16” M1 Max 32GB RAM 1TB SSD 32 Cores GPU
            </div>
            <div className="item-info-left-цатегоръ">Laptops</div>
          </div>
          <div className="item-info-right">
            <div className="item-info-right-price">5000BGN</div>
            <div className="item-info-right-quantity">QTY: 1</div>
          </div>
        </div>
        <div className="item-description">
          This it the description of the product. This it the description of the
          product. This it the description of the product. This it the
          description of the product. This it the description of the product.
          This it the description of the product. This it the description of the
          product. This it the description of the product. This it the
          description of the product. This it the description of the product.
          This it the description of the product. This it the description of the
          product. This it the description of the product. This it the
          description of the product.
        </div>
        <img src={bubbles} alt="Bubbles Decoration" className="bubbles"/>
      </div>
      <div className={`backdrop ${backdropClassName}`} ref={backdropRef}></div>
    </div>
  );
};

export default MarketModal;
