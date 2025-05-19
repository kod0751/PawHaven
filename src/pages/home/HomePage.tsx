import { Carousel } from '../../widgets/Carousel';
import HomeBanner from './components/HomeBanner';
import Graph from './components/Graph';

export default function HomePage() {
  return (
    <div>
      <HomeBanner />
      <Carousel />
      <Graph />
    </div>
  );
}
