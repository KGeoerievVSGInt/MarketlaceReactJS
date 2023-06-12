import { InventoryItemType } from "../types";
import { serialize } from "object-to-formdata";
export const objToFormData = (data: Partial<InventoryItemType>) => {
  const { imageURL, imageModified, ...rest } = data;
  console.log("here");

  return serialize({
    ...rest,
    image: imageURL ? imageURL[0] : null,
    imageChanges: imageModified || false,
  });
};
