import { useState, useMemo } from 'react';
import { useAnimalList } from './useAnimalList';

export function usePaginatedAnimalList(itemsPerPage = 15) {
  const { data: allAnimals, isLoading, error } = useAnimalList();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    if (!allAnimals) return 0;
    return Math.ceil(allAnimals.length / itemsPerPage);
  }, [allAnimals, itemsPerPage]);

  const paginatedData = useMemo(() => {
    if (!allAnimals) return [];
    const startIndex = (currentPage - 1) * itemsPerPage;
    return allAnimals.slice(startIndex, startIndex + itemsPerPage);
  }, [allAnimals, currentPage, itemsPerPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    //window.scrollTo({ top: 0, behavior: "smooth" }) - 페이지 변경 시 상단으로
  };

  return {
    data: paginatedData,
    currentPage,
    totalPages,
    isLoading,
    error,
    handlePageChange,
  };
}
