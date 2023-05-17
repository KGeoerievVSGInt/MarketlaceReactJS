import { useState, useEffect } from "react";

const useGetData = <T extends object>(url: string): T | T[] => {
  const [data, setData] = useState<T | T[]>([]);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await fetch(`https://localhost:7245${url}`);
        if (!res.ok) {
          throw new Error(await res.json());
        }
        const fetchedData = await res.json();

        if (
          isMounted &&
          (fetchedData.length > 0 || Object.keys(fetchedData).length > 0)
        ) {
          setData(fetchedData);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (Array.isArray(data) && data.length === 0) {
      fetchData();
    }

    return () => {
      isMounted = false;
    };
  }, [data, url]);
  return data;
};

export default useGetData;
