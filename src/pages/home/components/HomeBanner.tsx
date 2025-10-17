import { Link } from 'react-router-dom';
import Container from '../../../shared/ui/ResponsiveContainer';

export default function HomeBanner() {
  return (
    <section className="py-19 bg-white">
      <Container className="flex justify-center items-center gap-10 py-8 xl:justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-['NanumSquareNeoExtraBold'] text-3xl lg:mb-4 lg:text-5xl">
            버려진 아이들과
          </span>
          <span className="font-['NanumSquareNeoExtraBold'] text-3xl mb-4 lg:text-5xl">
            당신의 <span className="text-orange-500">운명적 만남</span>,
            찾고계신가요?
          </span>
          <p className="font-['NanumSquareNeo'] text-lg lg:text-xl">
            지금 당신의 따듯한 마음을 기다리는 친구들이 있습니다.
          </p>
          <p className="font-['NanumSquareNeo'] text-lg lg:text-xl">
            유기동물 입양으로 가족이 되어주세요.
          </p>

          <Link
            to="/find"
            className="inline-flex items-center justify-center bg-orange-500 w-58 h-13 mt-8 rounded-full text-white font-['NanumSquareNeoExtraBold'] text-[1rem] hover:bg-orange-600 transition-colors"
          >
            나의 반려동물 찾기
            <img src="/img/footPrint.png" alt="발바닥" className="w-8 h-8" />
          </Link>
        </div>
        <img
          src="/img/banner.png"
          alt="배너"
          className="w-lg h-auto hidden xl:block"
          loading="lazy"
        />
      </Container>
    </section>
  );
}
