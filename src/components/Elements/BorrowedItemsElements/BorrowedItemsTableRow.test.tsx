import { render, screen } from "@testing-library/react";
import BorrowedItemsTableRow from "./BorrowedItemsTableRow";

it("should render element", () => {
  render(
    <BorrowedItemsTableRow
      id={2}
      itemId={1}
      loanEndDate={null}
      loanStartDate="2023-06-12T16:27:35.47"
      orderedBy="kgeorgiev@vsgbg.com"
      quantity={2}
    />
  );

  const row = screen.getByText(/2023-06-12 16:27/i)
  expect(row).toBeDefined
});
