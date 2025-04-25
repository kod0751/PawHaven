export default function Progressbar({ number }: { number: number }) {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="w-4/5 h-8 flex justify-center items-center gap-2">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`w-1/5 h-5 rounded-md ${
              index < number ? 'bg-orange-500' : 'bg-zinc-200'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
