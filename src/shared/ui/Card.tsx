import { Bookmark } from 'lucide-react';
import { AnimalData } from '../api/types';
import { calculatePetAge } from '../utils/calculatePetAge';
import { useEffect, useState } from 'react';

type CardProps = {
  data: AnimalData;
};

export default function Card({ data }: CardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const existingBookmarks = JSON.parse(
      localStorage.getItem('bookmarkedAnimals') || '[]'
    );
    const bookmarked = existingBookmarks.some(
      (item: AnimalData) => item.ABDM_IDNTFY_NO === data.ABDM_IDNTFY_NO
    );
    setIsBookmarked(bookmarked);
  }, [data.ABDM_IDNTFY_NO]);

  const toggleBookmark = () => {
    const existingBookmarks = JSON.parse(
      localStorage.getItem('bookmarkedAnimals') || '[]'
    );

    if (isBookmarked) {
      const updatedBookmarks = existingBookmarks.filter(
        (item: AnimalData) => item.ABDM_IDNTFY_NO !== data.ABDM_IDNTFY_NO
      );
      localStorage.setItem(
        'bookmarkedAnimals',
        JSON.stringify(updatedBookmarks)
      );
      setIsBookmarked(false);
    } else {
      const updatedBookmarks = [...existingBookmarks, data];
      localStorage.setItem(
        'bookmarkedAnimals',
        JSON.stringify(updatedBookmarks)
      );
      setIsBookmarked(true);
    }
  };

  return (
    <div className="w-60 font-['NanumSquareNeoBold'] flex flex-col gap-1">
      <div>
        <img
          className="w-full aspect-square object-cover rounded-2xl"
          src={data.IMAGE_COURS}
          alt="동물"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-[NanumSquareNeoHeavy] text-[1.2rem]">
          {data.SPECIES_NM.replace(/\[.*?\]\s*/, '')}
        </span>
        <button onClick={toggleBookmark} className="focus:outline-none">
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
