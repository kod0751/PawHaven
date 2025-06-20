import { useFindAnimalStore } from '../../features/animal-find-flow/model/useFindAnimalStore';
import AnimalColor from '../../features/animal-find-flow/ui/AnimalColor';
import AnimalGender from '../../features/animal-find-flow/ui/AnimalGender';
import AnimalResult from '../../features/animal-find-flow/ui/AnimalResult';
import AnimalSpecies from '../../features/animal-find-flow/ui/AnimalSpecies';
import AnimalWeight from '../../features/animal-find-flow/ui/AnimalWeight';
import SEO from '../../shared/ui/SEO';

export default function AnimalFindPage() {
  const step = useFindAnimalStore((state) => state.step);
  return (
    <div>
      <SEO
        title="Find"
        description="본인이 잃어버린 유기동물과 새로운 가족을 찾아봐요!~"
        keywords="유기동물, 품종, 성별, 체중, 색상, 유기견, 유기묘, 기타축종"
      />
      {step === 0 && <AnimalSpecies />}
      {step === 1 && <AnimalGender />}
      {step === 2 && <AnimalWeight />}
      {step === 3 && <AnimalColor />}
      {step === 4 && <AnimalResult />}
    </div>
  );
}
