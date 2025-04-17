import { useFilteredAnimalList } from '../../features/animalList/model/useFilteredAnimalList';
import AnimalList from '../../features/animalList/ui/AnimalList';
import { Carousel } from '../../widgets/Carousel';
import CategoryFilter from '../../features/animalList/ui/Category';

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
