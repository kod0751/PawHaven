import { useEffect, useState } from 'react';
import Container from '../../../shared/ui/ResponsiveContainer';
import { calculatePetAge } from '../../../shared/utils/calculatePetAge';
import { useAnimalList } from '../../animalList/model/useAnimalList';
import { useFindAnimalStore } from '../model/useFindAnimalStore';
import { useNavigate } from 'react-router-dom';
import { useModalStore } from '../model/useModalStore';
import ResultModal from './ResultModal';

export default function AnimalResult() {
  const navigate = useNavigate();
  const { isOpen, open } = useModalStore();
  const { data: allAnimals } = useAnimalList();
  const { findAnimalData, reset } = useFindAnimalStore();
  const [filteredAnimals, setFilteredAnimals] = useState<typeof allAnimals>([]);

  useEffect(() => {
    if (!allAnimals?.length) return;

    const { species, gender, weight, color } = findAnimalData;

    const whiteColorKeywords = ['아이보리', '크림', '백색', '백', '흰'];
    const blackColorKeywords = ['흑색', '흑갈', '검정', '회흑', '흑', '블랙탄'];
    const greyColorKeywords = ['회백색', '검/흰', '흰/검', '쥐색'];
    const brownColorKeywords = [
      '흰색,갈색',
      '흰,갈',
      '갈색흰색',
      '갈색,베이지',
      '옅은갈색',
      '연갈',
      '베이지색',
      '초코',
      '갈',
    ];
    const goldColorKeywords = ['노랑색', '황색', '크림색', '치즈색', '치즈'];
    const threeColorKeywords = ['흰색,검정,갈색', '삼색', '백흑갈색'];
    const multiColorKeywords = ['고등어', '반점무늬'];
    const bwColorKeywords = [
      '검백색',
      '얼룩',
      '검/흰',
      '검.백',
      '검정흰색',
      '검줄/흰',
      '백흑색',
    ];

    const matches = allAnimals.filter((item) => {
      const colorMatches = color?.some((c) => {
        const colorSet = {
          흰색: whiteColorKeywords,
          검은색: blackColorKeywords,
          회색: greyColorKeywords,
          갈색: brownColorKeywords,
          금색: goldColorKeywords,
          삼색: threeColorKeywords,
          고등어색: multiColorKeywords,
          흑백: bwColorKeywords,
        }[c];
        return colorSet?.some((keyword) => item.COLOR_NM.includes(keyword));
      });

      const weightValue = parseFloat(
        item.BDWGH_INFO.match(/[0-9.]+/)?.[0] ?? '0'
      );
      const weightMatches =
        (weight === '5' && weightValue < 5) ||
        (weight === '10' && weightValue >= 5 && weightValue < 10) ||
        (weight === '15' && weightValue >= 10 && weightValue < 15) ||
        (weight === '20' && weightValue >= 15);

      const speciesMatches =
        (species === '강아지' && item.SPECIES_NM.includes('개')) ||
        (species === '고양이' && item.SPECIES_NM.includes('고양이')) ||
        (species === '그외' && item.SPECIES_NM.includes('기타축종'));

      const genderMatches =
        gender === '여아' ? item.SEX_NM === 'F' : item.SEX_NM === 'M';

      return speciesMatches && genderMatches && weightMatches && colorMatches;
    });

    setFilteredAnimals(matches);
  }, [allAnimals, findAnimalData]);

  const resultData = filteredAnimals?.slice(0, 3);

  const goToDetail = (id: string) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Container>
      <div className="flex justify-center itmes-center font-[NanumSquareNeoExtraBold] text-4xl pt-20">
        당신의 운명의 반려동물을 찾았어요!
      </div>
      <div className="w-4/5 pt-32 flex justify-center items-center gap-8 mx-auto font-['NanumSquareNeoExtraBold'] text-xl text-black">
        {resultData?.map((data, index) => (
          <div
            className={`flex flex-col justify-center items-center gap-6 ${
              index === 1 ? '-translate-y-12' : ''
            }`}
            key={index}
          >
            <div className="w-40 h-40 rounded-full border-4 border-orange-500 overflow-hidden">
              <img
                src={data.IMAGE_COURS}
                alt="이미지"
                className="w-40 aspect-square object-cover"
              />
            </div>
            <div className="w-40 flex justify-around items-center">
              <span>{data.SPECIES_NM.replace(/\[.*?\]\s*/, '')}</span>
              <span>{calculatePetAge(data.AGE_INFO)}살</span>
            </div>
            <button
              onClick={() => goToDetail(data.ABDM_IDNTFY_NO)}
              className="bg-orange-500 w-32 h-8 font-['NanumSquareNeoExtraBold'] text-[1rem] flex items-center justify-center border-0 rounded-full text-white"
            >
              보러가기
              <img src="/img/footPrint.png" alt="발바닥" className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center pt-20 gap-12">
        <button
          onClick={open}
          className="w-56 h-12 bg-white border-1 border-neutral-300 rounded-xl font-['NanumSquareNeoExtraBold'] text-md"
        >
          결과 설명듣기
        </button>
        <button
          onClick={() => {
            reset();
            navigate('/find');
          }}
          className="w-56 h-12 bg-neutral-800 border-0 rounded-xl font-['NanumSquareNeoExtraBold'] text-md text-white"
        >
          테스트 다시 하기
        </button>
      </div>
      {isOpen && <ResultModal />}
    </Container>
  );
}
