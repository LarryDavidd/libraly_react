import cn from "classnames";
import { BookList } from "../../../entities/Books";
import { FilterBar } from "../../../widgets/filterBar";
import styles from "./styles.module.scss";

export const MainPage = () => {
  return (
    <main className={styles.main}>
      <div className={cn(styles.main__wrapper, "wrapper")}>
        <FilterBar />
        <BookList />
      </div>
    </main>
  );
};
