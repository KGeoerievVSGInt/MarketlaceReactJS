import { EmptyTableRow } from "../../types";

const EmptyTableRowElement = ({ text, numofCols }: EmptyTableRow) => {
  return (
    <tr>
      <td colSpan={numofCols} className="empty-cell">
        {text}
      </td>
    </tr>
  );
};

export default EmptyTableRowElement;
