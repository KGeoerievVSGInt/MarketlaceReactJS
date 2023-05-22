import { InventoryItemType } from "../types";
import { serialize } from "object-to-formdata";
export const objToFormData = (data: Partial<InventoryItemType>) => {
  const newData = {
    ...data,
    code: Number(data.code),
    image: data.imageURL && data.imageURL[0],
  };
  console.log(newData);

  return serialize(newData);
};
