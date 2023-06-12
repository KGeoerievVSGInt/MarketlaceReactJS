import { InventoryItemType } from "../types";
import { serialize } from "object-to-formdata";
export const objToFormData = (data: Partial<InventoryItemType>) => {
  const { imageURL, imageModified, ...rest } = data;

  return serialize({
    ...rest,
    image: imageURL ?? null,
    imageChanges: imageModified || false,
  });
};
