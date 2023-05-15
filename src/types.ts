import { GridRowId } from "@mui/x-data-grid";

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
export type FetcherDataType = {
  code: number;
  imageUrl: string;
  price: number;
  category: string;
  quantityForSale: number;
};
export type MarketplaceCardItemProps = {
  data: FetcherDataType;
};
export type QuantityDropdownProps = {
  changeValueHandler: (element: React.RefObject<HTMLDivElement>) => void;
};
export type MarketplacePopupProps = {
  type: string;
  onToggle: () => void;
};
export type MarketplaceModalProps = {
  open: boolean;
  onClose: () => void;
};
// inventory types
export type InventoryItemType = {
  id: number;
  code: string;
  name: string;
  category: string;
  forSale: string;
  qty: string;
};
export type InvenotryTableProps = {
  onToggle: (val: GridRowId) => void;
  data: InventoryItemType[];
};
export type InventoryModalDataType = {
  id: number;
  name: string;
  category: string;
  description: string;
  forSale: number;
  qty: number;
  img: string;
} | null;

export type InvenotryDialogModalProps = {
  open: boolean;
  onClose: (val?: GridRowId) => void;
  productId: number | null;
};
//Popup Types
export type PopupObj = {
  market: JSX.Element;
  inventory: JSX.Element;
};
//Context Types

export type ProviderProps = {
  children: React.ReactNode;
};
export type ContextType = {
  name: string | null;
  type: string | null;
  typeSetter: (val: string) => void;
  nameSetter: (val: string) => void;
  logout: () => void;
};
//Protect Types

export type ProtectedProps = {
  children: React.ReactNode;
};
