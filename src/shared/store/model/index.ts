export interface PaginationMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  from: number;
  to: number;
}

export interface ApiResponse<T> {
  meta: PaginationMeta;
  data: T;
  message?: string;
  status?: number;
}

export interface Book {
  id: number;
  title: string;
  image_path: string;
  authors: Author[];
  genres: Genre[];
  description: string;
}

export interface Author {
  id: number;
  first_name: string;
  last_name: string | null;
  middle_name: string | null;
}

export interface Genre {
  id: number;
  name: string;
}

export interface FilterState {
  title: string;
  authors: number[];
  genres: number[];
  page: number;
}
