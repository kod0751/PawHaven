import { X } from 'lucide-react';
import { useModalStore } from '../model/useModalStore';
import InfoBox from './InfoBox';

const RESULT_INFO = [
  { title: '첫 번째 문제는', subtitle: '품종에 대한 문제입니다.' },
  { title: '두 번째 문제는', subtitle: '성별에 대한 문제입니다.' },
  { title: '세 번째 문제는', subtitle: '몸무게에 대한 문제입니다.' },
  { title: '네 번째 문제는', subtitle: '색상에 대한 문제입니다.' },
] as const;

export default function ResultModal() {
  const close = useModalStore((state) => state.close);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative w-120 h-120 bg-gray-50 p-4 rounded-2xl flex flex-col gap-4">
        <button
          onClick={close}
          className="w-full h-8 flex justify-end items-center cursor-pointer border-none bg-transparent"
        >
          <X />
        </button>

        {RESULT_INFO.map((info, index) => (
          <InfoBox key={index} title={info.title} subtitle={info.subtitle} />
        ))}
      </div>
    </div>
  );
}
