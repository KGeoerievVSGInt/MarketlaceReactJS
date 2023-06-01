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
export type FetcherDataType = {
  id: number;
  code: number;
  imageURL: string;
  price: number;
  category: string;
  quantityForSale: number;
};
export type SingleItemType = FetcherDataType & {
  name: string;
  description?: string;
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
  itemId: number;
  quantity: number;
};

// inventory types
export type InventoryItemType = {
  id: number;
  name: string;
  category: string;
  code: number;
  description?: string;
  imageURL?: string | null;
  price?: number;
  quantityForSale?: number;
  quantity: number;
  location: string;
  imageModified?: boolean;
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
  id: number;
  itemCode: number;
  orderDate: string;
  orderPrice: number;
  orderedBy: string;
  quantity: number;
};
// My Orders Types

export type MyOrdersRowType = {
  id: number;
  itemCode: number;
  name: string;
  orderDate: string;
  orderPrice: number;
  quantity: number;
  status: string;
};
export type MyOrdersPopupType = {
  id: number;
  onToggle: () => void;
};
//Context Types
export type ProviderProps = {
  children: React.ReactNode;
};
export type AuthContextType = {
  user: string | null;
  userSetter: (val: string) => void;
  logout: () => void;
};
export type HamburgerContexType = {
  isMenuShown: boolean;
  menuToggle: () => void;
};
