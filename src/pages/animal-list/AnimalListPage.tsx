import { useFilteredAnimalList } from '../../features/animal-list-management/model/useFilteredAnimalList';
import AnimalList from '../../features/animal-list-management/ui/AnimalList';
import { Carousel } from '../../widgets/Carousel';
import CategoryFilter from '../../features/animal-list-management/ui/Category';
import SEO from '../../shared/ui/SEO';

export default function AnimalListPage() {
  const { filters, setFilters, data, isLoading } = useFilteredAnimalList();

  return (
    <div>
      <SEO
        title="List"
        description="경기도 모든 유기동물을 보여드려요!~"
        keywords="유기동물, 유기견, 유기묘, 기타축종"
      />
      <Carousel />
      <CategoryFilter filters={filters} onFilterChange={setFilters} />
      <AnimalList
        animals={data}
        isLoading={isLoading}
        filters={filters}
        pageType="list"
      />
    </div>
  );
}
