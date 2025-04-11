import axios from 'axios';

export const fetchAnimalList = async () => {
  const KEY = import.meta.env.VITE_ANIMAL_API_KEY;
  const { data } = await axios.get(
    `https://openapi.gg.go.kr/AbdmAnimalProtect?KEY=${KEY}&Type=json&pSize=1000`
  );

  return data.AbdmAnimalProtect[1].row;
};
