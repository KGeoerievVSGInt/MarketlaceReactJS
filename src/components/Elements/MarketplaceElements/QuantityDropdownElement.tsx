import { useDropdownToggle } from "../../../hooks/useDropdownToggle";
import { QuantityDropdownProps } from "../../../types";
import { useRef } from "react";
const QuantityDropdownElement = ({
  changeValueHandler,
}: QuantityDropdownProps) => {
  const { ref } = useDropdownToggle(false);
  const option = useRef<HTMLDivElement>(null);
  const dropdownHandler = () => {
    changeValueHandler(option);
  };
  return (
    <div className="dropdown-child" ref={ref}>
      <div className="option" ref={option} onClick={dropdownHandler}>
        1
      </div>
      <div className="option">2</div>
      <div className="option">3</div>
      <div className="option">4</div>
      <div className="option">5</div>
    </div>
  );
};

export default QuantityDropdownElement;
