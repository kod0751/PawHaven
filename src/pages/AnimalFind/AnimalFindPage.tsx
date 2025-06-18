import { useFindAnimalStore } from '../../features/animalFindFlow/model/useFindAnimalStore';
import AnimalColor from '../../features/animalFindFlow/ui/AnimalColor';
import AnimalGender from '../../features/animalFindFlow/ui/AnimalGender';
import AnimalResult from '../../features/animalFindFlow/ui/AnimalResult';
import AnimalSpecies from '../../features/animalFindFlow/ui/AnimalSpecies';
import AnimalWeight from '../../features/animalFindFlow/ui/AnimalWeight';
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
