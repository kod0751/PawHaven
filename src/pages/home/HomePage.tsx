import { Carousel } from '../../widgets/Carousel';
import HomeBanner from './components/HomeBanner';
import Graph from './components/Graph';
import SEO from '../../shared/ui/SEO';

export default function HomePage() {
  return (
    <div>
      <SEO
        title="Home"
        description="경기도 내 유기동물들의 현황을 파악하고, 잃어버린 반려동물을 찾는 보호자와 새로운 가족을 찾고 있는 유기동물을 연결시켜 드립니다!"
        keywords="유기동물, 경기도 유기동물 현황, 유기동물 찾기, 반려동물, 유기견, 유기묘, 입양, 유기동물 통계"
      />
      <HomeBanner />
      <Carousel />
      <Graph />
    </div>
  );
}
