import axios from 'axios';
import { AnimalData } from './types';

export const fetchAllAnimalList = async (): Promise<AnimalData[]> => {
  const KEY = import.meta.env.VITE_ANIMAL_API_KEY;
  const baseUrl = 'https://openapi.gg.go.kr/AbdmAnimalProtect';

  // 첫 요청으로 총 데이터 수 확인
  const initialResponse = await axios.get(
    `${baseUrl}?KEY=${KEY}&Type=json&pIndex=1&pSize=1`
  );

  // 총 데이터 수 계산
  const totalCount =
    initialResponse.data.AbdmAnimalProtect[0].head[0].list_total_count;
  const pageSize = 1000; // 한 페이지당 데이터 수
  const totalPages = Math.ceil(totalCount / pageSize);

  // 모든 페이지의 데이터를 병합할 배열
  let allData: AnimalData[] = [];

  // 모든 페이지 순회
  for (let page = 1; page <= totalPages; page++) {
    try {
      const response = await axios.get(
        `${baseUrl}?KEY=${KEY}&Type=json&pIndex=${page}&pSize=${pageSize}`
      );

      // API 응답 구조에 따라 데이터 추출
      const pageData = response.data.AbdmAnimalProtect[1].row;
      allData = [...allData, ...pageData];

      // 서버 부하 방지를 위한 요청 간 간격 추가
      if (page < totalPages) {
        await new Promise((resolve) => setTimeout(resolve, 300));
      }
    } catch (error) {
      console.error('데이터 가져오기 실패:', error);
    }
  }

  return allData;
};
