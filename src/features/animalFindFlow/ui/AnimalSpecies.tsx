import { useState } from 'react';
import { useFindAnimalStore } from '../model/useFindAnimalStore';
import Progressbar from '../../../shared/ui/ProgressBar';

const buttonData = [
  { species: '강아지', img: '/img/dog.png', label: '강아지', alt: '강아지' },
  { species: '고양이', img: '/img/cat.png', label: '고양이', alt: '고양이' },
  { species: '그외', img: '/img/rabbit.png', label: '그 외', alt: '그 외' },
];

export default function AnimalSpecies() {
  const { findAnimalData, updateAnimalData, nextStep } = useFindAnimalStore();
  const [selectedSpecies, setSelectedSpecies] = useState(
    findAnimalData.species || ''
  );

  const handleSpeciesSelect = (species: string) => {
    setSelectedSpecies(species);
  };

  const handleNextClick = () => {
    updateAnimalData('species', selectedSpecies);
    nextStep();
  };

  return (
    <>
      <Progressbar number={1} />
      <div className="flex flex-col justify-center items-center pt-20 gap-4 text-black font-bold text-4xl font-[NanumSquareNeoExtraBold]">
        <span>어느 날 눈 앞에 동물이 나에게 달려온다!</span>
        <span>이 동물은 무엇일까?</span>
      </div>
      <div className="flex justify-center items-center mt-20 gap-16">
        {buttonData.map((button) => (
          <button
            key={button.species}
            onClick={() => handleSpeciesSelect(button.species)}
            className={`w-40 h-40 border-2 rounded-xl bg-inherit cursor-pointer flex flex-col justify-center items-center font-[NanumSquareNeoBold] text-lg text-black ${
              selectedSpecies === button.species
                ? 'border-orange-500 shadow-md shadow-orange-500/40 transition duration-300'
                : 'border-gray-200'
            }`}
          >
            <img
              src={button.img}
              alt={button.alt}
              className="mb-4 w-24 h-24 object-contain"
            />
            {button.label}
          </button>
        ))}
      </div>
      <div className="flex justify-center items-center mt-20">
        <button
          onClick={handleNextClick}
          disabled={!selectedSpecies}
          className={`w-60 h-14 mt-8 rounded-full border-0 flex items-center justify-center font-[NanumSquareNeoExtraBold] text-xl text-white ${
            selectedSpecies
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
