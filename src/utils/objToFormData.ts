import { InventoryItemType } from "../types";
import { serialize } from "object-to-formdata";
export const objToFormData = (data: Partial<InventoryItemType>) => {
  const newData = {
    code: data.code,
    name: data.name,
    price: data.price,
    category: data.category,
    quantity: data.quantity,
    quantityForSale: data.quantityForSale,
    availableQuantity: data.availableQuantity,
    description: data.description,
    image: data.imageURL && data.imageURL[0],
    location: data.location,
    imageChanges: data.imageModified,
  };
  console.log(newData);

  return serialize(newData);
};
