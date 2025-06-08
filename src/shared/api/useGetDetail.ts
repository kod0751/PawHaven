import { useAnimalList } from '../../features/animalList/model/useAnimalList';

export const useGetDetail = (id: string | undefined) => {
  const { data: allData, isLoading, error } = useAnimalList();

  if (!id) {
    return {
      data: null,
      isLoading: false,
      error: new Error('잘못된 접근입니다.'),
    };
  }

  const data = allData?.find((value) => value.ABDM_IDNTFY_NO === id);
  const notFoundError =
    !isLoading && allData && !data
      ? new Error('해당 동물 정보를 찾을 수 없습니다.')
      : null;

  return { data, isLoading, error: error || notFoundError };
};
