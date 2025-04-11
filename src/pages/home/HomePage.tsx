import { useAnimalList } from '../../features/animalList/model/useAnimalList';
import { Carousel } from '../../widgets/Carousel';
import HomeBanner from './components/HomeBanner';

export default function HomePage() {
  const { data } = useAnimalList();

  console.log('Animal Data:', data); // 여기에 찍힘!

  return (
    <div>
      <HomeBanner />
      <Carousel />
    </div>
  );
}
