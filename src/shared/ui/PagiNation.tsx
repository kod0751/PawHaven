import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cs';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
    // 5페이지 이상인 경우, 표시할 페이지 번호를 조정합니다
    if (totalPages > 5) {
      // 시작 부분에 가까운 경우
      if (currentPage <= 3) {
        return i + 1;
      }
      // 끝 부분에 가까운 경우
      else if (currentPage >= totalPages - 2) {
        return totalPages - 4 + i;
      }
      // 중간에 있는 경우
      else {
        return currentPage - 2 + i;
      }
    }
    return i + 1;
  });

  return (
    <div className="flex items-center justify-center gap-2 my-8">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="이전 페이지"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            "w-10 h-10 rounded-md flex items-center justify-center font-['NanumSquareNeo']",
            currentPage === page
              ? 'bg-orange-500 text-white'
              : 'bg-white border hover:bg-gray-100'
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="p-2 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="다음 페이지"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
