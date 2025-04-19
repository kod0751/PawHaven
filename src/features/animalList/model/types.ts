import { AnimalData } from '../../../shared/api/types';

export interface AnimalListProps {
  animals: AnimalData[];
  isLoading: boolean;
  filters: FilterOptions;
}

export interface FilterOptions {
  region?: string;
  status?: string;
  breed?: string;
  age?: string;
  gender?: string;
  neutered?: string;
  shelter?: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface CategoryFilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}
