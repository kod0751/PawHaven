import { useFilteredAnimalList } from '../../features/animalList/model/useFilteredAnimalList';
import AnimalList from '../../features/animalList/ui/AnimalList';
import CategoryFilter from '../../features/animalList/ui/Category';
import SEO from '../../shared/ui/SEO';
import ShelterMap from '../../widgets/ShelterMap/ShelterMap';

export default function AnimalByShelterPage() {
  const { filters, setFilters, data, isLoading } = useFilteredAnimalList();
  return (
    <div>
      <SEO
        title="Shelter"
        description="경기도의 보호소들의 위치와 해당 보호소에서 보호하고 있는 동물들을 볼 수 있어요!~"
        keywords="보호센터, 보호소, 유기동물, 경기도, 반려동물, 유기견, 유기묘, 기타축종"
      />
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
