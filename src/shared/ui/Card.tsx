import { Bookmark } from 'lucide-react';
import { AnimalData } from '../api/types';
import { calculatePetAge } from '../utils/calculatePetAge';
import { useBookmark } from '../lib/hooks/useBookmark';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

type CardProps = {
  data: AnimalData;
};

export default function Card({ data }: CardProps) {
  const { isBookmarked, toggleBookmark } = useBookmark(data);
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const goToDetail = () => {
    navigate(`/detail/${data.ABDM_IDNTFY_NO}`);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  return (
    <div className="min-w-[180px] max-w-[240px] w-full font-['NanumSquareNeoBold'] flex flex-col gap-1">
      <div className="relative">
        {!imageLoaded && (
          <div className="w-full aspect-square bg-gray-200 rounded-2xl animate-pulse flex items-center justify-center">
            <div className="text-gray-400"></div>
          </div>
        )}

        <img
          className={`w-full aspect-square object-cover rounded-2xl cursor-pointer transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0 absolute top-0'
          }`}
          src={
            imageError ? '/img/empty.png' : data.IMAGE_COURS || '/img/empty.png'
          }
          alt={`${data.SPECIES_NM.replace(/\[.*?\]\s*/, '')} 사진`}
          loading="lazy"
          decoding="async"
          onLoad={handleImageLoad}
          onError={handleImageError}
          onClick={goToDetail}
        />
      </div>
      <div className="flex justify-between my-1">
        <span className="font-[NanumSquareNeoHeavy] text-[1.2rem]">
          {data.SPECIES_NM.replace(/\[.*?\]\s*/, '')}
        </span>
        <button
          onClick={toggleBookmark}
          className="focus:outline-none hover:scale-110 transition-transform duration-200"
        >
          <Bookmark fill={isBookmarked ? '#F97316' : 'none'} color="#F97316" />
        </button>
      </div>
      <div className="flex justify-between items-center text-[0.9rem]">
        <span>나이</span>
        <p>{calculatePetAge(data.AGE_INFO)}살</p>
      </div>
      <div className="flex justify-between items-center text-[0.9rem]">
        <span>시도군</span>
        <p>{data.SIGUN_NM}</p>
      </div>
      <div className="flex justify-between items-center text-[0.9rem]">
        <span>성별</span>
        <p>{data.SEX_NM === 'M' ? '남아' : '여아'}</p>
      </div>
      <div className="flex justify-between items-center text-[0.9rem]">
        <span>중성화</span>
        <p>{data.NEUT_YN === 'Y' ? '완료' : '미완료'}</p>
      </div>
    </div>
  );
}
