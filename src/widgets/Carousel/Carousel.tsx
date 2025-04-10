import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../shared/ui/ResponsiveContainer';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../../shared/ui/Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function Carousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <Container className="justify-between items-center my-8 relative">
      <div className="font-['NanumSquareNeoExtraBold'] text-4xl my-8">
        공고기간이 하루 남은 친구들이에요!
      </div>

      <div className="relative w-full">
        <Swiper
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-expect-error Swiper params navigation property expects HTMLElement
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error Swiper params navigation property expects HTMLElement
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          spaceBetween={10}
          modules={[Navigation]}
          slidesPerView={5}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="w-full"
        >
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full flex items-center justify-center">
                  <Card />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        <button
          ref={prevRef}
          className="absolute top-1/2 -left-15 -translate-y-1/2 z-10"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft
            size={60}
            className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
          />
        </button>

        <button
          ref={nextRef}
          className="absolute top-1/2 -right-15 -translate-y-1/2 z-10"
          aria-label="다음 슬라이드"
        >
          <ChevronRight
            size={60}
            className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
          />
        </button>
      </div>
    </Container>
  );
}
