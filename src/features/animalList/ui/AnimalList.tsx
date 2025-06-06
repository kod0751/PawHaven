import Card from '../../../shared/ui/Card';
import Pagination from '../../../shared/ui/PagiNation';
import Container from '../../../shared/ui/ResponsiveContainer';
import { useEffect, useState } from 'react';
import { AnimalListProps } from '../model/types';
import { titleByPage } from '../../../shared/utils/titleByPage';
import Empty from '../../../shared/ui/Empty';
import Loading from '../../../shared/ui/Loading';

export default function AnimalList({
  animals,
  isLoading,
  filters,
  pageType,
}: AnimalListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;

  const totalCount = animals.length;
  const totalPages = Math.ceil(totalCount / pageSize);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const paginatedAnimals = animals.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Container className="py-8">
      <div className="font-['NanumSquareNeoExtraBold'] text-3xl my-8 lg:text-4xl">
        {titleByPage(pageType, totalCount, filters)}
      </div>

      {isLoading ? (
        <div className="text-center py-16">
          <Loading />
        </div>
      ) : (
        <>
          <div
            className="
            w-full mb-12 grid grid-cols-5 gap-y-8 gap-x-2 justify-items-center
            max-[1400px]:grid-cols-4
            max-[1200px]:grid-cols-3
            max-[950px]:grid-cols-2
            max-[710px]:grid-cols-2 max-[710px]:mx-auto max-[710px]:mb-8 max-[710px]:w-auto max-[710px]:gap-8
            max-[500px]:grid-cols-1 max-[500px]:justify-center max-[500px]:mx-auto max-[500px]:mb-8 max-[500px]:w-auto max-[500px]:gap-8
            "
          >
            {paginatedAnimals.length > 0 ? (
              paginatedAnimals.map((animal, index) => (
                <Card key={index} data={animal}></Card>
              ))
            ) : (
              <Empty />
            )}
          </div>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}
    </Container>
  );
}
