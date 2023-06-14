import { render, screen } from "@testing-library/react";
import MyOrdersTableRow from "../MyOrdersTableRow";
import { MyOrdersRowType } from "../../../../types";
const orderDate = "2023-06-12T16:27:35.47";
const MockTable = ({
  id,
  name,
  orderDate,
  orderPrice,
  status,
  quantity,
  itemCode,
}: MyOrdersRowType) => {
  return (
    <table>
      <tbody>
        <MyOrdersTableRow
          id={id}
          name={name}
          orderDate={orderDate}
          orderPrice={orderPrice}
          status={status}
          quantity={quantity}
          itemCode={itemCode}
        />
      </tbody>
    </table>
  );
};
it("should render element properly", () => {
  render(
    <MockTable
      id={1}
      itemCode={12}
      orderDate={orderDate}
      orderPrice={400}
      status="Pending"
      quantity={4}
      name="test"
    />
  );
  const row = screen.getByRole("order-row");
  const dateCell = screen.getByText("2023-06-12 16:27");
  expect(row).toBeInTheDocument();
  expect(dateCell).toBeInTheDocument();
});
it("should render date properly", () => {
  render(
    <MockTable
      id={1}
      itemCode={12}
      orderDate={orderDate}
      orderPrice={400}
      status="Pending"
      quantity={4}
      name="test"
    />
  );

});
it("should render delete button with pending status", () => {
  render(
    <MockTable
      id={1}
      itemCode={12}
      orderDate={orderDate}
      orderPrice={400}
      status="Pending"
      quantity={4}
      name="test"
    />
  );
  const statusBtn = screen.getByRole("button");
  expect(statusBtn).toBeInTheDocument();
});
it("should not render delete button with another status", () => {
  render(
    <MockTable
      id={1}
      itemCode={12}
      orderDate={orderDate}
      orderPrice={400}
      status="test"
      quantity={4}
      name="test"
    />
  );
  const statusBtn = screen.queryByRole("button");
  expect(statusBtn).not.toBeInTheDocument();
});
it("should render 5 cells", () => {
  render(
    <MockTable
      id={1}
      itemCode={12}
      orderDate={orderDate}
      orderPrice={400}
      status="Pending"
      quantity={4}
      name="test"
    />
  );
  const cells = screen.getAllByRole("cell");
  expect(cells.length).toBe(5);
});
