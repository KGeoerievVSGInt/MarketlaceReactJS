import pen from "../../../assets/inventory/Vector_pen.svg";
import trash from "../../../assets/inventory/Vector_trash.svg";
import { InvenotryTableRowsProps } from "../../../types";

const InventoryTableRow = ({ onToggle }: InvenotryTableRowsProps) => {
  return (
    <tr>
      <td>1</td>
      <td>Laptop Macbook Pro 16” M1 Max</td>
      <td>Laptops</td>
      <td>0</td>
      <td>2</td>
      <td className="actions">
        <button onClick={onToggle}>
          <img src={pen} alt="Edit Button" />
        </button>
        <button>
          <img src={trash} alt="Delete Button" />
        </button>
      </td>
    </tr>
  );
};

export default InventoryTableRow;
