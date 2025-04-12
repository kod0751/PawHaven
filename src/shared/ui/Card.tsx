import { Bookmark } from 'lucide-react';
import { AnimalData } from '../api/types';

type CardProps = {
  data: AnimalData;
};

export default function Card({ data }: CardProps) {
  return (
    <div className="w-48 font-['NanumSquareNeoBold'] flex flex-col gap-1">
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
        <Bookmark />
      </div>
      <div className="flex justify-between items-center text-[0.9rem]">
        <span>나이</span>
        <p>{data.AGE_INFO}살</p>
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
