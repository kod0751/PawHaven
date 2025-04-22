import { FilterOptions } from '../../features/animalList/model/types';

export function titleByPage(
  pageType: string,
  totalCount: number,
  filters?: FilterOptions
) {
  const hasShelter = !!filters?.shelter || filters?.shelter == '';

  switch (pageType) {
    case 'list':
      return (
        <>
          <span className="text-orange-500">{totalCount}</span>마리의 친구들이
          기다리고 있어요
        </>
      );
    case 'shelter':
      return hasShelter ? (
        <>
          <span className="text-orange-500">{filters.shelter}</span>에서
          친구들이 기다리고 있어요
        </>
      ) : (
        <>
          <span className="text-orange-500">경기도</span>에서 친구들이 기다리고
          있어요
        </>
      );
    case 'liked':
      return <>친구들에게 관심을 가져주셔서 감사해요!</>;
  }
}
