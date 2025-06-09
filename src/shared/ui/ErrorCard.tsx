import { AlertCircle, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ErrorMessageProps {
  error: Error | null;
}

export default function ErrorCard({ error }: ErrorMessageProps) {
  if (!error) return null;

  return (
    <div className="max-w-lg mx-auto p-4 mt-10 font-['NanumSquareNeoBold']">
      <div className="bg-white border border-red-200 rounded-lg shadow-sm overflow-hidden">
        <div className="bg-red-50 px-6 py-4 border-b border-red-200">
          <div className="text-center">
            <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg text-red-900">문제가 발생했습니다</h3>
            <p className="text-sm text-red-700 mt-1">
              {error.message || '요청을 처리하는 중에 오류가 발생했습니다.'}
            </p>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="flex justify-center">
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              <Home className="h-4 w-4 mr-2" />
              메인화면으로
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
