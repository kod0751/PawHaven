import { useAnimalList } from '../../features/animalList/model/useAnimalList';
import { Carousel } from '../../widgets/Carousel';
import HomeBanner from './components/HomeBanner';
import Graph from './components/Graph';

export default function HomePage() {
  const { data } = useAnimalList();

  console.log('Animal Data:', data);

  return (
    <div>
      <HomeBanner />
      <Carousel />
      <Graph />
    </div>
  );
}
