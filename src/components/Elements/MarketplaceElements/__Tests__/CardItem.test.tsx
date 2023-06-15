import { render, screen, fireEvent } from "@testing-library/react";
import { useGetMarketDataQuery } from "../../../../services/marketService";
import CardItem from "../CardItem";
const mockData = {
  id: 1,
  code: 1,
  price: 5,
  category: "Test Category",
  quantityForSale: 1,
  imageURL: "Test URL",
};
jest.mock("../../../../services/marketService");
describe("CardItem", () => {
  beforeEach(() => {
    (useGetMarketDataQuery as jest.Mock).mockImplementation(() => ({
      data: {
        imageURL: "test_image_url",
        name: "Test Product",
        category: "Test Category",
        price: 10,
        quantityForSale: 5,
        description: "Test description",
      },
    }));
  });
  it("should render modal", () => {
    render(<CardItem {...mockData} />);
    const linkElement = screen.getByRole("link-el");
    fireEvent.click(linkElement);
    const modal = screen.getByRole("market-modal");
    expect(modal).toBeInTheDocument();
  });
  it("should render dropdown menu", () => {
    render(<CardItem {...mockData} />);
    const dropdownMenu = screen.getByRole("dropdown");
    fireEvent.click(dropdownMenu);
    const dropdownChild = screen.getByRole("list");
    expect(dropdownChild).toBeVisible();
  });
});
