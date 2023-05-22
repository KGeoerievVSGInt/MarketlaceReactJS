import { InventoryItemType } from "../types";
import { objToFormData } from "./objToFormData";

export const postData = async (url: string, data: InventoryItemType) => {
  const formData = objToFormData(data);
  try {
    const res = await fetch(`https://localhost:7245${url}`, {
      method: "POST",
      body: formData,
    });
    console.log(res);

    if (!res.ok) {
      throw new Error(await res.json());
    }
  } catch (error) {
    console.log(error);
  }

  return;
};
