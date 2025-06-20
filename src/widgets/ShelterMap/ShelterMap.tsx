import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Container from '../../shared/ui/ResponsiveContainer';
import { CategoryFilterProps } from '../../features/animal-list-management/model/types';

export default function ShelterMap({
  filters,
  onFilterChange,
}: CategoryFilterProps) {
  const positions = [
    {
      title: '가평군유기동물보호소',
      latlng: { lat: 37.8459543, lng: 127.4991358 },
    },
    {
      title: '고양시동물보호센터',
      latlng: { lat: 37.6496069, lng: 126.870066 },
    },
    {
      title: '광주TNR동물병원송정',
      latlng: { lat: 37.41746097, lng: 127.2752964 },
    },
    {
      title: '수원시 동물보호센터',
      latlng: { lat: 37.2850336895, lng: 127.0787149165 },
    },
    {
      title: '남양주동물보호협회',
      latlng: { lat: 37.63389828, lng: 127.2079274 },
    },
    {
      title: '가나동물병원',
      latlng: { lat: 37.48350736, lng: 126.7631747 },
    },
    {
      title: '가야동물병원',
      latlng: { lat: 37.49060016, lng: 126.7838949 },
    },
    {
      title: '24시아이동물메디컬',
      latlng: { lat: 37.5256574, lng: 126.8045482 },
    },
    {
      title: 'cj동물병원',
      latlng: { lat: 37.50029663, lng: 126.7751273 },
    },
    {
      title: '펫앤쉘터동물병원',
      latlng: { lat: 37.3670017, lng: 127.1276345 },
    },
    {
      title: '시흥동물누리보호센터',
      latlng: { lat: 37.37405365, lng: 126.7427931 },
    },
    {
      title: '한국야생동물보호협회',
      latlng: { lat: 37.3401156, lng: 126.8700487 },
    },
    {
      title: '스타캣츠',
      latlng: { lat: 37.3135805, lng: 126.8367508 },
    },
    {
      title: '이성준동물병원',
      latlng: { lat: 37.0065829, lng: 127.274787 },
    },
    {
      title: '한국동물구조관리협회',
      latlng: { lat: 37.8700531, lng: 831861 },
    },
    {
      title: '양평군유기동물보호소',
      latlng: { lat: 37.51079775, lng: 127.5142953 },
    },
    {
      title: '위더스 동물보호센터',
      latlng: { lat: 37.297553, lng: 127.5756334 },
    },
    {
      title: '오산 유기동물보호소',
      latlng: { lat: 37.149051, lng: 127.065149 },
    },
    {
      title: '용인시 동물보호센터',
      latlng: { lat: 37.243299, lng: 127.1591338 },
    },
    {
      title: '나은동물병원',
      latlng: { lat: 37.7659558096, lng: 126.7753889745 },
    },
    {
      title: '평택시유기동물보호소',
      latlng: { lat: 37.1306281469, lng: 127.0554235932 },
    },
    {
      title: '하남동물병원',
      latlng: { lat: 37.5371145, lng: 127.204029 },
    },
    {
      title: '남양동물보호센터',
      latlng: { lat: 37.22494992, lng: 126.8434243 },
    },
  ];

  const handleShelterClick = (shelterName: string) => {
    onFilterChange({
      ...filters,
      shelter: shelterName,
    });
  };

  return (
    <Container className="py-8">
      <div className="font-['NanumSquareNeoExtraBold'] text-3xl my-8 lg:4xl">
        나와 가까운 보호소를 클릭해 보세요!
      </div>
      <Map
        center={{
          lat: 37.5401156,
          lng: 126.8700487,
        }}
        className="w-full h-120 rounded-2xl"
        level={10}
      >
        {positions.map((loc, index) => (
          <MapMarker
            key={index}
            position={loc.latlng}
            image={{
              src: '/img/logo.png',
              size: { width: 22, height: 20 },
            }}
            title={loc.title}
            onClick={() => handleShelterClick(loc.title)}
          />
        ))}
      </Map>
    </Container>
  );
}
