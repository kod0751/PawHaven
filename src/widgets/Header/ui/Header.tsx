import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../../../shared/ui/ResponsiveContainer';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container className="relative">
      <div className="flex justify-between items-center py-8">
        <Link to="/">
          <div className="flex font-['jalnan'] text-2xl">
            발바닥
            <img
              src="/img/logo.png"
              alt="logo"
              className="w-10 h-3 -translate-y-1"
            />
            구조대
          </div>
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex gap-8 font-['NanumSquareNeoExtraBold']">
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
          <Link to="/find">
            <li
              className={`relative transition-all ${
                currentPath === '/find'
                  ? 'text-orange-500'
                  : 'hover:text-orange-400'
              }`}
            >
              털친소
            </li>
          </Link>
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

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-orange-500" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="flex flex-col gap-8 font-['NanumSquareNeoExtraBold'] text-xl text-center">
            <Link to="/list" onClick={handleLinkClick}>
              <li
                className={`relative transition-all py-4 ${
                  currentPath === '/list'
                    ? 'text-orange-500'
                    : 'hover:text-orange-400'
                }`}
              >
                유기동물보기
              </li>
            </Link>
            <Link to="/find" onClick={handleLinkClick}>
              <li
                className={`relative transition-all py-4 ${
                  currentPath === '/find'
                    ? 'text-orange-500'
                    : 'hover:text-orange-400'
                }`}
              >
                털친소
              </li>
            </Link>
            <Link to="/shelter" onClick={handleLinkClick}>
              <li
                className={`relative transition-all py-4 ${
                  currentPath === '/shelter'
                    ? 'text-orange-500'
                    : 'hover:text-orange-400'
                }`}
              >
                주변 보호소 찾기
              </li>
            </Link>
            <Link to="/liked" onClick={handleLinkClick}>
              <li
                className={`relative transition-all py-4 ${
                  currentPath === '/liked'
                    ? 'text-orange-500'
                    : 'hover:text-orange-400'
                }`}
              >
                나의 관심동물
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </Container>
  );
}
