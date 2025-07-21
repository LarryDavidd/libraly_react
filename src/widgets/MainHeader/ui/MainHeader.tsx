import cn from "classnames";
import styles from "./styles.module.scss";
import { HeaderSearchBar } from "../components/HeaderSearchBar";
import { HeaderButtons } from "../components/HeaderButtons";

export const MainHeader = () => {
  return (
    <header className={styles.header}>
      <div className={cn(styles.header__wrapper, "wrapper")}>
        <div className={styles["header__logo-line"]}>
          <a href="#" className={styles["header__logo-text"]}>
            Library
          </a>
        </div>
        <HeaderSearchBar />
        <HeaderButtons />
      </div>
    </header>
  );
};
