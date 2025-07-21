import cn from "classnames";
import { BookList } from "../../../entities/Books";
import styles from "./styles.module.scss";

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <div className={cn(styles.main__wrapper, "wrapper")}>
        <BookList />
      </div>
    </main>
  );
};
