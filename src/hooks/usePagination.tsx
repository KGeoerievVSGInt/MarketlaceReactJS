import { useState, useEffect } from "react";

export const usePagination = <T,>(data: T[], itemsPetPage = 12) => {
  const [items, setItems] = useState<T[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [maxPage, setMaxPage] = useState(0);

  const nextPage = () => setCurrentPage((prevState) => prevState + 1);
  const prevPage = () => setCurrentPage((prevState) => prevState - 1);
  useEffect(() => {
    if (data) {
      setMaxPage(Math.ceil(data.length / itemsPetPage));
      setItems(
        data.slice(
          currentPage * itemsPetPage,
          currentPage * itemsPetPage + itemsPetPage
        )
      );
    }
  }, [data, currentPage]);

  return {
    items,
    currentPage,
    maxPage,
    nextPage,
    prevPage,
  };
};
