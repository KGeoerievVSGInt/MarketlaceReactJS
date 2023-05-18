import { useState, useEffect } from "react";

const useGetData = <T extends object>(url: string): T | T[] => {
  const [data, setData] = useState<T | T[]>([]);
  console.log("element mount");

  useEffect(() => {
    console.log("useEffect mount");

    const fetchData = async () => {
      console.log("fetchData execute");
      try {
        const res = await fetch(`https://localhost:7245${url}`);
        if (!res.ok) {
          throw new Error(await res.json());
        }
        const fetchedData = await res.json();

        setData(fetchedData);
        console.log("data set");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return data;
};

export default useGetData;
