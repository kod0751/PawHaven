import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../../shared/ui/ResponsiveContainer';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from '../../../shared/ui/Card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { useOneDayList } from '../model/useOneDayList';
import { getTomorrowDateString } from '../../../shared/utils/date';

export default function Carousel() {
  const tomorrowDate = getTomorrowDateString();
  const { data } = useOneDayList(tomorrowDate);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section aria-labelledby="carousel-title" className="py-12">
      <Container className="justify-between items-center relative">
        <h2
          id="carousel-title"
          className="font-['NanumSquareNeoExtraBold'] text-3xl my-10 lg:text-4xl"
        >
          공고기간이 하루 남은 친구들이에요!
        </h2>

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
            slidesPerView={1}
            loop={true}
            breakpoints={{
              500: { slidesPerView: 2 },
              950: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1400: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {data?.map((value, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-full flex items-center justify-center">
                  <Card data={value} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="absolute top-1/2 -left-5 -translate-y-1/2 z-10 md:-left-10 xl:-left-15"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft
              size={60}
              className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
            />
          </button>

          <button
            ref={nextRef}
            className="absolute top-1/2 -right-5 -translate-y-1/2 z-10 md:-right-10 xl:-right-15"
            aria-label="다음 슬라이드"
          >
            <ChevronRight
              size={60}
              className="text-gray-400 hover:text-orange-500 transition-colors duration-200"
            />
          </button>
        </div>
      </Container>
    </section>
  );
}
