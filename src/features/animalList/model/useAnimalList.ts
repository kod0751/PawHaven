import { useQuery } from '@tanstack/react-query';
import { fetchAllAnimalList } from '../../../shared/api/useGetAllData';
import { AnimalData } from '../../../shared/api/types';

export const useAnimalList = () => {
  return useQuery<AnimalData[]>({
    queryKey: ['animalList'],
    queryFn: () => fetchAllAnimalList(),
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
  });
};
