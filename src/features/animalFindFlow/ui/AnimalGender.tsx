import { useFindAnimalStore } from '../model/useFindAnimalStore';
import Progressbar from '../../../shared/ui/ProgressBar';
import Container from '../../../shared/ui/ResponsiveContainer';

const buttonData = [
  { gender: '남아', img: '/img/gold.png', label: '빛나는 황금', alt: '황금' },
  {
    gender: '여아',
    img: '/img/diamond.png',
    label: '화려한 보석',
    alt: '보석',
  },
];

export default function AnimalGender() {
  const { findAnimalData, updateAnimalData, nextStep, prevStep } =
    useFindAnimalStore();

  const handleGenderSelect = (gender: string) => {
    updateAnimalData('gender', gender);
  };

  const handleNextClick = () => {
    nextStep();
  };

  const handlePrevClick = () => {
    prevStep();
  };

  return (
    <Container>
      <Progressbar number={2} />
      <div className="flex flex-col justify-center items-center pt-20 gap-4 text-black font-bold text-xl font-[NanumSquareNeoExtraBold] lg:text-4xl">
        <span>백만장자에게 금고를 선물 받았다.</span>
        <span>금고 안에 어떤게 한가득 쌓여 있을까?</span>
      </div>
      <div className="flex justify-center items-center mt-20 gap-4 lg:gap-12">
        {buttonData.map((button) => (
          <button
            key={button.gender}
            onClick={() => handleGenderSelect(button.gender)}
            className={`w-25 h-25 border-2 rounded-xl bg-inherit cursor-pointer flex flex-col justify-center items-center font-[NanumSquareNeoBold] text-lg text-black ${
              findAnimalData.gender === button.gender
                ? 'border-orange-500 shadow-md shadow-orange-500/40 transition duration-300'
                : 'border-gray-200'
            } lg:w-40 lg:h-40`}
          >
            <img
              src={button.img}
              alt={button.alt}
              className="w-15 h-15 object-contain lg:w-24 lg:h-24 lg:mb-4"
            />
            {button.label}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center mt-20 gap-4">
        <button
          onClick={handlePrevClick}
          className="w-60 h-14 mt-2 rounded-full bg-orange-500 flex items-center justify-center font-[NanumSquareNeoExtraBold] text-xl text-white cursor-pointer"
        >
          이전
          <img
            src="/img/footPrint.png"
            alt="이전"
            className="w-8 h-8 ml-2 align-middle"
          />
        </button>

        <button
          onClick={handleNextClick}
          disabled={!findAnimalData.gender}
          className={`w-60 h-14 mt-2 rounded-full flex items-center justify-center font-[NanumSquareNeoExtraBold] text-xl text-white transition ${
            findAnimalData.gender
              ? 'bg-orange-500 cursor-pointer'
              : 'bg-gray-200 cursor-not-allowed'
          }`}
        >
          다음
          <img
            src="/img/footPrint.png"
            alt="다음"
            className="w-8 h-8 ml-2 align-middle"
          />
        </button>
      </div>
    </Container>
  );
}
