import { useFilteredAnimalList } from '../../features/animalList/model/useFilteredAnimalList';
import AnimalList from '../../widgets/AnimalList/animalList';
import { Carousel } from '../../widgets/Carousel';
import CategoryFilter from '../../widgets/Category/Category';

export default function AnimalListPage() {
  const { filters, setFilters, data, isLoading } = useFilteredAnimalList();

  return (
    <div>
      <Carousel />
      <CategoryFilter filters={filters} onFilterChange={setFilters} />
      <AnimalList animals={data} isLoading={isLoading} />
    </div>
  );
}
