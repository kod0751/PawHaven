import { useState } from 'react';
import { useFindAnimalStore } from '../model/useFindAnimalStore';
import Progressbar from '../../../shared/ui/ProgressBar';
import Container from '../../../shared/ui/ResponsiveContainer';

const catData = [
  { color: '흰색', img: '/img/colorWhite.png', label: '흰색', alt: '흰색' },
  {
    color: '검은색',
    img: '/img/colorBlack.png',
    label: '검은색',
    alt: '검은색',
  },
  {
    color: '회색',
    img: '/img/colorGrey.png',
    label: '회색',
    alt: '회색',
  },
  { color: '갈색', img: '/img/colorBrown.png', label: '갈색', alt: '갈색' },
  { color: '금색', img: '/img/colorGold.png', label: '금색', alt: '금색' },
  { color: '삼색', img: '/img/colorThree.png', label: '삼색', alt: '삼색' },
  {
    color: '고등어색',
    img: '/img/colorMulti.png',
    label: '고등어색',
    alt: '고등어색',
  },
  { color: '흑백', img: '/img/colorBw.png', label: '흑백', alt: '흑백' },
];

const commonData = [
  { color: '흰색', img: '/img/colorWhite.png', label: '흰색', alt: '흰색' },
  {
    color: '검은색',
    img: '/img/colorBlack.png',
    label: '검은색',
    alt: '검은색',
  },
  {
    color: '회색',
    img: '/img/colorGrey.png',
    label: '회색',
    alt: '회색',
  },
  { color: '갈색', img: '/img/colorBrown.png', label: '갈색', alt: '갈색' },
  { color: '금색', img: '/img/colorGold.png', label: '금색', alt: '금색' },
  { color: '흑백', img: '/img/colorBw.png', label: '흑백', alt: '흑백' },
];

export default function AnimalColor() {
  const { findAnimalData, updateAnimalData, nextStep } = useFindAnimalStore();
  const [selectedColors, setSelectedColors] = useState<string[]>(
    findAnimalData.color || []
  );

  const handleColorSelect = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleNextClick = () => {
    updateAnimalData('color', selectedColors);
    nextStep();
  };

  const isMinimumSelected = selectedColors.length >= 3;

  return (
    <Container>
      <Progressbar number={3} />
      <div className="flex flex-col justify-center items-center pt-20 gap-4 text-black font-bold text-4xl font-[NanumSquareNeoExtraBold]">
        <span>나를 위한 티셔츠를 고르고 있다.</span>
        <span>어떤 색깔이 좋을까? 3개이상 골라보자!</span>
      </div>

      {findAnimalData.species === '고양이' ? (
        <div className="grid grid-cols-4 gap-6 mt-20 px-4 max-w-4xl mx-auto">
          {catData.map((button) => (
            <button
              key={button.color}
              onClick={() => handleColorSelect(button.color)}
              className={`w-40 h-40 border-2 rounded-xl bg-inherit cursor-pointer flex flex-col justify-center items-center font-[NanumSquareNeoBold] text-lg text-black ${
                selectedColors.includes(button.color)
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
      ) : (
        <div className="flex flex-col items-center mt-20 px-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 mb-6">
            {commonData.map((button) => (
              <button
                key={button.color}
                onClick={() => handleColorSelect(button.color)}
                className={`w-40 h-40 border-2 rounded-xl bg-inherit cursor-pointer flex flex-col justify-center items-center font-[NanumSquareNeoBold] text-lg text-black ${
                  selectedColors.includes(button.color)
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
        </div>
      )}

      <div className="flex justify-center items-center my-10">
        <button
          onClick={handleNextClick}
          disabled={!isMinimumSelected}
          className={`w-60 h-14 mt-2 rounded-full border-0 flex items-center justify-center font-[NanumSquareNeoExtraBold] text-xl text-white ${
            isMinimumSelected
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
