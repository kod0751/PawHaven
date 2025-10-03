import axios from 'axios';
import { AnimalData } from './types';

// 페이지별 데이터 가져오기 함수
const fetchAnimalPage = async (
  page: number,
  pageSize: number,
  KEY: string,
  baseUrl: string
): Promise<AnimalData[]> => {
  const { data } = await axios.get(
    `${baseUrl}?KEY=${KEY}&Type=json&pIndex=${page}&pSize=${pageSize}`
  );
  return data.AbdmAnimalProtect[1].row as AnimalData[];
};

// 전체 데이터 가져오기 함수 (병렬 요청)
export const fetchAllAnimalList = async (): Promise<AnimalData[]> => {
  const KEY = import.meta.env.VITE_ANIMAL_API_KEY;
  const baseUrl = 'https://openapi.gg.go.kr/AbdmAnimalProtect';

  // 첫 요청으로 총 데이터 수 확인
  const initialResponse = await axios.get(
    `${baseUrl}?KEY=${KEY}&Type=json&pIndex=1&pSize=1`
  );
  const totalCount: number =
    initialResponse.data.AbdmAnimalProtect[0].head[0].list_total_count;

  const pageSize = 1000;
  const totalPages = Math.ceil(totalCount / pageSize);

  // 모든 페이지를 병렬로 요청
  const parallelQueries: Promise<AnimalData[]>[] = [];
  for (let page = 1; page <= totalPages; page++) {
    parallelQueries.push(fetchAnimalPage(page, pageSize, KEY, baseUrl));
  }

  // 병렬 요청 실행
  const results = await Promise.all(parallelQueries);

  // 모든 데이터 합치기
  const allData = results.flat();

  return allData;
};
