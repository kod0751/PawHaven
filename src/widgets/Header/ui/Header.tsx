import { Link, useLocation } from 'react-router-dom';
import Container from '../../../shared/ui/ResponsiveContainer';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Container className="flex justify-between items-center py-8">
      <Link to="/">
        <div className="flex font-['jalnan'] text-2xl">
          발바닥
          <img
            src="/img/logo.png"
            alt="logo"
            className="w-10 h-3 -translate-y-1"
          ></img>
          구조대
        </div>
      </Link>
      <ul className="flex gap-8 font-['NanumSquareNeoExtraBold']">
        <Link to="/list">
          <li
            className={`relative transition-all ${
              currentPath === '/list'
                ? 'text-orange-500'
                : 'hover:text-orange-400'
            }`}
          >
            유기동물보기
          </li>
        </Link>
        <li>털친소</li>
        <Link to="/shelter">
          <li
            className={`relative transition-all ${
              currentPath === '/shelter'
                ? 'text-orange-500'
                : 'hover:text-orange-400'
            }`}
          >
            주변 보호소 찾기
          </li>
        </Link>
        <Link to="/liked">
          <li
            className={`relative transition-all ${
              currentPath === '/liked'
                ? 'text-orange-500'
                : 'hover:text-orange-400'
            }`}
          >
            나의 관심동물
          </li>
        </Link>
      </ul>
    </Container>
  );
}
