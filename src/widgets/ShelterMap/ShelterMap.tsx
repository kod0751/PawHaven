import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Container from '../../shared/ui/ResponsiveContainer';

export default function ShelterMap() {
  return (
    <Container className="py-8">
      <div className="font-['NanumSquareNeoExtraBold'] text-4xl my-8">
        나와 가까운 보호소를 클릭해 보세요!
      </div>
      <Map
        center={{ lat: 33.5563, lng: 126.79581 }}
        style={{ width: '100%', height: '360px' }}
      >
        <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
          <div style={{ color: '#000' }}>Hello World!</div>
        </MapMarker>
      </Map>
    </Container>
  );
}
