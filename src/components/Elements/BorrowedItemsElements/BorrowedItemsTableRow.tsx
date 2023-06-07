import { useGetMarketDataQuery } from "../../../services/marketService";
import { BorrowedItemsType } from "../../../types";
import { dateFormat } from "../../../utils/dataFormat";

const BorrowedItemsTableRow = ({
  itemId,
  loanEndDate,
  loanStartDate,
  quantity,
}: BorrowedItemsType) => {
  const { data } = useGetMarketDataQuery(itemId);
  if (!data || Array.isArray(data)) return null; //check data type
  return (
    <tr>
      <td>{data.name}</td>
      <td>{quantity}</td>
      <td>{dateFormat(loanStartDate)}</td>
      <td className="borrow-status">{loanEndDate ? dateFormat(loanEndDate) : "Ongoing"}</td>
    </tr>
  );
};

export default BorrowedItemsTableRow;
