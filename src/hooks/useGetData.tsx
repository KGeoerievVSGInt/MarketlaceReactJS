import { useState, useEffect } from "react";

const useGetData = (url: string) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(`https://localhost:7245${url}`);
      if (!res.ok) {
        throw new Error(await res.json());
      }
      const fetchedData = await res.json();

      setData(fetchedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return data;
};

export default useGetData;
