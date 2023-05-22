import { useState, useEffect } from "react";

const useGetData = <T extends object>(url: string): T | T[] => {
  const [data, setData] = useState<T | T[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://localhost:7245${url}`);
        if (!res.ok) {
          throw new Error(await res.json());
        }
        const fetchedData = await res.json();

        setData(fetchedData);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return data;
};

export default useGetData;
