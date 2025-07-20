import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Book, type PaginationMeta } from "../model";

interface BooksState {
  books: Book[];
  meta: PaginationMeta | null;
  loading: boolean;
  error: string | null;
}

const initialState: BooksState = {
  books: [],
  meta: null,
  loading: false,
  error: null,
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (
      state,
      action: PayloadAction<{ data: Book[]; meta: PaginationMeta }>
    ) => {
      state.books = action.payload.data;
      state.meta = action.payload.meta;
      state.loading = false;
      state.error = null;
    },
    fetchBooksStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchBooksError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setBooks, fetchBooksStart, fetchBooksError } =
  booksSlice.actions;
export default booksSlice.reducer;
