import { GridRowId } from "@mui/x-data-grid";
import React from "react";

//content page types

//header types
export interface HeaderObj {
  "/marketplace": string;
  "/inventory": string;
  "/pending": string;
  "/myorders": string;
  "/borrowed": string;
  "/lent": string;
}
//Markeplace types
export interface FetcherDataType {
  id: number;
  code: number;
  imageURL: string;
  price: number;
  category: string;
  quantityForSale: number;
}
export type SingleItemType = FetcherDataType & {
  name: string;
  description?: string;
};
export interface MarketplacePopupProps {
  quantity?: number;
  price?: number;
  onToggle: () => void;
  itemId: number;
}
export interface MarketplaceModalProps {
  code: number;
  open: boolean;
  onClose: (e: React.MouseEvent) => void;
}
export interface MarketOrderType {
  itemId: number;
  quantity: number;
}

// inventory types
export interface InventoryItemType {
  id: number;
  name: string;
  category: string;
  code: string;
  description?: string;
  imageURL?: string | null;
  price?: number;
  quantityForSale?: number;
  quantity: number;
  location: string;
  availableQuantity?: number;
  imageModified?: boolean;
}
export interface InvenotryTableProps {
  onToggle: (val: GridRowId) => void;
  data: InventoryItemType[];
}
export interface InventoryActionCellType {
  onToggle: (id: number) => void;
  cellId: number;
  hasAvailable: boolean;
}
export type InventoryModalDataType = {
  id: number;
  name: string;
  category: string;
  description: string;
  forSale: number;
  qty: number;
  img: string;
} | null;

export interface InvenotryDialogModalProps {
  open: boolean;
  onClose: (val?: GridRowId) => void;
  product: InventoryItemType | null;
}
export interface InventoryPopupProps {
  onToggle: () => void;
  id: GridRowId | null;
}
export interface InventoryLentModalType {
  data: InventoryItemType | undefined;
}

export interface LentModalType {
  orderedBy: string;
  quantity: number;
  itemID: number;
}
//Pending Orders Types
export interface PendingOrdersRowType {
  id: number;
  itemCode: number;
  orderDate: string;
  orderPrice: number;
  orderedBy: string;
  quantity: number;
}
//Empty table type

export interface EmptyTableRow {
  text: string;
  numofCols: number;
}
// My Orders Types

export interface MyOrdersRowType {
  id: number;
  itemCode: number;
  name: string;
  orderDate: string;
  orderPrice: number;
  quantity: number;
  status: string;
}
export interface MyOrdersPopupType {
  id: number;
  onToggle: () => void;
}
//Context Types
export interface LentItemsProviderProps {
  children: React.ReactNode;
}
export interface AuthContextType {
  user: string | null;
  userSetter: (val: string) => void;
  logout: () => void;
}
export interface HamburgerContexType {
  isMenuShown: boolean;
  menuToggle: () => void;
}
export interface LentContextType {
  isLentModalVisible: boolean;
  toggleLentModal: (id: number | null) => void;
  itemId: number | null;
}
//Lent Items
export interface LentItemsType {
  email: string;
  count: number;
}
export interface BorrowedItemsType {
  id: number;
  itemId: number;
  orderedBy: string;
  quantity: number;
  loanStartDate: string;
  loanEndDate: string | null;
}
//Users Type
export interface UserType {
  avatar: string;
  name: string;
  email: string;
}
