interface InfoBoxProps {
  title: string;
  subtitle: string;
}

export default function InfoBox({ title, subtitle }: InfoBoxProps) {
  return (
    <div className="w-full h-20 bg-white border border-gray-300 rounded-2xl flex flex-col justify-center items-start px-4">
      <span className="text-md font-[NanumSquareNeoExtraBold]">{title}</span>
      <span className="text-base font-[NanumSquareNeo]">{subtitle}</span>
    </div>
  );
}
