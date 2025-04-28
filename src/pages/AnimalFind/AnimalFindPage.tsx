import { useFindAnimalStore } from '../../features/animalFindFlow/model/useFindAnimalStore';
import AnimalColor from '../../features/animalFindFlow/ui/AnimalColor';
import AnimalGender from '../../features/animalFindFlow/ui/AnimalGender';
import AnimalSpecies from '../../features/animalFindFlow/ui/AnimalSpecies';
import AnimalWeight from '../../features/animalFindFlow/ui/AnimalWeight';

export default function AnimalFindPage() {
  const step = useFindAnimalStore((state) => state.step);
  return (
    <div>
      {step === 0 && <AnimalSpecies />}
      {step === 1 && <AnimalGender />}
      {step === 2 && <AnimalWeight />}
      {step === 3 && <AnimalColor />}
    </div>
  );
}
