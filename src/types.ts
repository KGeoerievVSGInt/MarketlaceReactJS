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
export type MarketplacePopupProps = {
  type: string;
  onToggle: () => void;
};
export type MarketplaceModalProps = {
  open: boolean;
  onClose: () => void;
};
// inventory types
export type InvenotryTableProps = {
  onToggle: () => void;
};

export type InvenotryDialogModalProps = {
  open: boolean;
  onClose: () => void;
};
//Popup Types
export type PopupObj = {
  market: JSX.Element;
  inventory: JSX.Element;
};
