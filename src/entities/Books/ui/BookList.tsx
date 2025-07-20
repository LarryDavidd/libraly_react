import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BookCard } from "./Book";
import styles from "./styles.module.scss";
import { fetchBooks } from "../../../shared/store/thunks";
import type { RootState } from "../../../shared/store/store";
import { useAppDispatch } from "../../../shared/store/hooks";
import Pagination from "../../../shared/ui-kits/navigation/Pagination";
import { setPage } from "../../../shared/store/slices/filter.slice";

export const BookList = () => {
  const dispatch = useAppDispatch();
  const { books, meta, loading, error } = useSelector(
    (state: RootState) => state.books
  );
  const { authors, genres, title, page } = useSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    dispatch(fetchBooks({ authors, genres, title, page }));
  }, [authors, genres, title, page, dispatch]);

  const onPageChange = (page: number) => {
    dispatch(setPage(page));
  };

  if (loading) {
    return <div className={styles["book-list__loading"]}>Загрузка книг...</div>;
  }

  if (error) {
    return <div className={styles["book-list__error"]}>Ошибка: {error}</div>;
  }

  return (
    <>
      <div className={styles["book-list"]}>
        {books.length > 0 ? (
          <div className={styles["book-list__grid"]}>
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className={styles["book-list__empty"]}>
            Книги по выбранным фильтрам не найдены
          </div>
        )}
      </div>
      <div className="pagination">
        {meta ? (
          <Pagination
            currentPage={meta.current_page}
            onPageChange={onPageChange}
            totalPages={meta.last_page}
          />
        ) : (
          <div className={styles["book-list__empty"]}>
            Книги по выбранным фильтрам не найдены
          </div>
        )}
      </div>
    </>
  );
};
