import Progressbar from '../../../shared/ui/ProgressBar';
import { useFindAnimalStore } from '../model/useFindAnimalStore';
import Container from '../../../shared/ui/ResponsiveContainer';

const buttonData = [
  { weight: '5', img: '/img/key.png', label: '열쇠 크기', alt: '열쇠' },
  {
    weight: '10',
    img: '/img/carrier.png',
    label: '캐리어 크기',
    alt: '캐리어',
  },
  { weight: '15', img: '/img/car.png', label: '자동차 크기', alt: '자동차' },
  { weight: '20', img: '/img/house.png', label: '집채', alt: '집' },
];

export default function AnimalWeight() {
  const { findAnimalData, updateAnimalData, nextStep, prevStep } =
    useFindAnimalStore();

  const handleWeightSelect = (weight: string) => {
    updateAnimalData('weight', weight);
  };

  const handleNextClick = () => {
    nextStep();
  };

  const handlePrevClick = () => {
    prevStep();
  };

  return (
    <Container>
      <Progressbar number={3} />
      <div className="flex flex-col justify-center items-center pt-20 gap-4 text-black font-bold text-xl font-[NanumSquareNeoExtraBold] lg:text-4xl">
        <span>이상한 나라로 가는 문이 눈 앞에 있다.</span>
        <span>이 문의 크기는 얼마날까?</span>
      </div>
      <div className="flex flex-col items-center mt-20 px-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 gap-4 lg:flex lg:justify-center lg:items-center lg:gap-12">
          {buttonData.map((button) => (
            <button
              key={button.weight}
              onClick={() => handleWeightSelect(button.weight)}
              className={`w-25 h-25 border-2 rounded-xl bg-inherit cursor-pointer flex flex-col justify-center items-center font-[NanumSquareNeoBold] text-lg text-black ${
                findAnimalData.weight === button.weight
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
      </div>
      <div className="flex justify-center items-center mt-20 gap-4">
        <button
          onClick={handlePrevClick}
          className="w-40 h-11 lg:w-60 lg:h-14 mt-2 rounded-full bg-orange-500 flex items-center justify-center font-[NanumSquareNeoExtraBold] text-md lg:text-xl text-white"
        >
          이전
          <img
            src="/img/footPrint.png"
            alt="이전"
            className="w-6 h-6 lg:w-8 lg:h-8 ml-2 align-middle"
          />
        </button>

        <button
          onClick={handleNextClick}
          disabled={!findAnimalData.weight}
          className={`w-40 h-11 lg:w-60 lg:h-14 mt-2 rounded-full flex items-center justify-center font-[NanumSquareNeoExtraBold] text-md lg:text-xl text-white transition ${
            findAnimalData.weight
              ? 'bg-orange-500 cursor-pointer'
              : 'bg-gray-200 cursor-not-allowed'
          }`}
        >
          다음
          <img
            src="/img/footPrint.png"
            alt="다음"
            className="w-6 h-6 lg:w-8 lg:h-8 ml-2 align-middle"
          />
        </button>
      </div>
    </Container>
  );
}
