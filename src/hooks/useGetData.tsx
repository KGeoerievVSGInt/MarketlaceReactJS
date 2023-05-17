import { useState, useEffect } from "react";

const useGetData = <T extends object>(url: string): T | T[] => {
  const [data, setData] = useState<T | T[]>([]);

  useEffect(() => {
    console.log('here1');
    // let isMounted = true;
    const fetchData = async () => {
      try {
        console.log('here2');
        const res = await fetch(`https://fakestoreapi.com${url}`);
        if (!res.ok) {
          throw new Error(await res.json());
        }
        const fetchedData = await res.json();
        console.log('here3');
        // if (
        //   isMounted &&
        //   (fetchedData.length > 0 || Object.keys(fetchedData).length > 0)
        // ) {
          setData(fetchedData);
        // }
      } catch (error) {
        console.log(error);
      }
    };
    // if (Array.isArray(data) && data.length === 0) {
      fetchData();
    // }

    // return () => {
      // isMounted = false;
    // };
    console.log('here4');
  }, []);
  console.log('return1');
  return data;
};

export default useGetData;
