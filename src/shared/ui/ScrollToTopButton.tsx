import { useEffect, useState, useCallback } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 300);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    let timeoutId: number | null = null;
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(toggleVisibility, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [toggleVisibility]);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-orange-500 text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="맨 위로 스크롤"
      title="맨 위로 가기"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
