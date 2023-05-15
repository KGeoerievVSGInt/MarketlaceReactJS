import { FetcherDataType } from "../types";

const usePostData = (url: string, data: FetcherDataType) => {
  const fetchPost = async () => {
    try {
      const res = await fetch(url, {
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error(await res.json());
      }
    } catch (error) {
      console.log(error);
    }

    return;
  };
};

export default usePostData;
