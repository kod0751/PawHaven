import { useFindAnimalStore } from '../model/useFindAnimalStore';
import Progressbar from '../../../shared/ui/ProgressBar';
import Container from '../../../shared/ui/ResponsiveContainer';

const buttonData = [
  { species: '강아지', img: '/img/dog.png', label: '강아지', alt: '강아지' },
  { species: '고양이', img: '/img/cat.png', label: '고양이', alt: '고양이' },
  { species: '그외', img: '/img/rabbit.png', label: '그 외', alt: '그 외' },
];

export default function AnimalSpecies() {
  const { findAnimalData, updateAnimalData, nextStep } = useFindAnimalStore();

  const handleSpeciesSelect = (species: string) => {
    updateAnimalData('species', species);
  };

  const handleNextClick = () => {
    nextStep();
  };

  return (
    <Container>
      <Progressbar number={1} />
      <div className="flex flex-col justify-center items-center pt-20 gap-4 text-black font-bold text-xl font-[NanumSquareNeoExtraBold] lg:text-4xl">
        <span>어느 날 눈 앞에 동물이 나에게 달려온다!</span>
        <span>이 동물은 무엇일까?</span>
      </div>
      <div className="flex justify-center items-center mt-20 gap-4 lg:gap-12">
        {buttonData.map((button) => (
          <button
            key={button.species}
            onClick={() => handleSpeciesSelect(button.species)}
            className={`w-25 h-25 border-2 rounded-xl bg-inherit cursor-pointer flex flex-col justify-center items-center font-[NanumSquareNeoBold] text-lg text-black ${
              findAnimalData.species === button.species
                ? 'border-orange-500 shadow-md transition duration-200 bg-orange-50'
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
      <div className="flex justify-center items-center mt-20">
        <button
          onClick={handleNextClick}
          disabled={!findAnimalData.species}
          className={`w-40 h-11 lg:w-60 lg:h-14 mt-2 rounded-full border-0 flex items-center justify-center font-[NanumSquareNeoExtraBold] text-md lg:text-xl text-white ${
            findAnimalData.species
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
