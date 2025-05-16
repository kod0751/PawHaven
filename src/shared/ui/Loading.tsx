export default function Loading() {
  return (
    <div className="w-full h-svh flex items-center justify-center">
      <img
        src="/img/dog.png"
        alt="강아지"
        className="w-16 h-16 m-4 animate-bounce lg:w-20 lg:h-20"
      />
      <img
        src="/img/cat.png"
        alt="고양이"
        className="w-16 h-16 m-4 animate-bounce lg:w-20 lg:h-20"
      />
      <img
        src="/img/rabbit.png"
        alt="그 외"
        className="w-16 h-16 m-4 animate-bounce lg:w-20 lg:h-20"
      />
    </div>
  );
}
