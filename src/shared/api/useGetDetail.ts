import { useAnimalList } from '../../features/animalList/model/useAnimalList';

export const useGetDetail = (id: string | undefined) => {
  const { data: allData, isLoading } = useAnimalList();
  const data = allData?.find((value) => value.ABDM_IDNTFY_NO === id);
  return { data, isLoading };
};
