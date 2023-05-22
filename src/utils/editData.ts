import { InventoryItemType } from "../types";
import { objToFormData } from "./objToFormData";

export const editData = async (url: string, data: InventoryItemType) => {
  const formData = objToFormData(data);
  try {
    const res = await fetch(`https://localhost:7245${url}${data.code}`, {
      method: "PUT",
      body: formData,
    });
    if (!res.ok) {
      throw await res.json();
    }
  } catch (error) {
    console.log(error);
  }
};
