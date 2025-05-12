import { useState } from 'react';
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
  const { findAnimalData, updateAnimalData, nextStep } = useFindAnimalStore();
  const [selectedWeight, setSelectedWeight] = useState(
    findAnimalData.weight || ''
  );

  const handleWeightSelect = (weight: string) => {
    setSelectedWeight(weight);
  };

  const handleNextClick = () => {
    updateAnimalData('weight', selectedWeight);
    nextStep();
  };

  return (
    <Container>
      <Progressbar number={3} />
      <div className="flex flex-col justify-center items-center pt-20 gap-4 text-black font-bold text-4xl font-[NanumSquareNeoExtraBold]">
        <span>이상한 나라로 가는 문이 눈 앞에 있다.</span>
        <span>이 문의 크기는 얼마날까?</span>
      </div>
      <div className="flex justify-center items-center mt-20 gap-16">
        {buttonData.map((button) => (
          <button
            key={button.weight}
            onClick={() => handleWeightSelect(button.weight)}
            className={`w-40 h-40 border-2 rounded-xl bg-inherit cursor-pointer flex flex-col justify-center items-center font-[NanumSquareNeoBold] text-lg text-black ${
              selectedWeight === button.weight
                ? 'border-orange-500 shadow-md shadow-orange-500/40 transition duration-300'
                : 'border-gray-200'
            }`}
          >
            <img
              src={button.img}
              alt={button.alt}
              className="mb-4 w-20 h-20 object-contain"
            />
            {button.label}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center mt-20">
        <button
          onClick={handleNextClick}
          disabled={!selectedWeight}
          className={`w-60 h-14 mt-2 rounded-full border-0 flex items-center justify-center font-[NanumSquareNeoExtraBold] text-xl text-white ${
            selectedWeight
              ? 'bg-orange-500 cursor-pointer'
              : 'bg-gray-400 cursor-not-allowed'
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
