import { useFilteredAnimalList } from '../../features/animalList/model/useFilteredAnimalList';
import AnimalList from '../../features/animalList/ui/AnimalList';
import CategoryFilter from '../../features/animalList/ui/Category';
import ShelterMap from '../../widgets/ShelterMap/ShelterMap';

export default function AnimalByShelterPage() {
  const { filters, setFilters, data, isLoading } = useFilteredAnimalList();
  return (
    <div>
      <ShelterMap filters={filters} onFilterChange={setFilters} />
      <CategoryFilter filters={filters} onFilterChange={setFilters} />
      <AnimalList
        animals={data}
        isLoading={isLoading}
        filters={filters}
        pageType="shelter"
      />
    </div>
  );
}
