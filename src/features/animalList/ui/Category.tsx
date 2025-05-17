import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '../../../shared/ui/ResponsiveContainer';
import { CategoryFilterProps, FilterOptions } from '../model/types';

const regions = [
  '전체',
  '가평군',
  '고양시',
  '과천시',
  '광명시',
  '광주시',
  '구리시',
  '군포시',
  '김포시',
  '남양주시',
  '동두천시',
  '부천시',
  '성남시',
  '수원시',
  '시흥시',
  '안산시',
  '안성시',
  '안양시',
  '양주시',
  '양평군',
  '여주시',
  '연천군',
  '오산시',
  '용인시',
  '기흥구',
  '의왕시',
  '의정부시',
  '이천시',
  '파주시',
  '포천시',
  '하남시',
  '화성시',
];
const status = ['전체', '보호중', '종료'];
const breed = ['전체', '강아지', '고양이', '그외'];
const age = ['전체', '1세미만', '1살~5살', '6살~9살', '10살이상'];
const gender = ['전체', '남아', '여아'];
const neutered = ['전체', '완료', '미완료', '알수없음'];

const categories = [
  { id: 'region', label: '시도군', options: regions },
  { id: 'status', label: '상태', options: status },
  { id: 'breed', label: '품종', options: breed },
  { id: 'age', label: '나이', options: age },
  { id: 'gender', label: '성별', options: gender },
  { id: 'neutered', label: '중성화', options: neutered },
];

export default function CategoryFilter({
  filters,
  onFilterChange,
}: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const selectOption = (categoryId: string, option: string) => {
    const newFilters = { ...filters };

    if (option === '전체') {
      delete newFilters[categoryId as keyof FilterOptions];
    } else {
      newFilters[categoryId as keyof FilterOptions] = option;
    }

    onFilterChange(newFilters);
    setActiveCategory(null);
  };

  return (
    <Container className="pt-8">
      <div className="flex flex-wrap gap-2 justify-center items-center lg:justify-start">
        {categories.map((category) => (
          <div key={category.id} className="relative inline-block">
            <button
              onClick={() => toggleCategory(category.id)}
              className="flex items-center justify-between gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 focus:outline-none font-[NanumSquareNeoBold]"
            >
              <span>{category.label}</span>
              <span className="text-sm text-gray-500">
                {filters[category.id as keyof FilterOptions] ?? ''}
              </span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {activeCategory === category.id && (
              <div className="absolute z-10 mt-1 w-full max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-2xl shadow-lg left-0 font-[NanumSquareNeoBold]">
                {category.options.map((option) => (
                  <button
                    key={option}
                    className={`block w-full text-left px-4 py-2 text-sm ${
                      option === filters[category.id as keyof FilterOptions]
                        ? 'text-orange-500 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => selectOption(category.id, option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
