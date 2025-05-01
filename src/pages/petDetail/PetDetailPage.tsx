import { useParams } from 'react-router-dom';
import Container from '../../shared/ui/ResponsiveContainer';
import { useGetDetail } from '../../shared/api/useGetDetail';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useBookmark } from '../../shared/lib/hooks/useBookmark';
import { Bookmark } from 'lucide-react';

export default function PetDetailPage() {
  const { id } = useParams();
  const { data, isLoading } = useGetDetail(id);
  const { isBookmarked, toggleBookmark } = useBookmark(data);

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
        <Container className="py-8">
          <div>
            <div className="text-4xl font-[NanumSquareNeoExtraBold] text-black my-8 flex items-center">
              <button onClick={toggleBookmark} className="focus:outline-none">
                <Bookmark
                  fill={isBookmarked ? '#F97316' : 'none'}
                  size={40}
                  color="#F97316"
                />
              </button>
              <span className=" text-orange-500 px-3 py-1 rounded-full mr-2">
                공고번호
              </span>
              {data.PBLANC_IDNTFY_NO}
            </div>
            <div className="flex justify-center gap-40 flex-wrap p-8">
              <div className="w-xl h-xl">
                <img
                  src={data.IMAGE_COURS || '/img/empty.png'}
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
            <div>
              <div className="text-4xl font-[NanumSquareNeoExtraBold] text-black my-8">
                <span className=" text-orange-500 px-3 py-1 rounded-full mr-2">
                  {data.SHTER_NM}
                </span>
                에서 기다리고 있어요
              </div>
              <Map
                center={{
                  lat: parseFloat(data.REFINE_WGS84_LAT),
                  lng: parseFloat(data.REFINE_WGS84_LOGT),
                }}
                className="w-full h-120 mb-16 rounded-2xl"
                level={6}
              >
                <MapMarker
                  position={{
                    lat: parseFloat(data.REFINE_WGS84_LAT),
                    lng: parseFloat(data.REFINE_WGS84_LOGT),
                  }}
                  image={{
                    src: '/img/logo.png',
                    size: { width: 22, height: 20 },
                  }}
                  title={data.SHTER_NM}
                >
                  <div style={{ padding: '0.3rem', color: '#000' }}>
                    {data.SHTER_NM}
                  </div>
                </MapMarker>
              </Map>
            </div>
          </div>
        </Container>
      ) : (
        <div>로딩중...</div>
      )}
    </>
  );
}
