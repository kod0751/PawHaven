import axios from 'axios';
import { AnimalData } from './types';

export const fetchOneDayList = async (
  tomorrowDate: string
): Promise<AnimalData[]> => {
  const KEY = import.meta.env.VITE_ANIMAL_API_KEY;
  const { data } = await axios.get(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${KEY}&PBLANC_END_DE=${tomorrowDate}&Type=json&pSize=20`
  );
  return data.AbdmAnimalProtect[1].row;
};
