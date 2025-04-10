import { Bookmark } from 'lucide-react';

export default function Card() {
  return (
    <div className="w-48 font-['NanumSquareNeoBold'] flex flex-col gap-1">
      <div>
        <img
          src="/img/exAnimal.png"
          alt="동물"
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <span className="font-[NanumSquareNeoHeavy] text-[1.2rem]">
          한국고양이
        </span>
        <Bookmark />
      </div>
      <div className="flex justify-between items-center text-[0.9rem]">
        <span>나이</span>
        <p>1살</p>
      </div>
      <div className="flex justify-between items-center text-[0.9rem]">
        <span>시도군</span>
        <p>안산시</p>
      </div>
      <div className="flex justify-between items-center text-[0.9rem]">
        <span>성별</span>
        <p>남아</p>
      </div>
      <div className="flex justify-between items-center text-[0.9rem]">
        <span>중성화</span>
        <p>미완료</p>
      </div>
    </div>
  );
}
