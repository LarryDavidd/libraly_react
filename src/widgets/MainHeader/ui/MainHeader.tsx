import styles from "./styles.module.scss";
import cn from "classnames";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../shared/store/store";
import { setTitle } from "../../../shared/store/slices/filter.slice";
import { SimpleInput } from "../../../shared/ui-kits/inputs";
import { SimpleButton } from "../../../shared/ui-kits/buttons";

export const MainHeader = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSearch = (query: string) => {
    dispatch(setTitle(query));
  };

  return (
    <header className={styles.header}>
      <div className={cn(styles.header__wrapper, "wrapper")}>
        <div className={styles["header__logo-line"]}>
          <a href="#" className={styles["header__logo-text"]}>
            Library
          </a>
        </div>
        <nav className={styles.header__navigation}>
          <SimpleInput
            onBlur={handleSearch}
            onChange={() => {}}
            placeholder="Find books..."
          />
          <SimpleButton text="Search" onClick={() => {}} />
        </nav>
      </div>
    </header>
  );
};
