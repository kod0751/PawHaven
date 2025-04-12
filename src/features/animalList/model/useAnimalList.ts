import { useQuery } from '@tanstack/react-query';
import { fetchAnimalList } from '../../../shared/api/useGetAllData';
import { AnimalData } from '../../../shared/api/types';

export const useAnimalList = () => {
  return useQuery<AnimalData[]>({
    queryKey: ['animalList'],
    queryFn: () => fetchAnimalList(),
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
  });
};
