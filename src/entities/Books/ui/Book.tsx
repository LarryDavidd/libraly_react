import React from "react";
import styles from "./styles.module.scss";
import { SimpleButton } from "../../../shared/ui-kits/buttons";
import type { Author, Genre } from "../../../shared/store/model";

interface BookCardProps {
  book: {
    id: number;
    title: string;
    description: string;
    image_path: string;
    authors: Author[];
    genres: Genre[];
  };
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const authorsText = book.authors
    .map(
      (author) =>
        `${author.first_name} ${author.last_name} ${author.middle_name ?? ""}`
    )
    .join(", ");

  const genresText = book.genres.map((genre) => genre.name).join(", ");

  return (
    <article className={styles["book-card"]}>
      <div className={styles["book-card__image-container"]}>
        <img
          src={book.image_path}
          alt={book.title}
          className={styles["book-card__image"]}
        />
      </div>

      <div className={styles["book-card__content"]}>
        <h3 className={styles["book-card__title"]}>{book.title}</h3>

        <div className={styles["book-card__meta"]}>
          {authorsText && (
            <span className={styles["book-card__author"]}>
              Authors: {authorsText}
            </span>
          )}
          {genresText && (
            <span className={styles["book-card__genres"]}>
              Genres: {genresText}
            </span>
          )}
        </div>

        <p className={styles["book-card__description"]}>
          {book.description &&
            (book.description.length > 150
              ? `${book.description.substring(0, 150)}...`
              : book.description)}
        </p>

        <SimpleButton onClick={() => {}} text="More details" />
      </div>
    </article>
  );
};
