import { useParams } from 'react-router-dom';
import Container from '../../shared/ui/ResponsiveContainer';
import { useGetDetail } from '../../shared/api/useGetDetail';

export default function PetDetailPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetDetail(id);

  if (isLoading) return <div className="text-center mt-10">로딩 중...</div>;
  if (!data)
    return <div className="text-center mt-10">존재하지 않는 동물입니다.</div>;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const year = dateString.slice(0, 4);
    const month = dateString.slice(4, 6);
    const day = dateString.slice(6, 8);
    return `${year}-${month}-${day}`;
  };

  return (
    <>
      {data ? (
        <Container>
          <div>
            <div className="text-4xl font-[NanumSquareNeoExtraBold] text-black my-8 ml-8">
              <span className=" text-orange-500 px-3 py-1 rounded-full mr-2">
                공고번호
              </span>
              {data.PBLANC_IDNTFY_NO}
            </div>
            <div className="flex justify-center gap-28 flex-wrap px-8">
              <div className="w-[35rem] h-[35rem]">
                <img
                  src={data.IMAGE_COURS}
                  alt="동물 이미지"
                  className="w-full aspect-square object-cover rounded-2xl"
                />
              </div>

              <div className="flex flex-col gap-4 w-[40rem]">
                {[
                  ['품종', data.SPECIES_NM.replace(/\[.*?\]\s*/, '')],
                  ['성별', data.SEX_NM === 'M' ? '남아' : '여아'],
                  [
                    '중성화여부',
                    data.NEUT_YN === 'Y' ? '중성화 완료' : '중성화 미완료',
                  ],
                  ['나이', data.AGE_INFO],
                  ['체중', data.BDWGH_INFO],
                  ['접수일시', formatDate(data.RECEPT_DE)],
                  ['발견장소', data.DISCVRY_PLC_INFO],
                  ['특징', data.SFETR_INFO],
                  [
                    '공고기한',
                    `${formatDate(data.PBLANC_BEGIN_DE)} ~ ${formatDate(
                      data.PBLANC_END_DE
                    )}`,
                  ],
                  ['보호센터', data.SHTER_NM],
                  ['센터주소', data.REFINE_ROADNM_ADDR],
                  ['연락처', data.SHTER_TELNO],
                ].map(([label, value], idx) => (
                  <div className="flex gap-8" key={idx}>
                    <span className="w-24 h-8 rounded-full flex justify-center items-center text-white bg-orange-500 font-[NanumSquareNeoBold] text-sm">
                      {label}
                    </span>
                    <p className="flex items-center text-black font-[NanumSquareNeoExtraBold] text-base">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <div>로딩중...</div>
      )}
    </>
  );
}
