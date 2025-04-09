import Container from '../../../shared/ui/ResponsiveContainer';
import logoSvg from '../../../assets/logo.svg';

export default function Header() {
  return (
    <Container className="flex justify-between items-center mt-6">
      <div className="flex font-['jalnan'] text-2xl ">
        발바닥
        <img src={logoSvg} alt="logo" className="w-8 -translate-y-0.5"></img>
        구조대
      </div>
      <ul className="flex gap-8 font-['NanumSquareNeoBold']">
        <li>유기동물보기</li>
        <li>털친소</li>
        <li>주변 보호소 찾기</li>
        <li>나의 관심동물</li>
      </ul>
    </Container>
  );
}
