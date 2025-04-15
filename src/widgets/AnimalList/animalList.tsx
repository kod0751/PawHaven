import { usePaginatedAnimalList } from '../../features/animalList/model/usePaginatedAnimalList';
import Card from '../../shared/ui/Card';
import Pagination from '../../shared/ui/PagiNation';
import Container from '../../shared/ui/ResponsiveContainer';

export default function AnimalList() {
  const { data, currentPage, totalPages, handlePageChange } =
    usePaginatedAnimalList(15);

  return (
    <Container>
      <div className="font-['NanumSquareNeoExtraBold'] text-4xl my-8">
        <span className="text-orange-500">10000</span>마리의 친구들이 기다리고
        있어요
      </div>
      <div
        className="
    w-full mb-12 grid grid-cols-5 gap-y-8 justify-items-center
    max-[1400px]:grid-cols-4
    max-[1200px]:grid-cols-3
    max-[950px]:grid-cols-2
    max-[710px]:grid-cols-2 max-[710px]:mx-auto max-[710px]:mb-8 max-[710px]:w-auto max-[710px]:gap-8
    max-[500px]:grid-cols-1 max-[500px]:justify-center max-[500px]:mx-auto max-[500px]:mb-8 max-[500px]:w-auto max-[500px]:gap-8
    "
      >
        {data?.map((value, index) => (
          <Card key={index} data={value}></Card>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </Container>
  );
}
