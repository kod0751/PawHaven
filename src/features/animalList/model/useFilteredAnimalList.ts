import { useState, useMemo } from 'react';
import { useAnimalList } from './useAnimalList';
import { calculatePetAge } from '../../../shared/utils/calculatePetAge';
import { FilterOptions } from './types';

export function useFilteredAnimalList() {
  const { data: allAnimals, isLoading, error } = useAnimalList();
  const [filters, setFilters] = useState<FilterOptions>({});

  const breedMatchMap: Record<string, string> = {
    강아지: '개',
    고양이: '고양이',
    그외: '기타축종',
  };
  const matchKeyword = breedMatchMap[filters.breed ?? ''];

  const genderMap: Record<string, string> = {
    남아: 'M',
    여아: 'F',
  };

  const mappedGender = genderMap[filters.gender ?? ''];

  const neuteredMap: Record<string, string> = {
    완료: 'Y',
    미완료: 'N',
    알수없음: 'U',
  };

  const mappedNeuterd = neuteredMap[filters.neutered ?? ''];

  const filteredAnimals = useMemo(() => {
    if (!allAnimals) return [];

    return allAnimals.filter((animal) => {
      if (
        filters.region &&
        filters.region !== '전체' &&
        animal.SIGUN_NM !== filters.region
      )
        return false;
      if (
        filters.status &&
        filters.status !== '전체' &&
        animal.STATE_NM !== filters.status
      )
        return false;
      if (
        filters.breed &&
        filters.breed !== '전체' &&
        !animal.SPECIES_NM.includes(matchKeyword)
      )
        return false;
      if (filters.age && filters.age !== '전체') {
        const petAge = calculatePetAge(animal.AGE_INFO);
        if (filters.age === '1세미만' && petAge >= 1) return false;
        if (filters.age === '1살~5살' && (petAge < 1 || petAge > 5))
          return false;
        if (filters.age === '6살~9살' && (petAge < 6 || petAge > 9))
          return false;
        if (filters.age === '10살이상' && petAge < 10) return false;
      }
      if (
        filters.gender &&
        filters.gender !== '전체' &&
        animal.SEX_NM !== mappedGender
      )
        return false;
      if (
        filters.neutered &&
        filters.neutered !== '전체' &&
        animal.NEUT_YN !== mappedNeuterd
      )
        return false;
      if (
        filters.shelter &&
        filters.shelter !== '' &&
        animal.SHTER_NM !== filters.shelter
      )
        return false;

      return true;
    });
  }, [allAnimals, filters]);

  return {
    data: filteredAnimals,
    isLoading,
    error,
    filters,
    setFilters,
  };
}
