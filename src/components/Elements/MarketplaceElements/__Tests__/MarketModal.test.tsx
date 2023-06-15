import { render, screen, fireEvent } from "@testing-library/react";
import { useGetMarketDataQuery } from "../../../../services/marketService";
import MarketModal from "../MarketModal";

jest.mock("../../../../services/marketService");

describe("MarketModal", () => {
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
  describe("render tests", () => {
    it("renders image correctly", () => {
      render(<MarketModal open={true} onClose={jest.fn()} code={1} />);
      const dialogImage = screen.getByAltText(
        "Test Product"
      ) as HTMLImageElement;
      expect(dialogImage).toBeInTheDocument();
      expect(dialogImage.src).toBe("http://localhost/test_image_url");
      expect(dialogImage.alt).toBe("Test Product");
    });
    it("renders product name correctly", () => {
      render(<MarketModal open={true} onClose={jest.fn()} code={1} />);
      const nameElement = screen.getByText("Test Product");
      expect(nameElement).toBeInTheDocument();
    });
    it("renders product name correctly", () => {
      render(<MarketModal open={true} onClose={jest.fn()} code={1} />);
      const closeButton = screen.getByRole("close-button");
      expect(closeButton).toBeInTheDocument();
    });
  });
  describe("function tests", () => {
    it("calls onClose when close button is clicked", () => {
      const onCloseMock = jest.fn();
      render(<MarketModal open={true} onClose={onCloseMock} code={1} />);
      const closeButton = screen.getByRole("close-button");
      fireEvent.click(closeButton);

      expect(onCloseMock).toHaveBeenCalled();
    });
  });
});
