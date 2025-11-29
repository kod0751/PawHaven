import { useState, useMemo } from 'react';
import { useAnimalList } from './useAnimalList';
import { calculatePetAge } from '../../../shared/utils/calculatePetAge';
import { FilterOptions } from './types';

// 필터 값을 실제 품종 타입으로 매핑
const breedFilterMap = {
  강아지: '강아지',
  고양이: '고양이',
  그외: '기타축종', // '그외' 선택 시 '기타축종'으로 매핑
} as const;

// 품종 코드 범위로 품종 타입 결정
const getBreedTypeByCode = (speciesCode: string): string => {
  const cleanCode = speciesCode?.trim();
  const code = parseInt(cleanCode, 10);

  if (isNaN(code)) {
    console.warn('Invalid species code:', speciesCode);
    return '기타축종';
  }

  if (code === 117) {
    return '기타축종';
  }

  if ((code >= 0 && code <= 116) || (code >= 118 && code <= 169)) {
    return '강아지';
  }

  if (code >= 170) {
    return '고양이';
  }

  return '기타축종';
};

const genderMap = {
  남아: 'M',
  여아: 'F',
} as const;

const neuteredMap = {
  완료: 'Y',
  미완료: 'N',
  알수없음: 'U',
} as const;

const isFilterActive = (value: string | undefined): boolean => {
  return !!value && value !== '전체';
};

const isAgeInRange = (petAge: number, ageFilter: string): boolean => {
  switch (ageFilter) {
    case '1세미만':
      return petAge < 1;
    case '1살~5살':
      return petAge >= 1 && petAge <= 5;
    case '6살~9살':
      return petAge >= 6 && petAge <= 9;
    case '10살이상':
      return petAge >= 10;
    default:
      return true;
  }
};

export function useFilteredAnimalList() {
  const { data: allAnimals, isLoading, error } = useAnimalList();
  const [filters, setFilters] = useState<FilterOptions>({});

  const filteredAnimals = useMemo(() => {
    if (!allAnimals) return [];

    const activeFilters = {
      region: isFilterActive(filters.region) ? filters.region : null,
      status: isFilterActive(filters.status) ? filters.status : null,
      breed: isFilterActive(filters.breed)
        ? breedFilterMap[filters.breed as keyof typeof breedFilterMap] // '그외' -> '기타축종' 매핑
        : null,
      gender: isFilterActive(filters.gender)
        ? genderMap[filters.gender as keyof typeof genderMap]
        : null,
      neutered: isFilterActive(filters.neutered)
        ? neuteredMap[filters.neutered as keyof typeof neuteredMap]
        : null,
      shelter: filters.shelter || null,
      age: isFilterActive(filters.age) ? filters.age : null,
    };

    return allAnimals.filter((animal) => {
      if (activeFilters.region && animal.SIGUN_NM !== activeFilters.region) {
        return false;
      }

      if (activeFilters.status && animal.STATE_NM !== activeFilters.status) {
        return false;
      }

      // 품종 필터링 - '그외' 선택 시 '기타축종'과 매칭
      if (activeFilters.breed) {
        const breedType = getBreedTypeByCode(animal.SPECIES_NM);
        if (breedType !== activeFilters.breed) {
          return false;
        }
      }

      if (activeFilters.gender && animal.SEX_NM !== activeFilters.gender) {
        return false;
      }

      if (activeFilters.neutered && animal.NEUT_YN !== activeFilters.neutered) {
        return false;
      }

      if (activeFilters.shelter && animal.SHTER_NM !== activeFilters.shelter) {
        return false;
      }

      if (activeFilters.age) {
        const petAge = calculatePetAge(animal.AGE_INFO);
        if (!isAgeInRange(petAge, activeFilters.age)) {
          return false;
        }
      }

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
