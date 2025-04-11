import { useQuery } from '@tanstack/react-query';
import { fetchAnimalList } from '../../../shared/api/useGetAllData';

export const useAnimalList = () => {
  return useQuery({
    queryKey: ['animalList'],
    queryFn: () => fetchAnimalList(),
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
  });
};
