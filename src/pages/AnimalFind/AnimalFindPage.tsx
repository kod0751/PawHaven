import { useFindAnimalStore } from '../../features/animalFindFlow/model/useFindAnimalStore';
import AnimalGender from '../../features/animalFindFlow/ui/AnimalGender';
import AnimalSpecies from '../../features/animalFindFlow/ui/AnimalSpecies';

export default function AnimalFindPage() {
  const step = useFindAnimalStore((state) => state.step);
  return (
    <div>
      {step === 0 && <AnimalSpecies />}
      {step === 1 && <AnimalGender />}
    </div>
  );
}
