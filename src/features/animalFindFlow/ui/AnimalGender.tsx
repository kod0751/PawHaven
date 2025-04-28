import { useState } from 'react';
import { useFindAnimalStore } from '../model/useFindAnimalStore';
import Progressbar from '../../../shared/ui/ProgressBar';

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
  const { findAnimalData, updateAnimalData, nextStep } = useFindAnimalStore();
  const [selectedGender, setSelectedGender] = useState(
    findAnimalData.gender || ''
  );

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
  };

  const handleNextClick = () => {
    updateAnimalData('gender', selectedGender);
    nextStep();
  };

  return (
    <>
      <Progressbar number={2} />
      <div className="flex flex-col justify-center items-center pt-20 gap-4 text-black font-bold text-4xl font-[NanumSquareNeoExtraBold]">
        <span>백만장자에게 금고를 선물 받았다.</span>
        <span>금고 안에 어떤게 한가득 쌓여 있을까?</span>
      </div>
      <div className="flex justify-center items-center mt-20 gap-16">
        {buttonData.map((button) => (
          <button
            key={button.gender}
            onClick={() => handleGenderSelect(button.gender)}
            className={`w-40 h-40 border-2 rounded-xl bg-inherit cursor-pointer flex flex-col justify-center items-center font-[NanumSquareNeoBold] text-lg text-black ${
              selectedGender === button.gender
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
          disabled={!selectedGender}
          className={`w-60 h-14 mt-8 rounded-full border-0 flex items-center justify-center font-[NanumSquareNeoExtraBold] text-xl text-white ${
            selectedGender
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
    </>
  );
}
