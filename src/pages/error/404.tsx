import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md text-center bg-white rounded-lg border-0">
        <div className="pt-12 pb-8 px-8">
          <div className="mb-8">
            <div className="text-8xl text-orange-500 mb-4 font-[NanumSquareNeoExtraBold]">
              404
            </div>
            <h1 className="text-2xl text-gray-900 pb-4 font-[NanumSquareNeoBold]">
              페이지를 찾을 수 없습니다
            </h1>
            <p className="text-gray-600 mb-8 font-[NanumSquareNeoBold]">
              죄송합니다. 찾고 계신 페이지를 찾을 수 없습니다.
            </p>
            <p className="text-gray-600 mb-8 font-[NanumSquareNeoBold]">
              페이지가 이동되었거나, 삭제되었거나, 잘못된 URL을 입력하셨을 수
              있습니다.
            </p>
          </div>

          <div className="space-y-4">
            <Link to="/" className="w-full">
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center font-[NanumSquareNeoBold]">
                <Home className="mr-2 h-4 w-4" />
                메인화면으로
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
