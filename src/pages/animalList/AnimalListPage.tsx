import AnimalList from '../../widgets/AnimalList/animalList';
import { Carousel } from '../../widgets/Carousel';
import Category from '../../widgets/Category/Category';

export default function AnimalListPage() {
  return (
    <div>
      <Carousel />
      <Category />
      <AnimalList />
    </div>
  );
}
