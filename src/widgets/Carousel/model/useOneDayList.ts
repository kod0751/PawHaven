import { useQuery } from '@tanstack/react-query';
import { fetchOneDayList } from '../../../shared/api/useGetOneday';
import { AnimalData } from '../../../shared/api/types';

export const useOneDayList = (tomorrowDate: string) => {
  return useQuery<AnimalData[]>({
    queryKey: ['oneDayList', tomorrowDate],
    queryFn: () => fetchOneDayList(tomorrowDate),
    staleTime: 1000 * 60 * 5, // 5분 동안 캐시 유지
  });
};
