import React from "react";
import styles from "./styles.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  const getVisiblePages = () => {
    const half = Math.floor(maxVisiblePages / 2);
    let start = Math.max(1, currentPage - half);
    const end = Math.min(totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const visiblePages = getVisiblePages();

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`${styles.pagination__button} ${
          currentPage === 1 ? styles["pagination__button--disabled"] : ""
        }`}
        aria-label="Previous page"
      >
        &lt;
      </button>

      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className={`${styles.pagination__button} ${
              1 === currentPage ? styles["pagination__button--active"] : ""
            }`}
          >
            1
          </button>
          {visiblePages[0] > 2 && (
            <span className={styles.pagination__dots}>...</span>
          )}
        </>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`${styles.pagination__button} ${
            page === currentPage ? styles["pagination__button--active"] : ""
          }`}
        >
          {page}
        </button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
            <span className={styles.pagination__dots}>...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className={`${styles.pagination__button} ${
              totalPages === currentPage
                ? styles["pagination__button--active"]
                : ""
            }`}
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`${styles.pagination__button} ${
          currentPage === totalPages
            ? styles["pagination__button--disabled"]
            : ""
        }`}
        aria-label="Next page"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
