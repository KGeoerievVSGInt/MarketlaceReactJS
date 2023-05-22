import { FetcherDataType } from "../types";
import { serialize } from "object-to-formdata";

const usePostData = async (url: string, data: FetcherDataType) => {
  const formData = serialize(data);
  try {
    const res = await fetch(url, {
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      throw new Error(await res.json());
    }
  } catch (error) {
    console.log(error);
  }

  return;
};

export default usePostData;
