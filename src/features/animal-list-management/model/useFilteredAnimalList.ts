import { useState, useMemo } from 'react';
import { useAnimalList } from './useAnimalList';
import { calculatePetAge } from '../../../shared/utils/calculatePetAge';
import { FilterOptions } from './types';
import { AnimalData } from '../../../shared/api/types';

const breedMatchMap = {
  강아지: '개',
  고양이: '고양이',
  그외: '기타축종',
} as const;

const genderMap = {
  남아: 'M',
  여아: 'F',
} as const;

const neuteredMap = {
  완료: 'Y',
  미완료: 'N',
  알수없음: 'U',
} as const;

export function useFilteredAnimalList() {
  const { data: allAnimals, isLoading, error } = useAnimalList();
  const [filters, setFilters] = useState<FilterOptions>({});

  const filteredAnimals = useMemo(() => {
    if (!allAnimals) return [];

    const matchKeyword =
      breedMatchMap[filters.breed as keyof typeof breedMatchMap] ?? '';
    const mappedGender =
      genderMap[filters.gender as keyof typeof genderMap] ?? '';
    const mappedNeutered =
      neuteredMap[filters.neutered as keyof typeof neuteredMap] ?? '';

    const matchesRegion = (animal: AnimalData) =>
      !filters.region ||
      filters.region === '전체' ||
      animal.SIGUN_NM === filters.region;

    const matchesStatus = (animal: AnimalData) =>
      !filters.status ||
      filters.status === '전체' ||
      animal.STATE_NM === filters.status;

    const matchesBreed = (animal: AnimalData) =>
      !filters.breed ||
      filters.breed === '전체' ||
      animal.SPECIES_NM.includes(matchKeyword);

    const matchesGender = (animal: AnimalData) =>
      !filters.gender ||
      filters.gender === '전체' ||
      animal.SEX_NM === mappedGender;

    const matchesNeutered = (animal: AnimalData) =>
      !filters.neutered ||
      filters.neutered === '전체' ||
      animal.NEUT_YN === mappedNeutered;

    const matchesShelter = (animal: AnimalData) =>
      !filters.shelter || animal.SHTER_NM === filters.shelter;

    const matchesAge = (animal: AnimalData) => {
      if (!filters.age || filters.age === '전체') return true;
      const petAge = calculatePetAge(animal.AGE_INFO);
      return (
        (filters.age === '1세미만' && petAge < 1) ||
        (filters.age === '1살~5살' && petAge >= 1 && petAge <= 5) ||
        (filters.age === '6살~9살' && petAge >= 6 && petAge <= 9) ||
        (filters.age === '10살이상' && petAge >= 10)
      );
    };

    return allAnimals.filter(
      (animal) =>
        matchesRegion(animal) &&
        matchesStatus(animal) &&
        matchesBreed(animal) &&
        matchesGender(animal) &&
        matchesNeutered(animal) &&
        matchesShelter(animal) &&
        matchesAge(animal)
    );
  }, [allAnimals, filters]);

  return {
    data: filteredAnimals,
    isLoading,
    error,
    filters,
    setFilters,
  };
}
