//content page types
export type PagesObj = {
  "/marketplace": JSX.Element;
  "/inventory": JSX.Element;
  "/pending": JSX.Element;
  "/myorders": JSX.Element;
};
//header types
export type HeaderObj = {
  "/marketplace": string;
  "/inventory": string;
  "/pending": string;
  "/myorders": string;
};
//Markeplace types
export type QuantityDropdownProps = {
  changeValueHandler: (element: React.RefObject<HTMLDivElement>) => void;
};

export type MarketplaceModalProps = {
  onClose: () => void;
};
// inventory types
export type InvenotryTableRowsProps = {
  onToggle: () => void;
};
export type InventoryInputDivProps = {
  id: string;
  type: string;
  text: string;
  data?: string | null | undefined;
  name: string;
};
