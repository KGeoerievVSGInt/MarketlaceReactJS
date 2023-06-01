import { GridRowId } from "@mui/x-data-grid";
import React from "react";

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
export type CardItemProps = {
  code: number;
  price: number;
  category: string;
  quantityForSale: number;
  imageURL: string;
};
export type FetcherDataType = {
  code: number;
  imageURL: string;
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
  quantity?: number;
  price?: number;
  onToggle: () => void;
  onBuy: () => void;
};
export type MarketplaceModalProps = {
  code: number;
  open: boolean;
  onClose: (e: React.MouseEvent) => void;
};
export type MarketOrderType = {
  itemCode: number;
  quantity: number;
  userEmail: string;
};

// inventory types
export type InventoryItemType = {
  id: number;
  name: string;
  category: string;
  code: number;
  description: string;
  imageURL: string | null;
  price: number;
  quantityForSale?: number;
  quantity: number;
  location: string;
  imageModified?: boolean;
  oldCode?: number;
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
  product: InventoryItemType | null;
};
export type InventoryPopupProps = {
  onToggle: () => void;
  id: GridRowId | null;
};

//Pending Orders Types
export type PendingOrdersRowType = {
  code: number;
  itemCode: number;
  orderDate: string;
  orderPrice: number;
  orderedBy: string;
  quantity: number;
};
// My Orders Types

export type MyOrdersRowType = {
  code: number;
  name: string;
  orderDate: string;
  orderPrice: number;
  quantity: number;
  status: string;
};
export type MyOrdersPopupType = {
  code: number;
  onToggle: () => void;
};
//Context Types
export type ProviderProps = {
  children: React.ReactNode;
};
export type ContextType = {
  user: string | null;
  userSetter: (val: string) => void;
  logout: () => void;
};

export type HamburgerContexType = {
  isMenuShown: boolean;
  menuToggle: () => void;
};
//Protect Types
